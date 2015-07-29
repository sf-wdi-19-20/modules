# Rails Resources Continued

| Objectives |
| :--- |
| Explain the connection between the MVC pattern and RESTful routing for resources |
| Build routes, controller methods, and views to show and edit one data item |

## Lesson Road Map

* Set up SHOW
  * write a **show route** for planes to show an individual plane
  * make a **show method** in the **PlanesController**
  * make a **show view**
* Set up EDIT
  * make an **edit route** that presents a form to edit an individual plane
  * make an **edit method** in the **PlanesController**
  * make an **edit view**
* Set up UPDATE
  * make an **update route** for updating an existing plane
  * make an **update method** for saving the updated plane and redirecting

## Take Off

We've successfully made an `index`, `new`, and `create`. Now we will add a `show`, `edit`, and `update`

### Revisting our application flow

Right now, our app redirects to  `#index` after a create, which isn't helpful for quickly verifying what you just created. To do this we create a `#show`.


### Showing 
Let's add our `show` route.

`/config/routes.rb`

  RouteApp::Application.routes.draw do
    root to: 'planes#index'
    
    ## My new show method
    get '/planes/:id', to: 'planes#show'
    
    get '/planes', to: 'planes#index'
    
    get '/planes/new', to: 'planes#new'
    
    post '/planes', to: 'planes#create'
    
  end


Is this right?? No, our `/planes/:id` path comes before our `/planes/new` path, which means that whenever a request for `/planes/new` is received, the application will first encounter the route `planes/:id` and will interpret `new` in the request for `/planes/new` as the `:id` parameter.  The request will be routed to `planes#show` with `"new"` as the `:id` parameter - *that's* not going to work.  **The order of your routes matters**.

It should be as follows 

`/config/routes.rb`

  RouteApp::Application.routes.draw do
    root to: 'planes#index'
    
    get '/planes', to: 'planes#index'
    
    get '/planes/new', to: 'planes#new'
    
    ## My new show method
    get '/planes/:id', to: 'planes#show'
    
    post '/planes', to: 'planes#create'
    
  end


A controller method


`app/controllers/planes_controller.rb`

  PlanesController < ApplicationController
    
    ...
    
    def show
      plane_id = params[:id]
      @plane = Plane.find(plane_id)
      render :show
    end
    
  end

A view for showing a plane


`app/views/show.html.erb`
    
    <div>
      Name: <%= @plane.name %> <br>
      Type: <%= @plane.design %> <br>
      Description: <%= @plane.description %>
    </div>

## Changing the `#create` redirect

The `#create` method redirects to `#index` (the `/planes` path), but this isn't very helpful for verrifying that a newly created plane was properly created. The best way to fix this is to have it redirect to `#show`.


  PlanesController < ApplicationController
    
    ...
    
    def create
      plane = params.require(:plane).permit(:name, :design, :description)
      plane = Plane.create(plane)
      redirect_to "/planes/#{plane.id}"
    end
    
  end


Recall that the `#show` method has a path `/planes/:id`, which means we need to specify the `id` of the plane we want to show. To do this  we added 

    plane = Plane.create(plane)
and once it's created it has an `id` we can use to redirect. We use string interpolation as follows. 

    redirect_to "/planes/#{plane.id}"


## Editing

Editing a plane model requires two seperate methods. One to display the model information to be edited by the client, and another to handle updates submitted by the client.

If look back at how we handled the getting of our `new` form we see the following pattern.

* Make a route first
* Define a controller method
* render view

The only difference is that now we need to use the `id` of the object to be edited. We get the following battle plan.

* Make a route first
  * Make sure it specifies the `id` of the thing to be edited
* Define a controller method 
  * Retrieve the `id` of the model to be edited from `params`
  * use the `id` to find the model
* render view
  * use model to display in the form 

### Getting to an Edit

We begin with handling the request from a client for an edit page. 

* We can easily define a **RESTful** route to handle getting the edit page as follows

  `/config/routes.rb`

    RouteApp::Application.routes.draw do
      root to: 'planes#index'
      
      get '/planes', to: 'planes#index'
      
      get '/planes/new', to: 'planes#new'
      
      get '/planes/:id', to: 'planes#show'
      
      # The Edit path
      get '/planes/:id/edit, to: 'planes#edit'
      
      post '/planes', to: 'planes#create'
      
    end
  
* Similarly, using our `#show` method as inspiration we write an `#edit` method

  
  `app/controllers/planes_controller.rb`
  
    PlanesController < ApplicationController
      
      ...
      
      def edit
        plane_id = params[:id]
        @plane = Plane.find(plane_id)
        render :edit
      end
      
    end


* Let's quickly begin the setup of an `edit` form using our `new.html.erb` from earlier, by just adding  `...value="<%= @plane.attr_name %>"...` to each respect field.


  `app/views/planes/edit.html.erb`
  
    <form action="/planes/<%= @plane.id %>" method="post">
      <input type="text" name="plane[name]" value="<%= @plane.name %>">
      <input type="text" name="plane[design]" value="<%= @plane.design %>">
      <textarea name="plane[description]" value="<%= @plane.description %>"></textarea>
      <%= token_tag form_authenticity_token %>
      
      <button> Update Plane </button>
    </form>

* Next we have to modify the `action` and `method`, but we can't explicitly change the method at the top of the form, because the browser still needs to send a `POST` request. Instead we add field that contains the method we actually want to make, `PUT`.  Using something as follows

  
    <input name="_method" type="hidden" value="put" />

  Combined with the change we make to the `action` we get the following.
  
  `app/views/planes/edit.html.erb`

    <form action="/planes/<%= @plane.id %>" method="post">
      <input name="_method" type="hidden" value="put" />
      ....
    </form>


That's pretty much the whole-shebang when comes to getting an edit page. Our previous knowledge has really come to help us understand what we need to do. We'll see this also true for the update that still needs to be handled witht the submission of the form above.


### Putting updated form data 

If look back at how we handled the submission of our `new` form we see the following pattern.

* Make a route first
* Define a controller method 
* redirect to something

The only difference now is that we will need to use the `id` of the object being update.

* Make a route first
  * Make sure it specifies the `id` of the thing to be **updated**
* Define a controller method 
  * Retrieve the `id` of the model to be **updated** from `params`
  * use the `id` to find the model
  * retrieve the updated info sent from the form in `params`
  * update the model
* redirect to show
  * use `id` to redirect to `#show` 
  
### Putting it into action

* **Make a route** that uses the `id` of the object to be updated
    `/config/routes.rb`

    RouteApp::Application.routes.draw do
      root to: 'planes#index'
      
      get '/planes', to: 'planes#index'
      
      get '/planes/new', to: 'planes#new'
      
      get '/planes/:id', to: 'planes#show'

      get '/planes/:id/edit, to: 'planes#edit'
      
      post '/planes', to: 'planes#create'
      
      # Route the incoming update using the id
      put '/planes/:id', to: 'planes#update'
    
    end
  
  Note the method we now need to create is called `#update`
* In the `PlanesController` we will create the `#update` method mentioned above
  
  `app/controllers/planes_controller.rb`
  
    PlanesController < ApplicationController
      
      ...
      
      def update
        plane_id = params[:id]
        plane = Plane.find(plane_id)
        
        # get updated data
        updated_attributes = params.require(:plane).permit(:name, :design, :description)
        # update the plane
        plane.update_attributes(updated_attributes)
        
        #redirect to show
        redirect_to "/planes/#{plane_id}"
      end
      
    end