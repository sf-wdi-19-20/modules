| Objectives |
| :---- |
| install rspec in rails app |
| create unit tests for our model validations |


### Terms

* `System Under Test`: some application component being tested or "what's being tested."
* `Dependent-On Component`: some application component connected to the **SUT**, but not really the subject of the test.
* [`Four Phase Test`](http://robots.thoughtbot.com/four-phase-test): is a methodology of setting up tests that breaks down a test into four phases: `setup`, `exercise`, `verify`, and `teardown`.

### Overview

**Testing is awesome (in the long term):**

* Save time
* Catch tricky edge cases
* It's a breeze to maintain/refactor/extend codebase
    * Immediate feedback when new feature x breaks old feature y.
    * Did the tests pass before? And do they pass now?

    
**Testing is awful (in the short term):**

* It's easy to write **bad** tests
    * Brittle interfaces -- the test breaks frequently as code changes
    * False positives -- poorly designed test gives you false confidence
    * It's hard to test the _right_ things
        * You know the joke about losing your car keys at night?

**Types of Tests:**

You can only test the "seams" of your programs / isolated components (Martin Fowler). If you can't test your code, it's likely badly entangled.

* Unit Tests -- do small, low-level things work independetly? (e.g. a function or Model logic)
* Integration Tests -- do multiple things work in concert? (e.g. Controller logic)
* Acceptance Tests -- do elaborate, high-level things work as intended? (e.g. View logic).

**Testing Methodologies:**

* **EDD**: Error Driven Development
    * Get an error
    * Google it
    * Get another error
    * Google it
    * When you stop getting errors... You're done!

* **TDD**: Test Driven Development
    * "Red, Green, Refactor"
    * Write the tests before you code
        * Ensures you've understood the problem space before coding a solution. 
        * Keeps you honest: If you write them first, you're less likely to skip them!
    * "Ping Pong" (pair programming)
        * One person writes the test, the other person passes them.
        
* **BDD**: Behavior Driven Development
    * Like _User Stories_, but focus on the "behavior" of objects or users.
        * What does an instance _let_ you do?
        * What does a user _do_ on a page?
    * Tests the views / UI -- assumes everything else is working

**Take Away**

* Don't test everything -- 100% test coverage is a myth
* Write tests that help you be more proficient as a developer

## Rspec Rails

(It's always best to refer to offical documentation, see Resource#1,
in case these instructions go out of date eventually.)

**Typical Spec Folders:**

* spec/models/user_spec.rb
* spec/controllers
* spec/views/user/show.html.erb_spec.rb

**To run specs:**
`rspec` or `bundle exec rspec`

To run specific specs

``` bash
    # Run only model specs
    rspec spec/models
    
    # Run only specs for ArticlesController
    rspec spec/controllers/articles_controller_spec.rb
```

BUT FIRST...

#### Rspec Rails / SETUP

**Step 1:**  

Add rspec rails to your Gemfile in the development, test group and bundle install  

*Gemfile*

        group :development, :test do
          gem 'rspec-rails', '~> 3.0.0'
        end

*Terminal*  
`bundle install`  

**Step 2:**  

Create spec directory, and necessary configurations  

*Terminal*  
`rails generate rspec:install`  

and go to the `.rspec` file and remove the line that says

```
--warnings
```

This adds `spec/spec_helper.rb` and `.rspec` files that are used for configuration. See those files for more information.  

**Step 3:**  

Create a spec file for our model.  
This is only necessary if you had a model created before you installed rspec.  

*Terminal*  
`rails generate rspec:model article`  

**Step 4:**  

Run your rspec tests (they should all pass as you don't have any)  


### Testing Models

Assuming we've already stubbed a user (`@user`)...

```
    context "#fullname" do
        it "joins first name and last name" do
          expect( @user.fullname ).to eq "#{@user.first_name} #{@user.last_name}"
        end
    end
```



### Testing Views
Assuming we've already stubbed a user (`@user`) who has written some blog posts....

```
  it "displays the titles of blog posts authored by the user" do
    assign(:user, @some_new_user)

    render :template => "users/show.html.erb"

    expect(rendered).to match @some_new_user.posts.first.title
  end
```

### Testing Controllers

The most common thing to go stubbing is the `current_user`, which is something we will not care to test directly. Nevertheless you will still test the `current_user` method in a helper test for example.
require 'rails_helper'


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

  describe "Get #index" do
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
  
  describe "Get #new" do
    it "should assign @article" do
      get :new
      expect(assigns(:article)).to be_instance_of(Article)
    end

    it "should render the :new view" do
      get :new
      expect(response).to render_template(:new)
    end 
  end
  
  describe "Post #create" do
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


### More Testing Tools
**Shoulda-Matchers**

Convenience methods for commmon tests.
    
    ``` ruby
      it { should validate_presence_of(:email) }
      it { should have_many(:posts) }
    ```
    
**Capybara / Jasmine / Selenium**

How do you test client-side views and interactions (e.g. clicking on x does y)?

    ``` Javascript
        // Jasmine
    
        describe("Clicking on a tic-tac-toe cell that has been taken", function(){
            
            it("does nothing", function(){
              var target_cell = document.body.querySelectorAll('td')[8]
              target_cell.click()
              var initial_cell_value = target_cell.innerHTML // "X"
              target_cell.click()
              var cell_value = target_cell.innerHTML // "X"
              expect(cell_value).toEqual(initial_cell_value)
            })
        
        })
        
    ```
    

**Mocking Data**
FFaker Gem -- A quick way to generate random seed data
Factory Girl Gem -- A quick way to generate objects / instances.

``` ruby
    FactoryGirl.define do
      factory :user do
        first_name { Faker::Name.first_name }
        last_name { Faker::Name.last_name }
        email { Faker::Internet.email }
        password 'foobar'
        password_confirmation 'foobar'
      end
    end
```

Now we can use our "user factory" in tests:

``` ruby
    let(:user) { FactoryGirl.build(:user) }
    
    context "#fullname" do
        it "joins first name and last name" do
          expect( user.fullname ).to eq "#{user.first_name} #{user.last_name}"
        end
    end
    
```

### Resources

1. **Rspec-Rails Documentation** https://github.com/rspec/rspec-rails  
2. **Model Specs** https://www.relishapp.com/rspec/rspec-rails/docs/model-specs  
3. **Request Specs** https://www.relishapp.com/rspec/rspec-rails/docs/request-specs/request-spec  
4. **Matchers**  https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
5. **Matchers** https://www.relishapp.com/rspec/rspec-expectations/v/3-1/docs/built-in-matchers
5. **Model Specs Example** https://github.com/wdi-sf-july/validation_tests
6. **Controller Specs** https://www.relishapp.com/rspec/rspec-rails/docs/controller-specs


**Stubbing Resources**

- **Rspec Stubs:** https://www.relishapp.com/rspec/rspec-mocks/v/2-3/docs/method-stubs  

- **Rspec Stubs Examples:** http://old.rspec.info/documentation/mocks/stubs.html  
