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

1. Make a new directory and initialize your Express app. You can <a href="https://github.com/sf-wdi-19-20/modules/blob/master/how_tos/express_project_setup.md" target="_blank">follow this guide</a> to set up your Express app.
2. Connect your client-side code from Project 0 to your Express app.
  * Create a folder called `public` in the root directory of your Express app.
  * Make copies of your `index.html`, `style.css`, and `script.js` from Project 0, and put them in the `public` folder.
3. <a href="https://github.com/sf-wdi-19-20/modules/blob/master/how_tos/express_project_setup.md#serving-static-assets" target="_blank">Follow this guide</a> for serving static assets and HTML files in your Express app.
4. Your client-side code should have a lot of the functionality requirements already. A good way to start is by filling in the client-side gaps by adding all the necessary event-handlers and AJAX calls. This is called an **outside-in** approach.
5. Once you have placeholder AJAX calls set up, work on your server-side API. **Test all your routes via Postman** before trying to request them from your client.
6. Submit the link to your finished project on GitHub in the <a href="https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform" target="_blank">homework submission form</a>.

## Bonus

1. Write <a href="https://github.com/sf-wdi-19-20/modules/tree/master/w3_d4_2_js_integration_testing" target="_blank">request tests</a> for each of your API routes. (**Super Bonus:** Use `cheerio` to write <a href="https://github.com/sf-wdi-19-20/modules/tree/master/w3_d4_2_js_integration_testing#stretch-challenges-view-testing" target="_blank">view tests</a>.)
2. Create a <a href="https://github.com/sf-wdi-19-20/modules/tree/master/w3_d4_1_nested_resources" target="_blank">nested resource</a> for blog post comments (`posts` "have many" `comments`).

## Docs & Resources

* <a href="http://expressjs.com/api.html#app" target="_blank">Express App Docs</a>
* <a href="https://github.com/sf-wdi-19-20/modules/blob/master/how_tos/express_project_setup.md" target="_blank">How to Set Up an Express Project</a>
* <a href="https://github.com/sf-wdi-19-20/modules/tree/master/w3_d3_2_update_and_delete" target="_blank">Updating and Deleting Data</a>
* <a href="https://github.com/sf-wdi-19-20/modules/tree/master/w2_d2_1_underscore_templating" target="_blank">Underscore Templating</a>
* <a href="https://github.com/sf-wdi-19-20/w3_catchphrasely" target="_blank">Catchphrasely</a> (This is a great example of the type of client-server interaction you'll be building. DO NOT copy any of this code unless you understand exactly what it's doing. You've been warned.)
