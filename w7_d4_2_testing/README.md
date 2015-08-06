# Testing Rails Applications

| Objectives |
| :---- |
| Identify various aspects of Rails apps that we might want to test.|
| Test model methods using rspec-rails. |
| Test controllers using rspec-rails. |


## Rspec-rails

Rspec is a testing gem for Ruby.  It helps us write tests that sound like user stories or planning comments ("This function should..."). [Rspec-rails](https://github.com/rspec/rspec-rails) is a testing framework specifically for Rails.  We'll use rspec-rails alone for lower-level tests of our models and controllers. 


### Adding Rspec-rails to Your Project

1. Add rspec-rails to your Gemfile in the development in the `development` and `test` groups:

  *Gemfile*
  ```
          group :development, :test do
            gem 'rspec-rails', '~> 3.0.0'
          end
  ```

1. Run `bundle install` in your Terminal so that rspec-rails is actually added to your project.

1. Add tests to your rails project using the Terminal: `rails generate rspec:install`. This will create a `spec` directory. It also adds `spec/spec_helper.rb` and `.rspec` files that are used for configuration. See those files for more information.

1. Configure your specs by going to the `.rspec` file and removing the line that says `--warnings`.    

1. If you created models before adding rspec-rails, create a spec file for each of your models. (This is only necessary if you had a model created before you installed rspec-rails.)  In your Terminal, use the command `rails generate rspec:model article`.

### Running Rspec-rails Tests

Typical Spec Folders For a Rails Project include:

* `spec/models/user_spec.rb`
* `spec/controllers`
* `spec/views/user/show.html.erb_spec.rb`

To run **all** test specs, go to the Terminal and type `rspec` or `bundle exec rspec`.

To run only a specific set of tests, use `rspec` and the file path for the tests you want to run in the Terminal:

``` bash
    # Run only model specs
    rspec spec/models
    
    # Run only specs for ArticlesController
    rspec spec/controllers/articles_controller_spec.rb
```


## Rspec-rails Tests



### FFaker

FFaker generates random data for us! We can use it to create fake data for tests.  `Faker::Name.first_name` generates a fake first name.  `Faker::Internet.email` generates a fake email.  To see more that Ffaker can do, check out the [Ffaker docs](@TODO link).

### Testing Models

<!--@TODO how to set the `@user` variable with  User.create  (can mention stubbing/anticipate stub questions)-->

Assuming we've already set a `@user` variable with first and last names, we can test that the `full_name` method correctly caluclates the full name.

```
    context "#full_name" do
        it "joins first name and last name" do
          expect( @user.full_name ).to eq "#{@user.first_name} #{@user.last_name}"
        end
    end
```



### Testing Controllers

To test authentication, we need to have some `current_user`.   We might check a `current_user` method in a helper test, for example.

<!-- @TODO - do we need to allow_any_instance_of ...?-->
```
require 'rails_helper'

RSpec.describe ArticlesController, :type => :controller do
  before do
    user_params = Hash.new
    user_params[:email] = Faker::Internet.email
    user_params[:email_confirmation] = user_params[:email]
    user_params[:password]  = "blah"
    user_params[:password_confirmation] = user_params[:password]
    @current_user = User.create(user_params)
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(@current_user)
  end

  describe "GET #index" do
    it "should render the :index view" do 
      get :index
      expect(response).to render_template(:index)
    end

    it "should assign @articles" do
     all_articles = Article.all
     get :index
     expect(assigns(:articles)).to eq(all_articles)
    end
  end
  
  describe "GET #new" do
    it "should assign @article" do
      get :new
      expect(assigns(:article)).to be_instance_of(Article)
    end

    it "should render the :new view" do
      get :new
      expect(response).to render_template(:new)
    end 
  end
  
  describe "POST #create" do
    it "should redirect_to 'article_path' after successful create" do
      post :create, article: {title: "blah", content: "blah"}
      expect(response.status).to be(302)
      expect(response.location).to match(/\/articles\/\d+/)
    end

    it "should add article to current_user" do
      count = @current_user.articles.all.count
      post :create, article: {title: "blah", content: "blah"}
      expect(@current_user.articles.count).to be > count
    end

    it "should redirect when create fails" do
      # a stub on the create method
      allow(@current_user.articles).to receive(:create).and_return(false)
      post :create, article: { title: "blah", content: "blah"}
      expect(response).to redirect_to(new_article_path)
    end
  end
end
```




## Testing Views

We could use a tool like [Capybara](https://github.com/jnicklas/capybara) to test client-side views and interactions (e.g. does clicking on "Logout" do what we expect?).  We won't cover view testing today, though!

## Resources

1. **Rspec-Rails Documentation** https://github.com/rspec/rspec-rails  
2. **Model Specs** https://www.relishapp.com/rspec/rspec-rails/docs/model-specs  
3. **Request Specs** https://www.relishapp.com/rspec/rspec-rails/docs/request-specs/request-spec  
4. **Matchers**  https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
5. **Model Specs Example** https://github.com/wdi-sf-july/validation_tests
6. **Controller Specs** https://www.relishapp.com/rspec/rspec-rails/docs/controller-specs

