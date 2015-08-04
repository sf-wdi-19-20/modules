# Rails Auth: Sign Up

| Objectives |
| :--- |
| Implement a User model that securly stores users' passwords |
| Build routes, controllers, and views necessary for a user to sign up |

## App Setup

Let's start a new Rails application:

* `rails new rails_auth_app -T -B -d postgresql`
* `cd rails_auth`
* `bundle`
* `rake db:create`
* `subl .`

## Model Setup

Let's leave our controllers be for the time being and setup our models.
NOTE: The default attribute type is string

```
rails g model User email password password_digest
```

`email` is the natural username for our user, and the `password_digest` is a fancy term for a hashed password.


```
rake db:migrate
```

## BCrypt Gem

Let's uncomment the `bcrypt` at the bottom of our `Gemfile`.

`Gemfile`

```ruby
  # Use ActiveModel has_secure_password
  gem 'bcrypt', '~> 3.1.7'
```

Then run `bundle` to finish installation of `bcrypt`.

### Playing With `BCrypt`

As soon as something is installed via bundler we can access it via our `rails console.` Let's play in console.


```bash
  Loading development environment (Rails 4.1.6)
 ## Let's create our first password & save the hashed output to a variable
  2.1.0 :001 > hashed_pass = BCrypt::Password.create("foobar")
   => "$2a$10$6MQQCxBpfu16koDVs3zkbeSXn1z4fqKx9xLp4.UOBQBDkgFaukWM2"

 ## Let's compare our password to another
  2.1.0 :003 > BCrypt::Password.new(hashed_pass) == "blah"
  => false
  
 ## Let's compare our password to original
  2.1.0 :004 > BCrypt::Password.new(hashed_pass) == "foobar"
  => true
  
 ## Exit
  2.1.0 :005 > exit
```

## User Model

TODO: Add some explanation here

```ruby
class User < ActiveRecord::Base
  BCrypt::Engine.cost = 12

  validates :email, :password_digest, presence: true
  validates_confirmation_of :password

  def authenticate(unencrypted_password)
    secure_password = BCrypt::Password.new(self.password_digest)
    if secure_password == unencrypted_password
      self
    else
      false
    end
  end

  def password=(unencrypted_password)
    #raise scope of password to instance
    @password = unencrypted_password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def password
    #get password, equivalent to `attr_reader :password`
    @password
  end

  def self.confirm(email_param, password_param)
    user = User.find_by_email(email_param)
    user.authenticate(password_param)
  end

end
```

## Sign Up Routes, Controllers, & Views

* **Step 1**
GET to `/signup` hits the `users#new` action and renders `/views/users/new.html.erb`.

* **Step 2**
A signup form_for POSTs to `users#create` with form data.

* **Step 3**
`users#create` creates a new user, logs them in, and redirects to `user#show`.

* **Step 4**
`users#show` renders `/views/users/show.html.erb`, the user's profile page.

## Routes

```ruby
#
# config/routes.rb
#
Rails.application.routes.draw do

  root to: "site#index"

  get "/signup", to: "users#new", as: "signup"

  resources :users

end
```

Run `rake routes` to see all your routes.

## Homepage Set Up

**Challenge:** Start your server and visit `localhost:3000` in the browser. Start debugging errors until the view rendered on the `root_path` has:

* A welcome message
* A button (link) that leads to the signup page

## Controllers

* Skeleton out the `UsersController` with: `rails g controller users new create show`

* Add a private method that creates strong parameters by whitelisting specific attributes of the user

* You should end up with...

```ruby
class UsersController < ApplicationController
  
  def new
  end

  def create
  end

  def show
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

end
```

## Challenge: Implement the Sign Up User Flow

#### Step 1

* For your `/sign_up` route, which hits the action `users#new`, render a file `new.html.erb` in `/views/users`

#### Step 2

* In that view add a `form_for` referencing user; have it post to `users#create` with `email`, `password` and `password_confirmation`

#### Step 3

* In `users#create` create a user and then log them in by creating a new session, then redirect to `user#show`
  * Bonus: create a condition that checks if the user was saved correctly. Hint: first build the user in memory with `.new` then check `if @user.save` proceed as normal `else` render the signup page again. You can [add flash messages](#flash_msgs) later.

#### Step 4

* `users#show` will find the [current user](#current_user) and display their profile page


## Useful Notes

### Creating a Session

When we create a new user, we also want to log them into our site immediately by storing their id in the session.

TODO: More context/explanation here

```ruby
session[:user_id] = user.id
```

## Bonus

### Refactor

* Using <a href="http://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password" target="_blank">`has_secure_password`</a> can magically refactor a lot of our password storing logic in the User model. Try it out and see if your app still successfully signs up a user.

### Add Flash Messages

If someone fails to sign up, we want to notify them. The flash storage is a type of session storage that is stored between requests and then cleared each time.

```ruby
class UsersController < ApplicationController
  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      # flash an error message
      flash[:error] = "Failed sign up. Please try again."
      redirect_to signup_path
    end
  end

end
```

We can then render these errors in our `application.html.erb` and style them with a class that matches their name.

```html+erb
<% flash.each do |name, msg| %>
  <%= content_tag :div, msg, class: name %>
<% end %>
```

An <a href="https://gist.github.com/suryart/7418454">example</a> of how to render flash messages with the help of Bootstrap's classes.