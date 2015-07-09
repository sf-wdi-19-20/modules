# Project 0 API - Weekend Lab

**Objective:** Build an API for your Project 0 blog app using Node and Express.

This week, you learned how to call APIs with AJAX, and you built your first API with Node and Express. This weekend, you'll be:
  * Creating an API for blog posts with Node and Express
  * Hooking up your client-side code from Project 0 to your Express project
  * Requesting data from your blog post API with AJAX

## Server-Side Requirements

1. A route to show all blog posts: `GET /posts`
2. A route to show one blog post: `GET /posts/:id`
3. A route to create a new blog post: `POST /posts`
4. A route to update a single blog post: `PUT /posts/:id`
5. A route to delete a single blog post: `DELETE /posts/:id`

## Client-Side Requirements

1. A list of blog posts in your view. You'll need:
  * An AJAX call to `GET` all the blog posts from your API
  * jQuery and Underscore templating to render the posts in the view
2. A form to create a new blog post. You'll need:
  * A jQuery event-handler on the form
  * An AJAX call to `POST` the data to your API
  * jQuery and Underscore templating to render the newly created post in the view
3. Forms for editing each individual blog post. You'll need:
  * Edit buttons to toggle the forms
  * jQuery event-handlers on the forms
  * An AJAX call to `PUT` the new post data to your API
  * jQuery and Underscore templating to replace the current blog post with the updated version
4. Buttons to delete each individual blog post. You'll need:
  * jQuery event-handlers on the buttons
  * An AJAX call to `DELETE` the data from your server
  * jQuery to remove the deleted blog post from the view

## How to Get Started

## Bonus

* Write request tests for each of your API routes

## Docs & Resources
