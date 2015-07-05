# APIs and AJAX
| Objectives |
| :--- |
| Explain why we use AJAX |
| Use AJAX to GET data from APIs |
| Use jQuery and Underscore templating to render data from APIs |

## APIs

Application Program Interfaces (APIs) are similar to Graphical User Interfaces (GUIs):
  * A **GUI** is an interface between a computer and a human (e.g. <a href="https://github.com/" target="_blank">github.com</a>).
  * An **API** is an interface between two computers (e.g. <a href="https://developer.github.com/v3" target="_blank">GitHub API</a>).

A **GUI** exists to make an application more convenient for the user. An **API** does the same for its users, which are usually developers of other applications.

#### Examples:

* Logging into Spotify with your Facebook account (Spotify uses Facebook's API)
* Posting Instagram photos to Facebook or Twitter (Instagram uses Facebook's and Twitter's APIs)

## AJAX

* What is it, why use it
* Explain GET requests

The HyperText Transfer Protocol (HTTP) is similar to a written language like English.
English was made for humans; the HTTP language is specifically for web browsers and servers to communicate with each other.

`GET` and `POST` are the most important verbs in HTTP:
  * A browser will use `GET` to indicate it would like to receive a specific web page or resource from a server.
  * A browser will use `POST` to indicate it would like to send some data to a server.

## AJAX Setup

* Make a call, JSON parse the result

## Challenges (& Tonight's Homework)

Make a music search app using jQuery, AJAX, and the Spotify API. You will be using <a href="https://developer.spotify.com/web-api/search-item" target="_blank">Spotify's search endpoint</a> to search for tracks (songs).

### Requirements

1. Your app must have a form to search for tracks (songs). The form needs an input field for the search keyword.

2. When a user submits the form, use jQuery to get the search keyword from the form input.

3. Use AJAX to call <a href="https://developer.spotify.com/web-api/search-item" target="_blank">Spotify's search endpoint</a> with the search keyword from the form.

4. Parse the data you receive from Spotify, and use jQuery and Underscore templating to render that data in the view.

5. The data you show in the view should include the track name and artist name.

### How to Get Started

1. Create a new directory and GitHub repo called `spotify_app`.

2. You'll need `index.html`, `style.css`, and `script.js` files. Feel free to copy <a href="spotify_app" target="_blank">this starter code</a> to get started.

3. Practice querying <a href="https://developer.spotify.com/web-api/search-item" target="_blank">Spotify's search endpoint</a> using Postman with a couple different search keywords. You'll want to set `type=track` in your request URL. Look at the response data, and figure out how you would access the track name and artist name for a particular track (this will involve accessing values from nested objects and arrays).

4. Once you feel comfortable with the structure of the response data, work on using AJAX to make the API call to Spotify when the user submits the form.

5. Start by `console.log`-ing the response data. Once you have that working, access the data you need (track name and artist name), and pass it into your Underscore template. Append this data to the view. (**Hint:** You'll need to use `_.each` to iterate through all the tracks Spotify returns in the response data.)

6. Submit the link to your `spotify_app` repo in the <a href="https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform" target="_blank">homework submission form</a>.

### Stretch Challenges / Bonus

1. Display a track's album artwork next to each track name and artist name in the view. (**Super Bonus:** You'll notice if you try to access the album artwork but none is available, your app will break. Prevent this from happening with a check to see if any artwork is available first.)

2. Spotify gives us a `preview_url` for each track. Create a play button for each track in your view that opens the `preview_url` in a new tab (it will start playing the song!).

## Docs & Reading

* <a href="https://developer.spotify.com/web-api/search-item" target="_blank">Spotify API Search Endpoint</a>
* <a href="https://api.jquery.com/jquery.get" target="_blank">jQuery.get()</a>
