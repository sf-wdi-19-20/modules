# Intro Rails
## Flying Through CRUD

### Related Materials/Information

* Conventions over Configurations 
* Models, Views, and Controllers 
* HTTP (**GET, POST, PUT, Delete**) verbs
* The `params` of a request, (Covered in **Express**)
* Forms (**action**, **method**, and **form fields**)
* redirects



## Lesson Road Map

We demonstrate routing by making an application to handle managing our favorite planes.

* Talk CRUD and RESTful routing conventions
* Create a new **app folder** for our routing app
	* Setup an index
		* write an **index route** for planes
		* make a **controller** for planes
			* make an **index method**
		* make an **index view**
		* generate a **plane model**
	* Setup a new
		* make a **new route** that presents a form for new planes
		* make a **new method** in the **PlanesController**
		* make a **new view**
	* Setup a create
		* make a **create route** for submitting new planes
		* make a **create method** for saving new planes and redirecting
		


## CRUD and REST

**CRUD** stands for **Create**, **Read**, **Update**, **Delete**. These are the minimum and most common actions need for interacting with data in an application. For example someone needs to be able to *Create* their facebook profile, **Read** it, **Update** it, and if they're busy, **Delete** it.

Typically we associate **CRUD** with the following **HTTP** methods

| CRUD Operation | HTTP Method | Example|
| :---  |	:--- | :-- |
| Create | POST | `POST "/puppies?name=spot"` (create a puppy named spot) |
| Read   | GET  | `GET "/puppies"` (Shows all puppies) |
| Update | PUT or PATCH | `PUT "/puppies/1?name=lassy"` (change puppy number 1 to have name lassy) |
| Delete | DELETE | `Delete "/puppies/1"` (destroy the first puppy, yikes!!!!) |

REST stands for **REpresentational State Transfer**. We will demonstrate these practices throughout this lesson, but for now preparing don't worry too much about it yet.

## Part 1: On the Runway 

### Setup With Rails New

| Motive:  |
|:----|
| Familiarize ourselves with the initial setup of a new application with the intent of making a *planes* application |


* `$ rails new route_app`
* `$ cd route_app`
* `$ rails s`

Now our app is up and running, [localhost:3000](localhost:3000/). At our `root`route we notice a "Welcome aboard message". That's because we have yet to create a **controller** and **views** that we can set as our **root**.


### A Look at Routes


In *Rails*, routing information for incoming requests are separated out into their own file, under `config/routes.rb`, that defines how to connect *requests* to *controllers*. Go to `config/routes.rb` and inside the routes block erase all the commented text. It should now look exactly as follows

	Rails.application.routes.draw do

	end




 Now we can define all our routes.

> NOTE: A **Controller** is a class that just handles rendering views and managing data resources using methods you'll define. 


Your `routes.rb` will just be telling your app how to connect *HTTP* requests to a **Controller**. Let's get ready for our first route. 

* In Rails we distinguish the `'/'` (*root*) from other routes, and we just write `root to: 'planes#show'` to indicate it in `routes.rb`.

	`/config/routes.rb`

		Rails.application.routes.draw do

			root to: 'planes#index'

		end

* We should add a resourceful route to get to this page as well. 
	
		Rails.application.routes.draw do

			root to: 'planes#index'

			resources :planes, only: [:index]

		end

	




### Making a Planes Controller

We want to create a *planes_controller*. **NOTE**: Controller names are always plural and files should always be `snake_case`.

	$ subl app/controllers/planes_controller.rb

Let's begin with the following 

	class PlanesController < ApplicationController
		def index
			render text: "Hello, pilots."
		end
	end

We have defined the`PlanesController` *class*, given it the method `#index`, and told the `#index` to render a *text* response `'Hello, pilots.'`

> Note:  We've also indicated that `PlanesController` inherits from `ApplicationController`, which looks like the following:

>		class ApplicationController < ActionController::Base
	 	 # Prevent CSRF attacks by raising an exception.
	 	 # For APIs, you may want to use :null_session instead.
	 	 protect_from_forgery with: :exception
		end

> Indeed, `ApplicationController` also inherits from `ActionController::Base`, which is just the main *action* handling class. Actions it might handle are requests, responses, rendering views, etc. The `ApplicationController` helps define the setup/configuration of all other controllers and has methods defined accross the entire application.


If we go to [localhost:3000/](localhost:3000/) we get the greeting.


### A View For Planes

Let's seperate our rendered greeting into a view called `index.html.erb`, which by default `ActionController` will look for in a  `app/views/planes/` folder. Create the `app/views/planes` folder and the file below

`app/views/planes/index.html.erb`

	Hello, pilots!

and make the following changes to `PlanesController`.

`app/controllers/planes_controller.rb`

	class PlanesController < ApplicationController
		
		def index
			# Note it used to say 
			#	render text: 'Hello, pilots'
			render :index
		end
		
	end

### A Model Plane (an automagical first use)

A model is just a representation of a SQL table in our database, and the communication between the two is handled by rails via `ActiveRecord`, which has a list of prestored SQL commands to facilitate communication.


In terminal, we create our plane model using a rails generator as follows,

	$ rails g model plane name:string design:string description:text
	
which just creates the instructions in our app to tell SQL to create our model. To actually create this table data in our SQL database we do a migration. To migrate our database we use `rake` as follows:

	$ rake db:migrate
	
Now our application will have access to a model called `Plane` that will be persitent. Don't worry too much about the `rake` command that was just used as previous students have had the same frustration with it.

| Jerome Allouche WDI SF (JAN-MARCH) HipChat|
| :--- |
| "[T]ook me a while to understand what "rake" is conceptually \ ... \ maybe include a resource like this? \ [suggestion](https://gist.github.com/DelmerGA/8ad9f9f5b075c51df858) " |

### Making your first Model

**NOTE: DON'T SKIP THIS STEP**

We go straight into terminal to enter *rails console*.

	$ rails console
The command above enters the rails console to play with your application. 

To create our first plane model in our database we use our reference to the `Plane` class and call the `Plane#create` method to write our plane to our database.

	> Plane.create({name: "x-wing", design: "unknown", description: "top secret"}) 
	=> #<Plane ....>

This will avoid issues later with `index` trying to render planes that aren't there.

## Back to Routes

|	Motive	|
|	:----	|
|	We've seen a little of each part of the MVC framework, and now we cycle back through over and over as we develop an understanding of the work flow.

	

### A new route for planes

We don't have any planes in our database yet. To be able to make planes we must create a route for them. The *RESTful* convention would be to make a form available at `/planes/new`. 

Let's add this route.

`/config/routes.rb`

	Rails.application.routes.draw do
		root to: 'planes#index'

		resources :planes, only: [:index, :new]
		
	end

### A new method for planes

The request for `/planes/new` will search for a `planes#new`, so we must create a method to handle this request. This will render the `new.html.erb` in the `app/views/planes` folder.

`app/controllers/planes_controller.rb`

	class PlanesController < ApplicationController
		
		...
		
		def new
			render :new
		end
		
	end



### A new view for planes

Let's create the `app/views/planes/new.html.erb` with a form that the user can use to sumbit new planes to the application. Note: the action is `/planes` because it's the collection we are submiting to, and the method is `post` because we want to create.


`app/views/planes/new.html.erb`

	<form action="/planes" method="post">
		<input type="text" name="plane[name]">
		<input type="text" name="plane[design]">
		<textarea name="plane[description]"></textarea>
		
		<button> Save Plane </button>
	</form>

Note: how we have now defined our next `route`, which is 
	
> **post "/planes"** which should be handled by a  **"planes#create"**
	


### Creating another route


Our submission of the `plane` form in `new.html.erb` isn't being routed at the moment let's change that


`/config/routes.rb`

	Rails.application.routes.draw do

		root to: 'planes#index'
		
		resources :planes, only: [:index, :new, :create]
		
	end


### Creating another method

This leads to the most complicated method yet to be talked about. For now we will just make it redirect to the `"/planes"` route.

`app/controllers/planes_controller.rb`

	class PlanesController < ApplicationController
		
		...
		
		def create
			redirect_to "/planes"
		end
		
	end

> Someone should now be able to submit a form to our site, right???

### A fatal flaw

It turns out that forms aren't so simple in Rails anymore. There are security concerns that rails is trying to handle from the very beginning. 

> Recall that we indicated that `PlanesController` inherits from `ApplicationController`, which looks like the following:

>		class ApplicationController < ActionController::Base
	 	 # Prevent CSRF attacks by raising an exception.
	 	 # For APIs, you may want to use :null_session instead.
	 	 protect_from_forgery with: :exception
		end
> The line that says
> 
> 		protect_from_forgery with: :exception
> means that our forms will have added layer of security. 


To even get our rails app to accept our form it needs an `authenticity_token`, which we will casually add in and explain later.

`app/views/planes/new.html.erb`

	<form action="/planes" method="post">
		<input type="text" name="plane[name]">
		<input type="text" name="plane[design]">
		<textarea name="plane[description]"></textarea>
		<%= token_tag form_authenticity_token %>
		
		<button> Save Plane </button>
	</form>

Our form should now submit properly. However, we will see that rails makes handling all the things required in a form easier using something called *form helpers* later.

### An operational create method

We just need to save the data being sent in the request. We might be tempted to do the following.

`app/controllers/planes_controller.rb`

	class PlanesController < ApplicationController
		
		...
		
		def create
			plane = params[:plane]
			Plane.create(plane)
			redirect_to "/planes"
		end
		
	end

However, while this might be fine in rails `3.2` it won't fly in rails `4.0`, which has something called **strong parameters**. To follow this strong parameters convention we must change the way we accept params to something like one of the following.

We can grab the `:plane` hash out of the `params` hash, and the tell it to permit the keys we want: `:name`, `:design`, and `:description`.

`app/controllers/planes_controller.rb`

	class PlanesController < ApplicationController
		
		...
		
		def create
			plane = params[:plane].permit(:name, :design, :description)
			Plane.create(plane)
			redirect_to "/planes"
		end
		
	end

or, (preferably) just say `.require(:plane)`


`app/controllers/planes_controller.rb`

	class PlanesController < ApplicationController
		
		...
		
		def create
			plane = params.require(:plane).permit(:name, :design, :description)
			Plane.create(plane)
			redirect_to "/planes"
		end
		
	end


In reality **strong params** is just a nice way of making sure someone isn't setting param values that you don't want them to be setting.


### Refactoring our Index

We first need to setup our `#index` method in `planes`

`app/controllers/planes_controller.rb`

	class PlanesController < ApplicationController
		
			def index
				@planes = Plane.all
				render :index
			end
		
		...
		
	end


Let's finally put some `erb` in our `index` view.

`app/views/index.html.erb`
	
	<% @planes.each do |plane| %>
		
		<div>
			Name: <%= plane.name %> <br>
			Type: <%= plane.design %> <br>
			Description: <%= plane.description %>
		</div>
	
	<% end %>
