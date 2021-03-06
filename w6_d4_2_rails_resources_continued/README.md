# Rails Resources Continued

| Objectives |
| :--- |
| Explain the connection between the MVC pattern and RESTful routing for resources |
| Build routes, controller methods, and views to show and edit one data item |

## Road Map

* Set up **SHOW**
  * make a **show route** to show one plane
  * make a **show method** in the **PlanesController**
  * make a **show view**
* Set up **EDIT**
  * make an **edit route** that presents a form to edit one plane
  * make an **edit method** in the **PlanesController**
  * make an **edit view**
* Set up **UPDATE**
  * make an **update route** for updating an existing plane
  * make an **update method** for saving the updated plane and redirecting

## Take Off

We've successfully made `index`, `new`, and `create` for our `planes` resource. Now we'll add `show`, `edit`, and `update`.

## Challenges, Part 1: Showing One Plane

Right now, our app redirects to `index` after creating a new plane, which isn't helpful for quickly verifying the data that was just created. To do this, we create a `show` page for one plane.

1. Verify that you have a `show` route. Our routes file looks like this:

  ```ruby
  #
  # routes.rb
  #

  Rails.application.routes.draw do
    root to: "planes#index"
    resources :planes, only: [:index, :new, :create]
  end
  ```
  
  Let's switch `resources :planes, only: [:index, :new, :create]` to just `resources :planes` and check out the full set of routes that Rails can make for us. We won't cover `DELETE` or `PATCH` routes in class today, so for now let's modify the resources line to say `resources :planes, except[:patch, :delete]`.

  Finally, in the terminal, run `rake routes`, and verify you still have a `show` route that looks like this: `GET  /planes/:id(.:format)  planes#show`.

2. Make a controller method to find the plane you want to show and render the `show` view.

  ```ruby
  #
  # app/controllers/planes_controller.rb
  #

  PlanesController < ApplicationController

    # GET /planes/:id
    def show
      # set id from url params
      plane_id = params[:id]

      # find plane in db by its id
      @plane = Plane.find(plane_id)

      # render show view
      render :show
    end

  end
  ```

3. You should already have at least one plane in your database. In the browser, go to `localhost:3000/planes/1`. What error do you see? What should you do next?

4. Create a `show` view! It should live in `app/views/planes`.

  ```html
  <!-- app/views/planes/show.html.erb -->
  <div>
    Name: <%= @plane.name %><br>
    Type: <%= @plane.design %><br>
    Description: <%= @plane.description %>
  </div>
  ```

5. Right now, our `create` method redirects to `index` (the `/planes` path), but this isn't very helpful for verifying that a newly created plane was properly created. The best way to fix this is to have it redirect to `show`.

  ```ruby
  #
  # app/controllers/planes_controller.rb
  #

  PlanesController < ApplicationController

    # POST /planes
    def create
      # new plane data from form
      plane_params = params.require(:plane).permit(:name, :design, :description)

      # create new plane in db
      plane = Plane.create(plane_params)

      # redirect to plane's show page
      redirect_to "/planes/#{plane.id}"
    end

  end
  ```

  Recall that the `show` method has a path `/planes/:id`, which means we need to specify the `id` of the plane we want to show. To do this, we used string interpolation to attach the id of the newly created plane to the URL.

## Challenges Part 2: Editing a Plane

Editing a `plane` requires two separate methods. One will display the `plane` information to be edited by the client, and the other will handle the update request.

If we look back at how we handled displaying our `new` form we see the following pattern:

* Make a route first
* Define a controller method
* Render the view

The only difference is that now we need to use the `id` of the object being edited. We get the following plan:

* Make a route first
  * Make sure it specifies the `id` of the thing to be **edited**
* Define a controller method
  * Retrieve the `id` of the plane to be **edited** from `params`
  * Use the `id` to find the specific plane we want to edit
* Render the view
  * Display the `plane` data in the form

1. Verify that you have an `edit` route by running `rake routes`. You should see: `GET  /planes/:id/edit(.:format) planes#edit`

2. Make a controller method to find the plane you want to edit and render the `edit` view (you can use your `show` method as inspiration).

  ```ruby
  #
  # app/controllers/planes_controller.rb
  #

  PlanesController < ApplicationController

    # GET /planes/:id/edit
    def edit
      # set id from url params

      # find plane in db by its id

      # render edit view
    end

  end
  ```

3. Create an `edit` view in `app/views/planes`. Our edit form looks almost identical to our new form. Adding `value="<%= @plane.attr_name %>"` to each form field displays the existing plane data in the form (good UX!).

  ```html
  <!-- app/views/planes/edit.html.erb -->
  <form action="/planes/<%= @plane.id %>" method="post">
    <%= token_tag form_authenticity_token %>
    <input type="text" name="plane[name]" placeholder="Name" value="<%= @plane.name %>">
    <input type="text" name="plane[design]" placeholder="Design" value="<%= @plane.design %>">
    <textarea name="plane[description]" placeholder="Description"><%= @plane.description %></textarea>
    <input type="submit" value="Update Plane">
  </form>
  ```

4. Next we have to modify the `action` and `method`, but we can't explicitly change the method in the `<form>` tag, because the browser still needs to send a `POST` request. Instead we add a hidden field that contains the method we actually want to make, `put`.

  ```html
  <!-- app/views/planes/edit.html.erb -->
  <form action="/planes/<%= @plane.id %>" method="post">
    <input name="_method" type="hidden" value="put">
    ...
  ```

## Challenges Part 3: Updating a Plane in the Database

If look back at how we handled submitting our `new` form we see the following pattern:

* Make a route first
* Define a controller method
* Redirect to something

The only difference is that now we need to use the `id` of the object being updated. We get the following plan:

* Make a route first
  * Make sure it specifies the `id` of the thing to be **updated**
* Define a controller method
  * Retrieve the `id` of the plane to be **updated** from `params`
  * Use the `id` to find the specific plane we want to update
  * Retrieve the updated info sent from the form `params`
  * Update the plane in the database
* Redirect to the plane's `show` page
  * Use the plane's `id` to redirect to `show`

1. Back to routing! Run `rake routes` and make sure you see: `PUT  /planes/:id(.:format) planes#update`

2. In `PlanesController`, create the `update` method

  ```ruby
  #
  # app/controllers/planes_controller.rb
  #

  PlanesController < ApplicationController

    # PUT /planes/:id
    def update
      # set id from url params

      # find plane in db by its id

      # updated plane data from form
      plane_params = params.require(:plane).permit(:name, :design, :description)

      # update the plane in db
      plane.update_attributes(plane_params)

      # redirect to plane's show page
    end

  end
  ```
  
## Refactor: `form_for`

Let's look back our edit form:

```html
<!--airplane_app/app/views/planes/edit.html.erb-->
 <!-- form to update plane -->
 <form action="/planes/<%= @plane.id %>" method="post">
   <%= token_tag form_authenticity_token %>
   <input type="hidden" name="_method" value="put">
   <div class="form-group">
     <input type="text" name="plane[name]" placeholder="Name" value="<%= @plane.name %>" class="form-control" autofocus>
   </div>
   <div class="form-group">
     <input type="text" name="plane[design]" placeholder="Design" value="<%= @plane.design %>" class="form-control">
   </div>
   <div class="form-group">
     <textarea name="plane[description]" placeholder="Description" class="form-control"><%= @plane.description %></textarea>
   </div>
   <input type="submit" value="Update Plane" class="btn btn-default">
 </form>
```


  
There's a lot going on here! We:
* specified a `method` and `action`
* used the `token_tag` form helper to help keep our form secure
* used an html trick to change the method to `put`
* used `name` attributes to name the parts of our request
* used `value` attributes to fill in the plane's stored information from the db
* created the basic form structure
* added bootstrap cdns to `airplane_app/app/views/layouts/application.html.erb` and used bootstrap classes in our form elements


Other than creating the form structure and adding bootstrap, Rails has a shortcut to help us do all of this: `form_for`. You specify the form structure using erb (ruby syntax). Rails looks at the form you write, plus the file name, and translates it into html. Here's our edit form refactored with `form_for`, minus the bootstrap styling:

```html
<!--airplane_app/app/views/planes/edit.html.erb-->
 <!-- form to update plane -->
<%= form_for @plane do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %><br />
 
  <%= f.label :design %>
  <%= f.text_field :design %><br />
  
  <%= f.label :description %>
  <%= f.textarea :description %><br />
  
  <%= f.submit "Update Plane" %>
<% end %>
```



## Stretch Challenges

1. Implement `delete` for your `planes` resource following the example of `edit` and `update`. Think about what you'll need:
  * a `delete` route (check `rake routes`)
  * a form on the client-side to make the `delete` request (**Hint:** This form doesn't need its own view. It may make sense to have a `delete` "form", which will essentially be a button, on the plane's show page.)
  * a controller method to handle the `delete` request

1. Refactor your `new` and `edit` forms to use `form_for`.

1. Implement full CRUD for another resource in your application. Pilots or passengers might make sense :)
