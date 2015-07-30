# Rails Asset Pipeline (Challenges)

## Adding Bootstrap

Here are three ways to add bootstrap to a project.

0. Download files
1. Use a CDN
2. Use a Gem
3. Use Bower

### Download Files

1. Go to [Bootstrap Getting Started](http://getbootstrap.com/getting-started/) and download their files.
2. Add these files to the `vendor/assets` folder. This will automatically pull them into your asset pipeline and make them available on the client.

### Use a CDN

1. Go to [Bootstrap](http://getbootstrap.com/) and grab the links to their CDN.
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
2. Add these links to your application.html.erb file
3. Now the CDN will load these files into your client. And away you go!

### Use a Gem

1. Find the best gem for the job by searching 'bootstrap' at [Ruby Toolbox](https://www.ruby-toolbox.com/)
2. Which gem did you find that was the best?
3. For this tutorial we'll use the trending `bootstrap-sass` gem. [Github Repo](https://github.com/twbs/bootstrap-sass)
4. Follow the [Installation Instructions](https://github.com/twbs/bootstrap-sass#installation) to install and add the bootstrap files from inside the gem into your asset pipeline.

### Use Bower

[Bower](http://bower.io/) is a **front end package manager** made by Twitter - think what npm was for node packages, or what bundler is for gems, bower is for front end javascript and css libraries. Let's use Bower to add bootstrap to our project.

1. Bower is itself an npm package so add it to your computer

    $ npm install -g bower

2. Next run `$ bower init` to create a bower.json file (like your `packages.json` file in express). Just select all defaults by hitting enter at every question.
3. Ready to install stuff? NOPE! If we just ran `bower install <<package_name>>` now, it would create a `bower_components` folder in the root of our project. But we don't want that. We want the files to load into our `vendor/assets` folder. To configure bower we add a `.bowerrc` file that tells bower to save into a new `vendor/assets/components` folder.
```
  {
      "directory": "vendor/assets/components"
  }
```
4. Now we can install bootstrap

  ```
  $ bower install bootstrap
  ```

5. Things won't work until we extend our asset pipeline to include our components folder from the `application.rb` folder.

  ```
  config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
  ```

6. Now we can reference files in the component folder in our manifests

  application.js
  ```
  //= require bootstrap/dist/js/bootstrap
  ```

  application.css
  ```
  *= require bootstrap/dist/css/bootstrap
  ```
7. And now bootstrap is available in our views.


## Displaying Images

1. Add an image to your `app/assets/images` folder
2. Add that image to your view by calling the file name in an `image_tag` erb view helper.

```
  <%= image_tag 'rails.png' %>
```
