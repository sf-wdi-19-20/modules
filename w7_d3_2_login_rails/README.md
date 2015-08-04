# Login With Rails Challenges

We are going to use a RESTful pattern for logging in and out of our app. Since logging in is equivalent to creating a new session, we're going to create a `SessionsController`.

1. Create a sessions controller. Can you use [a generator](http://guides.rubyonrails.org/command_line.html#rails-generate) `$ rails g controller . . . `
2. Now in your `routes.rb` file make three [custom routes](http://guides.rubyonrails.org/routing.html#generating-paths-and-urls-from-code)

  ```
    get '/login'
    post '/login'
    delete '/logout'
  ```
  Now navigate to `/login`.
3. What's next? We've got routes, blank controller methods, and a `new.html.erb` template. We're working route-side in so now we can make the template query the controller. Let's put `p params[:email]` into our `create` controller method so we can detect when we hit this method.
4. Make a form that submits an email and password to the sessions#create method? (hint: use that post to the '/login' url)
5. Now that you are submitting user[:email] and user[:password] through `params` to the sessions#create method, let's use the `@user.authenticate` method provided by `has_secure_password`. [hint](http://apidock.com/rails/v4.0.2/ActiveModel/SecurePassword/ClassMethods/has_secure_password)
6. If the user is authentic set

  ```
    session[:user_id] = @user.id
  ```
7. Can you implement a method called "current_user" that is available everywhere? (hint: since all controllers inherit from `ApplicationController` you'll have to make a [helper method](http://apidock.com/rails/ActionController/Helpers/ClassMethods/helper_method) in that controller.)
8. Can you implement another method called "requires_authorization" to require a current_user to be defined for users to access a `users#show` controller method. (hint: use a helper method and a `[before_filter](http://apidock.com/rails/ActionController/Filters/ClassMethods/before_filter)`)?
9. Implement a link to logout. Use a route-side-in approach.

---
### Add a Flash

What does the `flash` method do? Can you implement it to see?

```ruby
class SessionsController < ApplicationController
  def new
  end

  def create
    user_params = params.require(:user)
    user = User.confirm(user_params[:email], user_params[:password])
    if user
      # use our handy login method
      login(user)
      redirect_to user_path(user.id)
    else
       # Flash an error message
      flash[:error] = "Failed To Authenticate. Please try again."
      redirect_to "/login"
    end

  end
end
```

```html
<!-- sessions/new.html.erb -->

<%= form_for :user, url: "/login", method: "post" do |f| %>
    <% flash.each do |name, msg| %>
      <%= content_tag :div, msg, class: name %>
    <% end %>
  <div>
    <%= f.text_field :email %>
  </div>
  <div>
    <%= f.text_field :password %>
  </div>
  <div>
    <%= f.submit %>
  </div>
<% end %>
```

---
[solution](https://gist.github.com/thebucknerlife/10090014)
