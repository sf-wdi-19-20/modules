# APIs & AJAX
| Objectives |
| :--- |
| Explain AJAX and why we use it |
| Use AJAX to GET data from APIs |
| Use jQuery and Underscore templating to render data from APIs |

## APIs

Application Program Interfaces (APIs) are similar to Graphical User Interfaces (GUIs):
  * A **GUI** is an interface between a program and a human (e.g. <a href="https://github.com/" target="_blank">github.com</a>).
  * An **API** is an interface between two programs (e.g. <a href="https://developer.github.com/v3" target="_blank">GitHub API</a>).

A **GUI** exists to make an application more convenient for the user. An **API** does the same for its users, which are usually developers of other applications.

#### Examples:

* Logging into Spotify with your Facebook account (Spotify uses Facebook's API)
* Posting Instagram photos to Facebook or Twitter (Instagram uses Facebook's and Twitter's APIs)

## AJAX

Asynchronous JavaScript And XML (AJAX) allows us to make requests to a server (ours or another application's) without refreshing the page.

#### Why do we care?

* AJAX lets us exchange data with the server behind the scenes. We can update our web pages (and the data on our server!) without reloading the page at all.
* Limiting page reloads makes our web apps *faster* and gives our users a *better experience*. (Imagine if you experienced a full page refresh every time you "liked" a post on Facebook!)

#### How do we use it?

jQuery gives us a <a href="https://api.jquery.com/category/ajax" target="_blank">list of methods</a> for making AJAX requests.

## GET and POST

The HyperText Transfer Protocol (HTTP) is similar to a written language like English.
English was made for humans; the HTTP language is specifically for web browsers and servers to communicate with each other.

`GET` and `POST` are the most important verbs in HTTP:

  * A browser will use `GET` to indicate it would like to receive a specific web page or resource from a server.
  * A browser will use `POST` to indicate it would like to send some data to a server.

We can use AJAX to make both `GET` and `POST` requests to servers. jQuery gives us the <a href="https://api.jquery.com/jQuery.ajax" target="_blank">$.ajax()</a> method, which will allow us to perform any AJAX request. It also gives us the helper methods <a href="https://api.jquery.com/jQuery.get" target="_blank">$.get()</a> and <a href="https://api.jquery.com/jQuery.post" target="_blank">$.post()</a>, which, you guessed it, are specifically for `GET` and `POST` requests.

## AJAX Setup

Using jQuery's `$.ajax()` method, we can specify a list of parameters, including:

* type of request
* request URL
* data type
* callback function (which will run on successful completion of the AJAX request)

```js
$.ajax({
  type: 'GET',
  url: 'https://api.spotify.com/v1/artists/1jTAvg7eLZQFonjWIXHiiT',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
```

If we're doing a simple `GET` request, we can (and should) avoid the `$.ajax()` method and use the helper method `$.get()` instead. Here, we only need to pass in the request URL and callback function for the same AJAX request as the example above.

```js
$.get(
  'https://api.spotify.com/v1/artists/1jTAvg7eLZQFonjWIXHiiT',
  function(data) {
    console.log(data);
  }
);
```

For a `POST` request, we can also use the `$.ajax()` method, but this time, the data type is `"POST"`. Since `POST` requests send data to a server, we also need to send an object of data (the `book`).

```js
$.ajax({
  type: "POST",
  url: "/books",
  data: {
    book: {
      title: "The Giver",
      author: "Lowis Lowry"
    }
  },
  dataType: "json",
  success: function(data) {
    console.log(data);
  }
});
```

Just like with `GET`, the `POST` request above can be refactored to use the much simpler `$.post()` method. We pass in the request URL, data, and callback function.

```js
$.post(
  '/books',
  {
    title: "The Giver",
    author: "Lowis Lowry"
  },
  function(data) {
    console.log(data);
  }
);
```

#### AJAX and Event Handlers

We can combine AJAX calls with any jQuery event handlers. You may want to execute an AJAX call when the user clicks and button or submits a form.

```js
// click event on button
$('button').on('click', function() {
  $.get('https://api.spotify.com/v1/search?q=hello&type=album', function(data) {
    console.log(data);
  });
});


// submit event on form
$('form').on('submit', function(){
  $.get('https://api.spotify.com/v1/search?q=goodbye&type=artist', function(data) {
    console.log(data);
  });
});
```

## Challenges (& Tonight's Homework)

Make a music search app using jQuery, AJAX, and the Spotify API. You will be using <a href="https://developer.spotify.com/web-api/search-item" target="_blank">Spotify's search endpoint</a> to search for tracks (songs).

### Requirements

1. Your app must have a form to search for tracks (songs). The form needs an input field for the search keyword.

2. When a user submits the form, use jQuery to get the search keyword from the form input.

3. Use AJAX to call <a href="https://developer.spotify.com/web-api/search-item" target="_blank">Spotify's search endpoint</a> with the search keyword from the form.

4. Use jQuery and Underscore templating to render the data you receive from Spotify in the view.

5. The data you render in the view should include the track name and artist name.

6. Each time the user submits the form, clear the previous search results from the view.

### How to Get Started

1. Create a new directory and GitHub repo called `spotify_app`.

2. You'll need `index.html`, `style.css`, and `script.js` files. Feel free to copy <a href="spotify_app" target="_blank">this starter code</a> to get started.

3. Practice querying <a href="https://developer.spotify.com/web-api/search-item" target="_blank">Spotify's search endpoint</a> using Postman with a couple different search keywords. You'll want to set `type=track` in your request URL. Look at the response data, and figure out how you would access the track name and artist name for a particular track (this will involve accessing values from nested objects and arrays).

4. Once you feel comfortable with the structure of the response data, work on using AJAX to make the API call to Spotify when the user submits the form.

5. Start by `console.log`-ing the response data. Once you have that working, access the data you need (track name and artist name), and pass it into your Underscore template. Append this data to the view. (**Hint:** You'll need to use `_.each` to iterate through all the tracks Spotify returns in the response data.)

6. Submit the link to your `spotify_app` repo in the <a href="https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform" target="_blank">homework submission form</a>.

7. Read about <a href="http://piwik.org/blog/2008/01/how-to-design-an-api-best-practises-concepts-technical-aspects" target="_blank">How to Design an API</a> to prepare for tomorrow, and do this <a href="http://www.codecademy.com/en/tracks/youtube" target="_blank">YouTube API tutorial</a> for some extra practice.

### Stretch Challenges / Bonus

1. Display a track's album artwork next to each track name and artist name in the view. (**Super Bonus:** You'll notice if you try to access the album artwork but none is available, your app will break. Prevent this from happening with a check to see if any artwork is available first.)

2. Spotify gives us a `preview_url` for each track. Create a play button for each track in your view that opens the `preview_url` in a new tab (it will start playing the song!).

3. It would be nice to let the user know something is happening in the few milliseconds between submitting the form and getting data on the page. Show `loading.gif` when the form submits, and hide it when you get data back from Spotify.

4. Handle the case where no data comes back from Spotify. You'll want to let the user know that there are no results, rather than just showing a blank page.

## Docs & Reading

* <a href="https://developer.spotify.com/web-api/search-item" target="_blank">Spotify API Search Endpoint</a>
* <a href="https://api.jquery.com/jquery.get" target="_blank">jQuery.get()</a>
