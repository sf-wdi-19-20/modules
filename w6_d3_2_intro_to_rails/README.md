# Intro to Rails

Objective:
* To be able to start a rails project with no database and create routes to static templates.

## Route-side In Development

Start with the routes and follow the directions the errors give you.

## Install-fest

1. ```$ gem install rails```
2. ```$ gem install bundler``` to manage ruby packages called "gems"

### Basic Challenges

1. Create a new rails project called ```rails-blog``` in your dev folder. Run ```rails server```. go to ```http://localhost:3000``` in your browser.
  ```ruby
  $ rails new rails-blog
  $ rails s
  ```
2. Check your routes
  ```bash
  $ rake routes
  ```
3. Add a root route to a controller#action ```pages#splash```
  ```ruby
  #
  # routes.rb
  #

  root 'pages#splash'
  ```
5. Check your routes again. What's new?
5. Reload ```http://localhost:3000```. What error do you recieve? What is the next step?
6. Add the proper controller to the proper folder. Refresh your browser. New error? What next?
  ```
  | app
    | assets
    | controllers
      | concerns
      - application_controller.rb
      - pages_controller.rb
    | helpers
  ...
  ```
  ```ruby
  class PagesController < ApplicationController
    def splash
    end
  end
  ```

7. Add the properly named template in the correct folder.
  ```
  | app
    | assets
    | controllers
    | helpers
    | mailers
    | models
    | views
      | layouts
      | pages
        - splash.html.erb
  | bin
  ...
  ```
  *splash.html.erb*
  ```html
  <h1>Hello world</h1>
  ```
9. Reload localhost. See "Hello world"? Nice work that is your root route and template! Otherwise known as your "woot" route.
![woot](amazing.gif)
## NEXT CHALLENGE! Add Resource Routes
8. Add a route to posts#index:
  ```ruby
  #
  # routes.rb
  #

  root: pages#splash
  resources: :posts, only: [:index]
  ```
9. Check your routes (```$ rake routes```)
10. Navigate to your new route, what's wrong?
11. Use a rails generator to generate a post controller
  ```bash
  $ rails g controller posts index
  ```
12. What files did this add? Did it make any changes to your routes file? Check your routes. Comment out ```get 'posts/index```. Check your routes again.
  ```bash
  rails-blog  rake routes
        Prefix Verb URI Pattern             Controller#Action
  pages_splash GET  /pages/splash(.:format) pages#splash
         posts GET  /posts(.:format)        posts#index
  ```
13. Navigate to your post index route. Now customize your post#index.html.erb file a bit : ).
14. Add some user routes to your ```routes.rb`` file like this.
  ```ruby
  resources :users, except: [:index, :update, :edit]
  ```
14. Use a rails generator to create a users controller with a new, create, show, and destroy methods.
15. Run ```$ rake routes```. What routes were added? Comment out the extra routes the generator added. We already got the routes using the ```resources``` method in ```routes.rb```.

**How very Wii-sourceful**
![wiisource](wisource.gif) 

### Stretch

1. Start a new project called ```rails-microblog```.
2. Add a root route to a pages#index method and template.
3. Add an articles controller with an index, new, create, delete, update, destroy, and edit routes *hint: ```resources :articles``` and controller methods.
4. Add templates for articles#new, #index, and #edit.
