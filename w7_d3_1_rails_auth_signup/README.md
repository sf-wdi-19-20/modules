# Rails Auth: Sign Up

| Objectives |
| :--- |
| Implement a User model that securely stores passwords |
| Build routes, controllers, and views necessary for a user to sign up |

## Challenges

#### App Set Up

1. Create a new rails app called `rails_auth`. Your app should have a Postgres database (**Hint:** `-d postgresql`). Once your app is created, remember to run `rake db:create` to create your database.

#### Model Set Up

2. Generate a `User` model with the attributes `email` and `password_digest`:

  ```
  rails g model User email password_digest
  ```

  **Note:** `string` is the default attribute type, so we don't need to explicitly specify it.

  `email` serves as a natural username for our users, and `password_digest` is the rails-y attribute for a hashed password.

3. From the terminal, `rake db:migrate` to run your migration (which creates the user table in your database).

4. Open up your app in Sublime, and navigate to your `User` model. Add `has_secure_password` to the model. This line of code gives our `User` model authentication methods via `bcrypt`.

  ```ruby
  #
  # app/models/user.rb
  #
  class User < ActiveRecord::Base
    has_secure_password
  end
  ```

#### Secure Password with BCrypt

5. Open up your app in Sublime, and open the `Gemfile`. Uncomment the `bcrypt` gem (near the bottom of the file). We need `bcrypt` to enable the `has_secure_password` functionality.

  ```ruby
  #
  # Gemfile
  #
  # Use ActiveModel has_secure_password
  gem 'bcrypt', '~> 3.1.7'
  ```

6. From the terminal, run `bundle install` (or `bundle` for short) to install `bcrypt`.

#### Sign Up Routes

7. Add a root route that points to `"site#index"`.

8. Add resources for users with the actions ONLY `new`, `create`, and `show`. Run `rake routes` in the terminal to see all your routes.

#### Site Controller & Homepage View

9. Start your server and visit `localhost:3000` in the browser. Start debugging errors until the view rendered on the `root_path` has:
  * A welcome message
  * A button (link) that leads to the route `"/users/new"`

  **Note:** Typically our controllers are plural, i.e. `UsersController`. In the case of our `SiteController`, it's ok for it to be singular since it only contains logic related to static pages and is not interacting with any resources in our database.

#### Users Controller

10. Create a `UsersController`:

  ```
  $ rails g controller users new create show
  ```

11. Open up your `UsersController`. At the bottom of the file, add a private method called `user_params` that creates strong parameters by whitelisting specific user attributes.

  ```ruby
  #
  # app/controllers/users_controller.rb
  #
  class UsersController < ApplicationController

    def new
    end

    def create
    end

    def show
    end

    private
      def user_params
        params.require(:user).permit(:email, :password)
      end

  end
  ```

  **Note:** Private methods are only accessible in the controller they are defined in - they can't be accessed from anywhere else in our application. Using a private method for `user_params` DRYs up our code, since we need this logic in multiple controller methods (`create`, and down the line, `update`).

#### User Flow for Sign Up

12. The `users#new` action should render a view called `new.html.erb`. The view should have a form that posts to `users#create` with the parameters `email` and `password`. Your form should look something like this:

  ```html+erb
  <!-- app/views/users/new.html.erb -->

  <%= form_for @user do |f| %>
    <%= f.email_field :email, placeholder: "Email", autofocus: true %>
    <%= f.password_field :password, placeholder: "Password" %>
  <% end %>
  ```

13. In order for `form_for @user` to work, we need to pass a `@user` instance from the controller to the view.

  ```ruby
  #
  # app/controllers/users_controller.rb
  #
  class UsersController < ApplicationController

    def new
      @user = User.new
      render :new
    end

    ...

  end
  ```

14. In the `users#create` action, create a user, then log them in by creating a new session. After the user is successfully created and the session is set, redirect to the user show page.

  ```ruby
  #
  # app/controllers/users_controller.rb
  #
  class UsersController < ApplicationController

    ...

    def create
      user = User.create(user_params)
      session[:user_id] = user.id

      # redirect_to "/users/#{user.id}"
      # the line above can be refactored to use rails route helpers:
      redirect_to user_path(user)
    end

    ...

  end
  ```

  **Stretch Challenge:** Create a condition that checks if the user was saved correctly. **Hint:** first build the user in memory with `User.new(user_params)`, then check `if user.save` proceed as normal `else` redirect to `"/users/new"` again.

15. The last step is to display attributes for the currently logged in user on the user show page. To do this, update the `users#show` method in the controller find a user in the database using the current `session[:user_id]`.

  ```ruby
  #
  # app/controllers/users_controller.rb
  #
  class UsersController < ApplicationController

    ...

    def show
      @user = User.find(session[:user_id])
      render :show
    end

    ...

  end
  ```

16. Finally, we want to display data for the currently logged-in user in the view:

  ```html+erb
  <!-- app/views/users/show.html.erb -->

  Welcome, <%= @user.email %>!
  ```

## Stretch Challenges

1. Add <a href="http://guides.rubyonrails.org/active_record_validations.html" target="_blank">validations</a> to your `User` model.
  * Validate the <a href="http://guides.rubyonrails.org/active_record_validations.html#presence" target="_blank">presence</a> of `email` and `password`.
  * Validate the <a href="http://guides.rubyonrails.org/active_record_validations.html#format" target="_blank">format</a> and <a href="http://guides.rubyonrails.org/active_record_validations.html#uniqueness" target="_blank">uniqueness</a> of `email`.
  * Validate that the `password` is <a href="http://guides.rubyonrails.org/active_record_validations.html#length" target="_blank">at least 6 characters long</a>.

2. Add a `password_confirmation` field to your signup form. Adding the field requires the user to enter their password twice in order to sign up. Read more about it in the <a href="http://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password" target="_blank">`has_secure_password` docs</a>. You will also need to edit your private method `user_params` in the `UsersController` to permit `password_confirmation`.

3. Add a <a href="http://api.rubyonrails.org/classes/ActionDispatch/Flash.html" target="_blank">flash message</a> that notifies a user if they signed up successfully or not. **Hint:** In your `users#create` action, display a `flash[:notice]` if the user signed up successfully, or a `flash[:error]` if the user failed validations and didn't save to the database. You will also need a way to display your flash messages in the view:

  ```html+erb
  <!-- app/views/layouts/application.html.erb -->

  <!-- creates a div for each flash message and gives it a class matching the flash's name (notice, error, etc.) -->
  <% flash.each do |name, msg| %>
    <%= content_tag :div, msg, class: name %>
  <% end %>
  ```

  Here's an <a href="https://gist.github.com/suryart/7418454" target="_blank">example</a> of how to render flash messages with the help of Bootstrap's classes.

4. Refactor your `flash[:error]` to display the error messages from the failed validations if a user doesn't save to the database. **Hint:** Try <a href="http://ruby-doc.org/core-2.2.0/Array.html#method-i-join" target="_blank">joining</a> the <a href="http://api.rubyonrails.org/classes/ActiveModel/Errors.html#method-i-full_messages" target="_blank">`full_messages`</a>.

5. Implement `edit` and `update` actions for your users.

## Docs & Resources

* <a href="http://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password" target="_blank">`has_secure_password`</a>
* <a href="http://guides.rubyonrails.org/active_record_validations.html" target="_blank">ActiveRecord Validations</a>
