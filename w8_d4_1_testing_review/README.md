# Testing Review

| Objectives |
| :--- |
| Review RSpec setup in a Rails app |
| Write controller specs for `new` and `create` actions |
| Validate model data |
| Use flash messages to notify users of success and errors |

## Review: RSpec Setup

1. Add `rspec-rails` to your `Gemfile` in the development and test groups:

  ```ruby
  #
  # Gemfile
  #
  group :development, :test do
    gem 'rspec-rails'
  end
  ```

2. Run `bundle` install to add `rspec-rails` to your project:

  ```
  $ bundle
  ```

3. Create the `spec` folder and set up `rspec-rails` configuration:

  ```
  $ rails g rspec:install
  ```

  This creates a `spec` directory. It also adds the configuration files `spec/spec_helper.rb`, `spec/rails_helper.rb` and `.rspec`. See those files for more information.

4. Configure your specs by going into the `.rspec` file and removing the line that says `--warnings` if there is one.

5. For any existing models or controllers you'd like to test, you'll have to manually create spec files:

  ```
  $ rails g rspec:model recipe
  $ rails g rspec:controller recipes
  ```

  **Note:** Spec files for any models or controllers you create AFTER you install `rspec-rails` will automatically be generated as long as you use `rails g ...` to create models/controllers.

6. To run all test specs, you can type `rspec` or `bundle exec rspec` in the terminal. To run only a specific set of tests, type `rspec` and the file path for the tests you want to run:

  ```ruby
  # run only model specs
  rspec spec/models

  # run only specs for `RecipesController`
  rspec spec/controllers/recipes_controller_spec.rb
  ```

## Controller Specs

We'll be working in our <a href="https://github.com/sf-wdi-19-20/recipe_app" target="_blank">recipe app</a>, and our goal is to write specs for the `new` and `create` actions in our `RecipesController`.

```ruby
#
# spec/controllers/recipes_controller_spec.rb
#
require 'rails_helper'

RSpec.describe RecipesController, type: :controller do

  # everything nested under `before do` runs before EVERY test
  before do
    user_params = Hash.new
    user_params[:first_name] = Faker::Name.first_name
    user_params[:last_name] = Faker::Name.last_name
    user_params[:email] = Faker::Internet.email
    user_params[:password] = Faker::Lorem.words(2).join

    # our controller methods expect a `current_user` that returns the user currently logged in if there is one or `nil` if no one is logged in
    # our specs have no sense of our app's `session`, so we make a contrived `@current_user` that we can pass to our controller methods
    @current_user = User.create(user_params)
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(@current_user)
  end

  # `describe` blocks group together tests by feature
  describe "#new" do

    # each `it` block is an individual test
    it "should assign @recipe" do
      get :new
      expect(assigns(:recipe)).to be_instance_of(Recipe)
    end

    it "should render the :new view" do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe "#create" do

    # `context` groups tests by certain scenarios within features
    context "success" do
      it "should add new recipe" do
        recipes_count = Recipe.count
        post :create, recipe: {name: "Kale Salad", instructions: "Toss kale with apples and walnuts."}
        expect(Recipe.count).to eq(recipes_count + 1)
      end

      it "should redirect_to 'recipe_path' on successful create" do
        post :create, recipe: {name: "Kale Salad", instructions: "Toss kale with apples and walnuts."}
        expect(response.status).to be(302)
        expect(response.location).to match(/\/recipes\/\d+/)
      end
    end

    context "failure" do
      it "should redirect to 'new_recipe_path' when create fails" do
        post :create, recipe: {name: nil}
        expect(response).to redirect_to(new_recipe_path)
      end
    end
  end

end
```
