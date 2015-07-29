# Intro to Rails Resources

## Takeaways from Express (Our First Framework)

* Routing a request
* Handling `params` in a request
* Persisting data with a model and a database
* Templating data in a view
* Code organization

## Why the Rails Workflow and Organization?

* To separate certain aspects found in larger applications
* To familiarize ourselves with the most common pattern used to design web applications, **Model-View-Controller**
* To facilitate workflow using conventions (no need to reinvent the wheel every time!)

## Code Organization

### Separating Concerns

In writing a large application, it's important to establish something known as **Separation of Concerns**, writing modular code that focuses on one aspect within the application. The benefit of this is similar to the idea of compartmentalization with respect to a production line, which allows for more rapid development by being able to divide and conquer the construction of a product. Compartments can focus on one task and optimize functional concerns far outside the scope of other compartments, but still achieve the expected component. Ultimately it reduces the headache of debugging and controlling a large application that will ultimately grow to a level of complexity that no one person could ever fully comprehend (nor want or need to).

### Organizational Principles

In order to manage the development of emerging aspects within a project, it's important to construct a guideline that will shape how things are separated, a design pattern, which everyone can use to maintain consistent organization of application components. This often involves a conventional choice that helps to understandably scale a project. Part of the role of a developer is to become familiar with using design patterns, but this takes time (and trust), and different patterns emphasize an array of qualities: scalability, modularity, interoperability, security, performance, et cetera.

## Model-View-Controller (MVC)

In Rails, we see one of the most popular patterns of Web Application Design that has evolved over the years, **Model-View-Controller**. The MVC patterns seeks to separate components into Data Concerns, Presentation Concerns, Request and Response (or Action) Concerns.

### MVC

| Component | Type of Concern |
| :--- | :--- |
| **M**odel | Data Concerns |
| **V**iew | Presentation Concerns |
| **C**ontroller  | Request and Response (or Action) Concerns |

Having a **Model** component helps avoid issues of mixing the logic of gathering or editing data with displaying it (Views) or determining what data is related to requests from app users (Controllers).

Having a **View** dedicates one component just to specializing presentation of html to users using data without worrying about how data was retrieved (Model) or if it was relevant to a request made by a user (Controller).

Having a **Controller** component helps manage which data resources are relevant to a request from a user, what to do with the data, and how to respond to a user without worrying about how to present an html response (View) or manage logic concerning data (Model).

## Rails Resources

Rails is a Resource-Oriented Architecture, meaning that we define our application's functionality in terms of resources. You can think of a resource as one type of data, for example `users` or `posts`. The MVC pattern helps us keep logic for one resource separate from logic for another resource. For example, our `posts` model, views, and controller should ONLY deal with `posts` functionality, not `users`, and vice versa.

### Routing for One Resource

We use RESTful routing to define our routes for a single resource. In Rails, each route maps to an action in the controller for that resource. Here is an example of RESTful routes for a `photos` resource, along with the matching controller actions (controller actions are denoted with the format `controller#action`):

| HTTP Verb | Route | Controller Action |
| :--- | :--- | :--- |
| GET | `/photos` | `photos#index` |
| GET | `/photos/new` | `photos#new` |
| POST | `/photos` | `photos#create` |
| GET | `/photos/:id` | `photos#show` |
| GET | `/photos/:id/edit` | `photos#edit` |
| PUT | `/photos/:id` | `photos#update` |
| DELETE | `/photos/:id` | `photos#destroy` |

We can set up all our RESTful routes for one resource with one line of code in `config/routes.rb`:

```ruby
#
# config/routes.rb
#

resources :photos
```

When you run `rake routes` from the terminal, you'll see all seven RESTful routes defined for our `photos` resource.

### Controller Actions

As we can see above, each of our RESTful routes maps to a controller action. Controller actions are defined as methods in the controller. Here is what the `PhotosController` would look like:

```ruby
#
# app/controllers/photos_controller.rb
#

class PhotosController < ApplicationController

  # GET /photos
  def index
  end

  # GET /photos/new
  def new
  end

  # POST /photos
  def create
  end

  # GET /photos/:id
  def show
  end

  # GET /photos/:id/edit
  def edit
  end

  # PUT /photos/:id
  def update
  end

  # DELETE /photos/:id
  def destroy
  end

end
```

You may be thinking that these methods don't do anything yet, and you're absolutely right! Our controller methods help manage data, and in order to do this, we need a model to talk to our database.

In addition to helping us manage data, our controller methods also handle rendering views and redirecting where necessary. Here is an example of a controller method that renders a view, and one that redirects:

```ruby
class PhotosController < ApplicationController

  # GET /photos
  def index
    render :index
  end

  # POST /photos
  def create
    # logic to create new photo in db goes here

    redirect_to "/photos"
  end

end
```

### Data Models

In order for our controller to do anything meaningful related to our resources, we need a model to talk to our database. A model is a representation of a SQL table in our database, and the communication between the two is handled by Rails via <a href="http://guides.rubyonrails.org/active_record_basics.html#what-is-active-record-questionmark">ActiveRecord</a>, which has a list of pre-stored SQL commands to facilitate communication. We use our model to find data, create new data, update data, and delete data.

In terminal, we can create our `photo` model using a rails generator:

```
$ rails g model photo title:string description:string image_url:string
```

This command creates a set of instructions in our app to tell SQL to create our model. To actually create this data table in our SQL database we run a migration:

```
$ rake db:migrate
```

Now our application has access to a model called `Photo` that is persistent. Don't worry too much about ActiveRecord, SQL databases, and the `rake` command just yet. We'll be going over all these concepts in way more detail next week, but for now, this is all you need to get a model up and running that persists to your database.

### Rails Console

Rails gives us a very useful way of interacting with our development database from our terminal. Typing `rails console` or `rails c` in the terminal puts you in the Rails console. The Rails console is much like `irb`, but with access the data models in your application. Remember you must be in the root directory of your Rails app to enter the Rails console.

Whenever setting up a model, you should *always* use the Rails console to make a test data item before doing anything else. This is a good check to make sure the model was set up correctly, and you can debug any issues before continuing coding. It's also nice to have some initial "seed" data in your database to work with :)

To create a new `photo` in our database from the Rails console:

```
$ rails c
irb(main):001:0> Photo.create({title: "Golden Gate Bridge", description: "Black & White", image_url: "gg_bridge.png"})
=> #<Photo id: 1, title: "Golden Gate Bridge", description: "Black & White", image_url: "gg_bridge.png", created_at: "2015-07-29 17:27:06", updated_at: "2015-07-29 17:27:06">
```
