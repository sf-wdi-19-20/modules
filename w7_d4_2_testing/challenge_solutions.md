## Challenges

### Base Challenges

We'll build off of the auth app you started yesterday. If you'd like to start with fresh code, you can fork and clone the <a href="github.com/sf-wdi-19-20/rails_auth" target="_blank">rails_auth solution</a>.

**Model Method Tests**
  
1. Generate a spec for your `User` model. Add this model test (from above) into the `User` model spec:

  ```
  describe "#full_name" do
    it "joins first name and last name" do
      expect(@user.full_name).to eq("#{@user.first_name} #{@user.last_name}")
    end
  end
  ```

  ```
  # generate User model spec
  $ rails g rspec:model user
  ```

  ```ruby
  #
  # spec/models/user_spec.rb
  #
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

    describe "#full_name" do
      it "joins first name and last name" do
        expect(@user.full_name).to eq("#{@user.first_name} #{@user.last_name}")
      end
    end

  end
  ```

1. Create and run a migration to add a `first_name` and a `last_name` column to the `users` table.

  ```
  $ rails g migration AddFieldsToUsers first_name last_name
  ```

  ```ruby
  #
  # db/migrate/20150806041236_add_fields_to_users.rb
  #
  class AddFieldsToUsers < ActiveRecord::Migration
    def change
      add_column :users, :first_name, :string
      add_column :users, :last_name, :string
    end
  end
  ```

  ```
  $ rake db:migrate
  ```

1. Write a `full_name` instance method in the `User` model to pass the test you added.

  ```ruby
  #
  # app/models/user.rb
  #
  class User < ActiveRecord::Base

    ...

    def full_name
      "#{first_name} #{last_name}"
    end

  end
  ```

1. Write a spec for a `generate_username` method that combines the first letter of a user's first name with the user's full last name and a random 2 digit number. All letters should be changed to lower case. Examples:

  ```ruby
  # user1 has first_name "Cameron", last_name "Jacoby"
  user1.generate_username 
  # => cjacoby64
  
  # user2 has first_name "Adam", last_name "Braus"
  user2.generate_username
  # => abraus98
  ```

  ```ruby
  #
  # spec/models/user_spec.rb
  #
  RSpec.describe User, type: :model do

    ...

    describe "#generate_username" do
      it "combines first initial, last name, and random number" do
        username = @user.generate_username
        expect(username).to include(@user.first_name[0].downcase)
        expect(username).to include(@user.last_name.downcase)
        # test format of username with regexp
        expect(username).to match(/\A[a-z]+\d{2}\z/)
      end
    end

  end
  ```

1. Write a `generate_username` method in the `User` model that passes your tests.

  ```ruby
  #
  # app/models/user.rb
  #
  class User < ActiveRecord::Base

    ...

    def generate_username
      "#{first_name[0].downcase}#{last_name.downcase}#{rand(10..99)}"
    end

  end
  ```

**Controller Tests with Recipes!**

1. Create a `Recipe` model and its controller. A recipe should include the dish's title and the instructions for making the dish. You can assume the instructions are plain text.

  ```
  $ rails g model Recipe title instructions
  $ rails g controller recipes
  ```

1. Write the spec for `recipes#index` (`recipes` controller, `index` action). It should render an index view with data from all existing recipes in the database. Do you expect your tests to pass or fail? Run the spec.

  ```ruby
  #
  # spec/controllers/recipes_controller_spec.rb
  #
  RSpec.describe RecipesController, type: :controller do
    describe "#index" do
      before do
        get :index
      end

      it "should assign @recipes" do
        all_recipes = Recipe.all
        expect(assigns(:recipes)).to eq(all_recipes)
      end

      it "should render the :index view" do 
        expect(response).to render_template(:index)
      end
    end

  end
  ```

  ```
  # to run all tests
  $ rspec
  ```

1. Update your controller to fill in the `index` action, and make sure it passes the tests you wrote.

  ```ruby
  #
  # app/controllers/recipes_controller.rb
  #
  class RecipesController < ApplicationController

    def index
      @recipes = Recipe.all
      render :index
    end

  end
  ```

1. Write the spec for a `new` action. It should render a new view (which would have the new recipe form). Do you expect your tests to pass or fail? Run the tests.

  ```ruby
  #
  # spec/controllers/recipes_controller_spec.rb
  #
  RSpec.describe RecipesController, type: :controller do

    ...

    describe "#new" do
      before do
        get :new
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

1. Update your controller to fill in the `new` action, and pass the tests in your spec.

  ```ruby
  #
  # app/controllers/recipes_controller.rb
  #
  class RecipesController < ApplicationController

    ...

    def new
      @recipe = Recipe.new
      render :new
    end

  end
  ```

1. Write a spec for a `create` action. It should use data from parameters to add a recipe to the database, then redirect to a show view for the new recipe. Do you expect your tests to pass?

  ```ruby
  #
  # spec/controllers/recipes_controller_spec.rb
  #
  RSpec.describe RecipesController, type: :controller do

    ...

    describe "#create" do
      context "success" do
        before do
          @recipes_count = Recipe.count
          post :create, recipe: { title: Faker::Lorem.words(2).join(" "), instructions: Faker::Lorem.sentence }
        end

        it "should add new recipe to database" do
          expect(Recipe.count).to eq(@recipes_count + 1)
        end

        it "should redirect_to 'recipe_path' after successful create" do
          expect(response.status).to be(302)
          expect(response.location).to match(/\/recipes\/\d+/)
        end
      end

      context "failure" do
        it "should redirect_to 'new_recipe_path' when create fails" do
          # create blank recipe (fails validations)
          post :create, recipe: { title: nil, instructions: nil }
          expect(response).to redirect_to(new_recipe_path)
        end
      end
    end

  end
  ```

1. Update your controller to fill in the `create` action, and pass as many of the tests you wrote as possible so far. **Hint:** Don't write a `show` action for this step!

  ```ruby
  #
  # app/controllers/recipes_controller.rb
  #
  class RecipesController < ApplicationController

    ...

    def create
      recipe = Recipe.new(recipe_params)
      if recipe.save
        redirect_to recipe_path(recipe)
      else
        redirect_to new_recipe_path
      end
    end

  end
  ```

1. Write a spec for a `show` action. It should render a show view with information for a single recipe. It will be associated with a parameterized url (as you can see in `rake routes`).  **Hint:** How will you get the `id` to use in the test?

  ```ruby
  #
  # spec/controllers/recipes_controller_spec.rb
  #
  RSpec.describe RecipesController, type: :controller do

    ...

    describe "#show" do
      before do
        @recipe = Recipe.create(title: Faker::Lorem.words(2).join(" "), instructions: Faker::Lorem.sentence)
        get :show, id: @recipe.id
      end

      it "should assign @recipe" do
        expect(assigns(:recipe)).to eq(@recipe)
      end

      it "should render the :show view" do 
        expect(response).to render_template(:show)
      end
    end

  end
  ```

1. Update your controller to pass the tests you wrote for your `show` action.

  ```ruby
  #
  # app/controllers/recipes_controller.rb
  #
  class RecipesController < ApplicationController

    ...
    
    def show
      @recipe = Recipe.find(params[:id])
      render :show
    end

  end
  ```

1. At this point, make sure all the tests you wrote for your `create` action are passing as well.

  ```
  # to run all tests
  $ rspec
  ```

### Stretch Challenges

1. Write a spec for an `edit` action. It should render the edit view (which shows the edit recipe form). The `edit` action is associated with a parameterized url. Since we want to display the current version of the recipe within the form, the `edit` action will use the id from the url to get that information from the database and make it available in the edit view.

  ```ruby
  #
  # spec/controllers/recipes_controller_spec.rb
  #
  RSpec.describe RecipesController, type: :controller do

    ...

    describe "#edit" do
      before do
        @recipe = Recipe.create(title: Faker::Lorem.words(2).join(" "), instructions: Faker::Lorem.sentence)
        get :edit, id: @recipe.id
      end

      it "should assign @recipe" do
        expect(assigns(:recipe)).to eq(@recipe)
      end

      it "should render the :edit view" do
        expect(response).to render_template(:edit)
      end
    end

  end
  ```

1. Update your controller to pass the tests you wrote for your `edit` action.

  ```ruby
  #
  # app/controllers/recipes_controller.rb
  #
  class RecipesController < ApplicationController

    ...

    def edit
      @recipe = Recipe.find(params[:id])
      render :edit
    end

  end
  ```

1. Write a spec for an `update` action. It should take in new data for a specific recipe, change the recipe in the database, and redirect to the show page for the item.

  ```ruby
  #
  # spec/controllers/recipes_controller_spec.rb
  #
  RSpec.describe RecipesController, type: :controller do

    ...

    describe "#update" do
      before do
        @recipe = Recipe.create(title: Faker::Lorem.words(2).join(" "), instructions: Faker::Lorem.sentence)
      end

      context "success" do
        before do
          @new_title = Faker::Lorem.words(3).join(" ")
          @new_instructions = Faker::Lorem.sentence
          put :update, id: @recipe.id, recipe: { title: @new_title, instructions: @new_instructions }
          # reload @recipe to get changes from :update
          @recipe.reload
        end

        it "should update the recipe in the database" do
          expect(@recipe.title).to eq(@new_title)
          expect(@recipe.instructions).to eq(@new_instructions)
        end

        it "should redirect_to 'recipe_path' after successful update" do
          expect(response.status).to be(302)
          expect(response.location).to match(/\/recipes\/\d+/)
        end
      end

      context "failure" do
        it "should redirect_to 'edit_recipe_path' when update fails" do
          # update with blank recipe params (fails validations)
          put :update, id: @recipe.id, recipe: { title: nil, instructions: nil }
          expect(response).to redirect_to(edit_recipe_path)
        end
      end
    end

  end
  ```

1. Update your controller to pass the tests you wrote for your `update` action.

  ```ruby
  #
  # app/controllers/recipes_controller.rb
  #
  class RecipesController < ApplicationController

    ...

    def update
      recipe = Recipe.find(params[:id])
      if recipe.update_attributes(recipe_params)
        redirect_to recipe_path(recipe)
      else
        redirect_to edit_recipe_path
      end
    end

  end
  ```

1. Let's give users the ability to create recipes associated with their own account. Set up a one-to-many (1:N) relationship between a user and their recipes.

  ```ruby
  #
  # app/models/user.rb
  #
  class User < ActiveRecord::Base

    ...

    has_many :recipes, dependent: :destroy

    ...

  end
  ```

  ```ruby
  #
  # app/models/recipe.rb
  #
  class Recipe < ActiveRecord::Base

    belongs_to :user

  end
  ```

  ```
  $ rails g migration AddUserIdToRecipes
  ```

  ```ruby
  #
  # db/migrate/20150806053426_add_user_id_to_recipes.rb
  #
  class AddUserIdToRecipes < ActiveRecord::Migration
    change_table :recipes do |t|
      t.belongs_to :user
    end
  end
  ```

  ```
  $ rake db:migrate
  ```

1. Update your recipe controller spec to check that when a user creates a recipe, it's saved to the user's recipe list.

  ```ruby
  #
  # spec/controllers/recipes_controller_spec.rb
  #
  RSpec.describe RecipesController, type: :controller do

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

    ...

    describe "#create" do
      context "success" do
        before do
          @recipes_count = @current_user.recipes.count
          post :create, recipe: { title: Faker::Lorem.words(2).join(" "), instructions: Faker::Lorem.sentence }
        end

        it "should add new recipe to database" do
          expect(@current_user.recipes.count).to eq(@recipes_count + 1)
        end

        ...

      end

      ...

    end

  end
  ```

1. Refactor the `create` method in your `RecipesController` to pass your new `create` action tests.

  ```ruby
  #
  # app/controllers/recipes_controller.rb
  #
  class RecipesController < ApplicationController

    ...

    def create
      recipe = current_user.recipes.new(recipe_params)
      if recipe.save
        redirect_to recipe_path(recipe)
      else
        redirect_to new_recipe_path
      end
    end

  end
  ```