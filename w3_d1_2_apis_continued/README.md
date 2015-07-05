# API's Continued
| Objectives |
| :--- |
| Use AJAX to get data from API's |
| Use jQuery and Underscore templating to render data from API's |

## API's

* What are they, analogies, why we use them

## Tools

* Spotify API example (returns JSON)
  * Postman
  * JSONView
  * Curl
  * AJAX

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

Make a music search app using jQuery, AJAX, and the Spotify API.

### Requirements

1. Your app must have a form to search for songs.
2. When a user submits the form, use jQuery to save the form data to a variable.
3. Once you have the form data, use AJAX to make a call to the Spotify API.
4. Parse the data you received from Spotify, and use jQuery and Underscore templating to render that data on the page.

### How to Get Started

1. Create a new directory and GitHub repo called `spotify_app`.
2. You'll need `index.html` and `script.js` files. Feel free to copy the starter code to get started.
3. Submit the link to your `spotify_app` repo in the <a href="https://docs.google.com/a/generalassemb.ly/forms/d/14rNXnDaq5X5Rvda-1BRZCl9YmkOoZzf7oxGBEZG_YJE/viewform" target="_blank">homework submission form</a>.

### Stretch Challenges / Bonus

1. Favoriting
2. Allow the user to search by `album` or `artist` in addition to `track`

## Docs & Reading
