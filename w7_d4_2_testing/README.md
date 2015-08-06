# Testing Rails Applications

| Objectives |
| :---- |
| Identify various aspects of Rails apps that we might want to test.|
| Test model methods using rspec-rails. |
| Test controller actions using rspec-rails. |

Reference: [Testing Pre-reading](https://github.com/ajbraus/wdi-homework/blob/master/rails-testing.md)

## rspec-rails

Rspec is a testing gem for Ruby. It helps us write tests that sound like user stories or planning comments ("This method should..."). <a href="https://github.com/rspec/rspec-rails" target="_blank">rspec-rails</a> is a testing framework specifically for Rails. We'll use rspec-rails alone to test our models and controllers.

rspec-rails helps us implement the four-phase testing methodology (with setup, exercise, verify, and tear down steps). Here's what a simple rspec-rails test might look like:

```ruby
#
# spec/models/pet_spec.rb
#

RSpec.describe Pet, type: :model do

  # setup
  before do
    @pet = Pet.create({name: "Morocco", age: 3})
  end

  describe "#is_cute?" do
    it "returns true" do
      expect(@pet.is_cute?).to be true   #exercise and verify   
    end
  end

  # teardown is automatic

end
```

### Adding rspec-rails to Your Project

1. Add rspec-rails to your Gemfile in the `development` and `test` groups:

  ```ruby
  #
  # Gemfile
  #
   group :development, :test do
     gem 'rspec-rails', '~> 3.0.0'
   end
  ```

1. Run `bundle install` (or `bundle` for short) in your terminal so that rspec-rails is actually added to your project.

1. Add tests to your rails project using the terminal:

  ```bash
  $ rails g rspec:install
  ```

  This creates a `spec` directory. It also adds `spec/spec_helper.rb` and `.rspec` files that are used for configuration. See those files for more information.

1. Configure your specs by going into the `.rspec` file and removing the line that says `--warnings`.

1. If you created models before adding rspec-rails, create a spec file for each of your models. (This is only necessary if you had a model created before you installed rspec-rails.)

  ```bash
  $ rails g rspec:model article
  ```

### Running rspec-rails Tests

Typical spec folders for a Rails project include:

* `spec/models/user_spec.rb`
* `spec/controllers/users_controller_spec.rb`
* `spec/views/user/show.html.erb_spec.rb`

To run **all** test specs, go to the terminal and type `rspec` or `bundle exec rspec`.

To run only a specific set of tests, type `rspec` and the file path for the tests you want to run in the terminal:

  ```bash
  # run only model specs
  rspec spec/models

  # run only specs for `ArticlesController`
  rspec spec/controllers/articles_controller_spec.rb
  ```

## Writing rspec-rails Tests

### Cool Tool: FFaker

FFaker generates random data for us! We can use it to create fake data for tests. For example, `FFaker::Name.first_name` generates a fake first name. `FFaker::Internet.email` generates a fake email. To see more that FFaker can do, check out the <a href="http://www.rubydoc.info/github/emmanueloga/ffaker/FFaker" target="_blank">FFaker docs</a> and/or this <a href="http://ricostacruz.com/cheatsheets/ffaker.html" target="_blank">handy FFaker cheatsheet</a>.

**Bonus:** Later, we can use FFaker to seed our database (but hold off!).

  ```ruby
  #
  # db/seeds.rb
  #

  25.times do
    Student.create(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      grade: rand(9..12),
      yearbook_quote: Faker::HipsterIpsum.sentence(5)
    )
  end
  ```

  ```bash
  $ rake db:seed
  ```

To add FFaker to your project, put it in your Gemfile for the development and test groups:

  ```ruby
  #
  # Gemfile
  #
  group :development, :test do
    gem 'ffaker'
  end
  ```

Then run `bundle` in your terminal.

### Testing Models

We can set up a `@user` for testing purposes with `User.create`:

  ```ruby
  #
  # spec/models/user_spec.rb
  #
  require 'rails_helper'
  RSpec.describe User, type: :model do

    before do
      user_params = Hash.new
      user_params[:first_name] = Faker::Name.first_name
      user_params[:last_name] = Faker::Name.last_name
      user_params[:email] = Faker::Internet.email
      user_params[:password] = Faker::Lorem.words(2).join
      user_params[:password_confirmation] = user_params[:password]
      @user = User.create(user_params)
    end

  end
  ```

Assuming we've already set a `@user` variable with first and last names, we can then test that the `full_name` method correctly calculates the full name:

  ```ruby
  #
  # spec/models/user_spec.rb
  #
  require 'rails_helper'
  RSpec.describe User, type: :model do

    ...

    describe "#full_name" do
      it "joins first name and last name" do
        expect(@user.full_name).to eq("#{@user.first_name} #{@user.last_name}")
      end
    end

  end
  ```

### Testing Controllers

To test authentication, we need to define some `@current_user` before each of our tests run. The `allow_any_instance_of(...` line gives us access to the `@current_user` we just created in the controller methods we want to test.

  ```ruby
  #
  # spec/controllers/articles_controller_spec.rb
  #
  require 'rails_helper'
  RSpec.describe ArticlesController, type: :controller do

    before do
      user_params = Hash.new
      user_params[:first_name] = Faker::Name.first_name
      user_params[:last_name] = Faker::Name.last_name
      user_params[:email] = Faker::Internet.email
      user_params[:password] = Faker::Lorem.words(2).join
      user_params[:password_confirmation] = user_params[:password]
      @current_user = User.create(user_params)
      allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(@current_user)
    end

    describe "GET #index" do
      it "should assign @articles" do
        all_articles = Article.all
        get :index
        expect(assigns(:articles)).to eq(all_articles)
      end

      it "should render the :index view" do
        get :index
        expect(response).to render_template(:index)
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
      context "success" do
        it "should add new article to current_user" do
          articles_count = @current_user.articles.count
          post :create, article: {title: "blah", content: "blah"}
          expect(@current_user.articles.count).to eq(articles_count + 1)
        end

        it "should redirect_to 'article_path' after successful create" do
          post :create, article: {title: "blah", content: "blah"}
          expect(response.status).to be(302)
          expect(response.location).to match(/\/articles\/\d+/)
        end
      end

      context "failure" do
        it "should redirect to 'new_article_path' when create fails" do
          # create blank article (assumes validations are set up in article model for presence of title and content)
          post :create, article: { title: nil, content: nil}
          expect(response).to redirect_to(new_article_path)
        end
      end
    end
  end
  ```

## Testing Views

We could use a tool like [Capybara](https://github.com/jnicklas/capybara) to test client-side views and interactions (e.g. does clicking on "Logout" do what we expect?). We won't cover view testing today, though!

## Resources

1. **rspec-rails Documentation** https://github.com/rspec/rspec-rails
2. **More rspec-rails Documentation** http://rspec.info/documentation/3.3/rspec-rails
3. **Model Specs** https://www.relishapp.com/rspec/rspec-rails/docs/model-specs
4. **Controller Specs** https://www.relishapp.com/rspec/rspec-rails/docs/controller-specs
5. **Request Specs** https://www.relishapp.com/rspec/rspec-rails/docs/request-specs/request-spec
6. **Matchers**  https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers

## Challenges

### Base Challenges

We'll build off of the auth app you started yesterday. If you'd like to start with fresh code, you can fork and clone the <a href="github.com/sf-wdi-19-20/rails_auth" target="_blank">rails_auth solution</a>.

**Model Method Tests**

1. Generate a spec for your `User` model. Add this model test into the `User` model spec:

  ```
  describe "#full_name" do
    it "joins first name and last name" do
      expect(@user.full_name).to eq("#{@user.first_name} #{@user.last_name}")
    end
  end
  ```

1. Create and run a migration to add a `first_name` and a `last_name` column to the `users` table.

1. Write a `full_name` instance method in the `User` model to pass the test you added.

1. Write a spec for a `generate_username` method that combines the first letter of a user's first name with the user's full last name and a random 2 digit number. All letters should be changed to lower case. Examples:

  ```ruby
  # user1 has first_name "Cameron", last_name "Jacoby"
  user1.generate_username
  # => cjacoby64

  # user2 has first_name "Adam", last_name "Braus"
  user2.generate_username
  # => abraus98
  ```

  Hint: use a regular expression to check the format of the username.

1. Write a `generate_username` method in the `User` model that passes your tests.

**Controller Tests with Recipes!**

1. Create a `Recipe` model and its controller. A recipe should include the dish's title and the instructions for making the dish. You can assume the instructions are plain text.

1. Write the spec for `recipes#index` (`recipes` controller, `index` action). It should render an index view with data from all existing recipes in the database. Do you expect your tests to pass or fail? Run the spec.

1. Update your controller to fill in the `index` action, and make sure it passes the tests you wrote.

1. Write the spec for a `new` action. It should render a new view (which would have the new recipe form). Do you expect your tests to pass or fail? Run the tests.

1. Update your controller to fill in the `new` action, and pass the tests in your spec.

1. Write a spec for a `create` action. It should use data from parameters to add a recipe to the database, then redirect to a show view for the new recipe. Do you expect your tests to pass?

1. Update your controller to fill in the `create` action, and pass as many of the tests you wrote as possible so far. **Hint:** Don't write a `show` action for this step!

1. Write a spec for a `show` action. It should render a show view with information for a single recipe. It will be associated with a parameterized url (as you can see in `rake routes`).  **Hint:** How will you get the `id` to use in the test?

1. Update your controller to pass the tests you wrote for your `show` action.

1. At this point, make sure all the tests you wrote for your `create` action are passing as well.

<!-- solution with id params looks like: http://stackoverflow.com/questions/9223336/how-to-write-an-rspec-test-for-a-simple-put-update -->

### Stretch Challenges

1. Write a spec for an `edit` action. It should render the edit view (which shows the edit recipe form). The `edit` action is associated with a parameterized url. Since we want to display the current version of the recipe within the form, the `edit` action will use the id from the url to get that information from the database and make it available in the edit view.

1. Update your controller to pass the tests you wrote for your `edit` action.

1. Write a spec for an `update` action. It should take in new data for a specific recipe, change the recipe in the database, and redirect to the show page for the item.

1. Update your controller to pass the tests you wrote for your `update` action.

1. Let's give users the ability to create recipes associated with their own account. Set up a one-to-many (1:N) relationship between a user and their recipes.

1. Update your recipe controller spec to check that when a user creates a recipe, it's saved to the user's recipe list.

1. Refactor the `create` method in your `RecipesController` to pass your new `create` action tests.
