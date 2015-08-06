# Rails Review Minilab


Here's what rails is made for! Build a straight up blog, quickly!

### Part 0: Requirements and Planning


<!--1. Write user narratives and draw simple wireframes for your-->
2. **Don't copy and paste or clone code. Start with `rails new -d postgresql <app name>`**
1. Follow **Route-Side-In** - start with the routes, then controllers, then templates, then models.
1. Start with one part of the site's functionality. Try enabling a splash page and an about page first, then move on to your data-driven routes and views.
1. Pay attention to error messages closely - they are your best helpers!

### Part 1: Time Trials

Try to complete the following functionality in `3` hours maximum with a target time of `2` hours. Being able to do it once in under `3` hours is not enough. Everyone should do this at least twice to establish some kind of average work time.

NOTE: Please use a timer to time yourself when working on part 1. You'll be doing part 1 at least twice! Please have your two `best` times recorded and ready to share on Monday, and have notes of questions that came up when doing this process.

Resources:

* [rails generate](http://guides.rubyonrails.org/command_line.html#rails-generate)
* [rails destroy](http://guides.rubyonrails.org/command_line.html#rails-destroy)

Use the following when constructing a blog. Avoid adding styling or anything extra during time trials. This is barebones functionality.

Requirements:


* We need 3 models
  * a `User` model, with
    * `email`, `first_name`, `last_name`, and `password_digest` attributes
    * authentication (i.e. `User.confirm` and `secure_pasword`)
    * simple validations for a unique email, email and password confirmations, and presence for email and password attributes
  * a `Post` model, with
    * `title` and `content` attributes
    * simple validations on the title and content for presence
    
  <!-- * a `Comment` model, with-->
  <!--  * a `content` attribute -->
  <!--  * a simple validation on content for presence-->

* We need one One to Many association: one user has many posts.
* We need a `pages` controller with `index`, and `about`
* We need a `users` controller with all seven resources
* We need a `posts` controller with all seven resources
* We need a `sessions` controller with at least `new` and `create`.
* We need `session_helper` methods for `login`, `logged_in?`, `logout`, and `current_user`.

With all of the above, our site's users should be able to:

* sign up
* log in
* log out
* view, create, and edit posts once logged in
* edit, update, and destroy *only their own* posts


## Tips:

* Use partials for your posts' `edit` and `update`.
* Put a basic nav bar in your `layouts/application.html.erb` using a `ul` and some conditionals.

## Part 2: Testing

Pick one of the blogs you've implemented from `part 1`.

* Come up with a fun username generation scheme. Add a `generate_username` model test for your `user`, and implement your `generate_username` method.
* Add a method that model tests for your `article`.
* Add some basic `controller` tests for your `sessions` controller. Remember `new` and `create` are the easiest actions to test in a controller.
* Add some basic `controller` tests for your posts controller. Try testing the `index`, `new`, `create`, and `show` actions so that the basic user workflow of creating a new post is complete.

## Part 3: Partials It Up

Go back through your application and separate your views into partials.

## Part 4: Seeding Your Application

Add `ffaker` to your Gemfile and use it in your `db/seeds.rb` file to create fake users and associated articles.  Run `rake db:seed` from the Terminal to actually seed the db.


## Additional Challenge Ideas

2. Use bootstrap to style your blog.

<!--5. Work together and help each other.-->

1. Add `Tag`s, and create a many-to-many association between tags and posts.
3. Add `Comment`s, and create a one-to-many association between posts and comments.
4. Limit the length of comments by implementing a character counter on the client side.



## Independent Research Ideas  

5. Use HTTParty to consume an external API
2. Use will_paginate for pagination
5. Make pretty URLs with Stringex or friendly-id
6. Implement HAML for your views
6. Integrate with slack with slack-notify
2. Upload images with Paperclip
4. Submit your posts or comments through ajax
6. Parse dates with Chronic
7. Implement an 'undo' functionality with Paranoid

<!--8. Implement a payment gateway with the stripe gem-->
