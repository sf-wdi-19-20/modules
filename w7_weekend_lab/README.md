# Rails Review Minilab Blog

Here's what Rails is made for! Build a straight up blog, quickly!  

## Part 0: Deliverables and Planning

###Deliverables

1. Blog: your blog (or blog variant) should have users and posts. The users should be able to:

  * sign up
  * log in
  * log out
  * view posts
  * create, update, and destroy *only their own* posts
 
Based on these goals, we expect everyone to complete *at least* part 1 of this project. 

1. Readme: the `README.md` file inside your app should list the steps you take to complete the project, including each terminal command you run and each change you make to a file.

When you're ready, use [this form] (https://docs.google.com/a/generalassemb.ly/forms/d/1zSklHtCYKg_NhkLdjlQaCXFrHJQ4Io266cKUs9_Dg8I/viewform) to let us know how the project went and to submit the link to your project on github.


### Process

1. **Don't copy and paste or clone code. Start with `rails new -d postgresql <app name>`**.
1. Follow **Route-Side-In** - start with the routes, then controllers, then templates, then models.
1. Start with one part of the site's functionality. Try enabling a landing page (aka splash page) and an about page first, then move on to your more data-driven routes, controllers, and views.
1. Pay attention to error messages closely - they are your best helpers!
1. Work together and help each other.

## Part 1: Basic Site Functionality (with Auth)

The features in part 1 of this lab would take a typical intermediate developer less than 2 hours to complete... Rails is very fast!  The main reason why we want you to record the steps you take in your README.md is so that you can use it as a guide to create Rails apps quickly!

Reference the modules and readings from the last two weeks!

### Things to Build

Your blog will have quite a few pieces. As you work, develop one piece of your site at a time, route-side in.

### Routes & Controllers

We need routes to support our user stories, and controllers to say what should happen at those routes.

We need a `site` or `pages` controller with `index` and `about`, to show those pages on our site.

For auth, we need a `users` controller with all seven routes. We also need a `sessions` controller with at least `new` and `create`.

We need a `posts` controller with all seven routes.   

#### Views

We need views for any `index`, `new`, `show`, and `edit` routes.

#### Models

We need 2 models: 
  * a `User` model, with
    * `email`, `first_name`, `last_name`, and `password_digest` attributes
    * authentication (i.e. `has_secure_password`)
    * simple validations for a unique email, email and password confirmations, and presence for email and password attributes
  * a `Post` model, with
    * `title` and `content` attributes
    * simple validations on the title and content for presence

We need a one-to-many association: one user has many posts.


## Part 2: Testing

1. Come up with a fun username generation scheme. Add a `generate_username` model test for your `user`, then implement your `generate_username` method.

1. Add some basic `controller` tests for your `sessions` controller. Remember, `new` and `create` are the easiest actions to test in a controller.

1. Add some basic `controller` tests for your `posts` controller. Try testing the `index`, `new`, `create`, and `show` actions so that the basic user workflow of creating a new post is complete.

## Part 3: Layouts & Partials

1. Add Bootstrap to your project with the asset pipeline.

1. Put a basic nav bar in your `layouts/application.html.erb`. 

1. Go back through your application and separate your views into partials.

## Additional Challenge Ideas

1. [Seed your database](https://github.com/sf-wdi-19-20/modules/tree/master/w7_d4_2_testing#cool-tool-ffaker) with fake data! Add `ffaker` to your Gemfile and use it in your `db/seeds.rb` file to create fake users and associated articles.  Run `rake db:seed` from the Terminal to actually seed the db.

1. Add comments, and create a one-to-many association between posts and comments.   Use [nested routes](http://guides.rubyonrails.org/routing.html#nested-resources)to nest comments under posts.  Plan out user stories and wireframe any views you'll need.

1. Add tags, and create a many-to-many association between tags and posts. Plan out user stories and wireframe any views you'll need.



## Independent Research Ideas  

1. Use HTTParty to consume an external API.

1. Upload images with Paperclip.

1. Use will_paginate for pagination.

1. Make pretty URLs with friendly-id or Stringex.

1. Parse words like "tomorrow" or dates like "May 27th" into specific dates,  with Chronic.

1. Implement an "undo" functionality (e.g., to undo deleting a post) with Paranoia.

1. Let people donate to your blog by implementing a payment gateway with Stripe.

1. Submit your posts or comments through ajax.
