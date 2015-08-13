# Testing Review

| Objectives |
| :--- |
| Validate model data |
| Use flash messages to notify users of success and errors |
| Review RSpec setup in a Rails app |
| Write controller specs for `new` and `create` actions |

## Model Validations

Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use and provides built-in helpers for common needs.

**Docs:** <a href="http://guides.rubyonrails.org/active_record_validations.html" target="_blank">Active Record Validations</a>

```ruby
#
# app/models/recipe.rb
#
class Recipe < ActiveRecord::Base
  belongs_to :user

  # add validations
  validates :name, :instructions,
    presence: true,
    length: { maximum: 255 }
end
```

**Note:** The database columns `name` and `instructions` are strings. The `string` datatype is restricted to 255 characters in the database. Because of this, it's a good idea to put a length validation on any string column, so we can handle the error if the user tries to enter in more than 255 characters.

### Testing Validations in the Console

```ruby
$ rails c
irb(main):001:0> recipe = Recipe.create(name: nil, instructions: nil)
=> #<Recipe id: nil, name: nil, instructions: nil, user_id: nil, created_at: nil, updated_at: nil>
irb(main):002:0> recipe.valid?
=> false
irb(main):003:0> recipe.errors.full_messages
=> ["Name can't be blank", "Instructions can't be blank"]
```

## Error-Handling

Model validations prevent users from saving invalid data to the database, but in order to provide a good experience for our users, we should do some error-handling in the controller.

```ruby
#
# app/controllers/recipe_controller.rb
#
class RecipesController < ApplicationController
  before_filter :authorize, except: [:index, :show]

  ...

  def create
    # recipe = current_user.recipes.create(recipe_params)
    # redirect_to recipe_path(recipe)

    # refactor
    recipe = current_user.recipes.new(recipe_params)
    if recipe.save
      redirect_to recipe_path(recipe)
    else
      redirect_to new_recipe_path
    end
  end

  ...

end
```

## Flash Messages

As part of our error-handling, it would be nice to let our users know when their actions succeed or fail - this is where flash messages come in.

The flash provides a way to pass temporary primitive-types (String, Array, Hash) between actions. Anything you place in the flash will be exposed to the very next action and then cleared out. This is a great way of doing notices and alerts before redirecting to a display action that can then expose the flash to its template.

**Docs:** <a href="http://api.rubyonrails.org/classes/ActionDispatch/Flash.html" target="_blank">Flash</a>

```ruby
#
# app/controllers/recipe_controller.rb
#
class RecipesController < ApplicationController
  before_filter :authorize, except: [:index, :show]

  ...

  def create
    recipe = current_user.recipes.new(recipe_params)
    if recipe.save
      flash[:notice] = "Successfully created recipe."
      redirect_to recipe_path(recipe)
    else
      flash[:error] = recipe.errors.full_messages.join(", ")
      redirect_to new_recipe_path
    end
  end

  ...

end
```

Setting flash messages in the controller makes them available in our view, but doesn't actually render them. To render flash messages, we need to explicitly display them in the view. It makes sense to put this in the application layout so it's rendered on every view.

```html
#
# app/views/layouts/application.html.erb
#
<body>
  <% flash.each do |name, msg| %>
    <%= content_tag :div, msg, class: "alert #{name == 'error' ? 'alert-danger' : 'alert-notice'}" %>
  <% end %>
</body>
```

## Review: RSpec Setup

1. Add `rspec-rails` to your `Gemfile` in the development and test groups. We'll also go ahead and add <a href="https://github.com/ffaker/ffaker" target="_blank">ffaker</a> and <a href="https://github.com/thoughtbot/factory_girl_rails" target="_blank">factory_girl_rails</a>:

  ```ruby
  #
  # Gemfile
  #
  group :development, :test do
    gem 'rspec-rails'
    gem 'ffaker'
    gem 'factory_girl_rails'
  end
  ```

2. Run `bundle` install to add the new gems to your project:

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

Our goal is to write request specs for the `new` and `create` controller actions. It helps to first write out in plain English what exactly we'd like to test for each action.

### Testing `new`

We want to test the following assertions:
  1. It should respond with an HTTP status code of 200
  2. It should assign a new instance of `Recipe` in memory (allows us to use the `form_for` syntax in the view)
  3. It should render the `new` view (form to create a new recipe)

```ruby
#
# spec/controllers/recipes_controller_spec.rb
#
require 'rails_helper'

RSpec.describe RecipesController, type: :controller do

  describe "#new" do
    before do
      get :new
    end

    it "should respond with 200 success" do
      expect(response.status).to be(200)
    end

    it "should assign @recipe" do
      expect(assigns(:recipe)).to be_instance_of(Recipe)
    end

    it "should render the :new view" do
      expect(response).to render_template(:new)
    end
  end

end
```

If we run our tests for `new` now, they're going to fail. This is because accessing `new` depends on having a `current_user`, since users must be logged in to see the view to create a new recipe. Our tests don't have any concept of `current_user` yet, so let's fix that. We could do something like the below, where we create and log in  `current_user` before each test:

```ruby
#
# spec/controllers/recipes_controller_spec.rb
#
require 'rails_helper'

RSpec.describe RecipesController, type: :controller do
  before do
    user_params = Hash.new
    user_params[:first_name] = Faker::Name.first_name
    user_params[:last_name] = Faker::Name.last_name
    user_params[:email] = Faker::Internet.email
    user_params[:password] = Faker::Lorem.words(2).join
    # create and log in current_user
    current_user = User.create(user_params)
    session[:user_id] = current_user.id
  end

  ...

end
```

This will work, but it's not very DRY, since we may need to repeat the same logic in specs for other controllers that also require a `current_user`. We can solve this problem by using a factory to set up a `user` instance that's reuseable across all specs.

**Note:** Another benefit of using factories is that they can store a valid record in memory, without having to save it to our test database. Not saving records to the database significantly speeds up our tests. Read more about the `.build` (non-persistent) and `.create` (persistent) methods in the <a href="https://github.com/thoughtbot/factory_girl/blob/master/GETTING_STARTED.md#using-factories">Factory Girl Getting Started Guide</a>.

### Factory Setup

1. Create a new folder in your `spec` directory called `factories`. Each factory should have its own file within the `factories` folder. We'll be creating a `user` factory in this example, so your folder structure should look like this:

  ```
  | spec
    | factories
      - user.rb
  ```

2. Inside the `user` factory, we'll move over some of the logic from our spec file used to create a new user:

  ```ruby
  #
  # spec/factories/user.rb
  #
  FactoryGirl.define do
    factory :user do
      first_name Faker::Name.first_name
      last_name Faker::Name.last_name
      email Faker::Internet.email
      password Faker::Lorem.words(2).join
    end
  end
  ```

3. In our controller spec, we can refactor our `current_user` logic to use the factory instead:

  ```ruby
  #
  # spec/controllers/recipes_controller_spec.rb
  #
  require 'rails_helper'

  RSpec.describe RecipesController, type: :controller do
    before do
      # create and log in current_user
      current_user = FactoryGirl.create(:user)
      session[:user_id] = current_user.id
    end

    ...

  end
  ```

### Testing `create`

We want to test the following assertions:
  1. When successful, it should add a new recipe to the database
  2. When successful, it should respond with an HTTP status code of 302 (found, or redirected)
  3. When successful, it should redirect to `recipe_path` (show page)
  4. When fails, it should respond with an HTTP status code of 302 (found, or redirected)
  5. When fails, it should redirect to `new_recipe_path`
  6. When fails, it should flash an error message

```ruby
#
# spec/controllers/recipes_controller_spec.rb
#
require 'rails_helper'

RSpec.describe RecipesController, type: :controller do

  ...

  describe "#create" do
    context "success" do
      before do
        @recipes_count = Recipe.count
        post :create, recipe: {name: "Kale Salad", instructions: "Toss kale with apples and walnuts."}
      end

      it "should add new recipe" do
        expect(Recipe.count).to eq(@recipes_count + 1)
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect_to 'recipe_path'" do
        expect(response.location).to match(/\/recipes\/\d+/)
      end
    end

    context "failure" do
      before do
        post :create, recipe: {name: nil, instructions: nil}
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect to 'new_recipe_path'" do
        expect(response).to redirect_to(new_recipe_path)
      end

      it "should flash an error message" do
        expect(flash[:error]).to be_present
      end
    end
  end

end
```

## Docs & Resources

* <a href="http://guides.rubyonrails.org/active_record_validations.html" target="_blank">Active Record Validations</a>
* <a href="http://api.rubyonrails.org/classes/ActionDispatch/Flash.html" target="_blank">Flash Messages</a>
* <a href="http://ricostacruz.com/cheatsheets/ffaker.html" target="_blank">FFaker Cheat Sheet</a>
* <a href="https://github.com/thoughtbot/factory_girl/blob/master/GETTING_STARTED.md#using-factories">Factory Girl Getting Started Guide</a>
* <a href="https://github.com/rspec/rspec-rails" target="_blank">RSpec Rails Docs</a>