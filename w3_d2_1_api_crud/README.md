#RESTful Routes with CRUD

##AJAX Refresher
- For today's lesson we will be using jQuery to handle the AJAX calls.
- AJAX is a way to send and receive data from the server asynchronously from the page load.
- The syntax for jQuery AJAX is as follows:

```javascript
$.ajax({
	url: "YOUR ENDPOINT HERE",
	type: "GET",
	success: function(data) { },
	error: function(jqXHR, textStatus, errorThrown) { }
});
```

##What is AJAX to You?
- Get in groups of 4-5.
- Discuss using no code/developer terminology what AJAX is.
- The more drawings the better. Let's do this!

##The REST of the CRUD
- REST stands for Representational State Transfer.
- By the type of request you are making (GET, POST, PUT, or DELETE) you are representing what you want to do server side (Create, Read, Update, Destroy).
- You have already seen GET and POST. What are those meant to represent?
- PUT/PATCH should represent updating a record.
- DELETE should represent deleting a record.

##Morning Warmup
- As a warmup we will be working with an API that we have built that implements the full RESTful structure.
- The full project that we will be building can be found [here](https://github.com/sf-wdi-19-20/w3_ajax_wine_manager).
- Your job this morning is to make a GET request to `http://daretodiscover.herokuapp.com/wines` to retrieve a listing of wine records.
- Use underscore templating to show the results using the HTML provided.

##Documentation for Wines API
- The wines API implements a RESTful architecture with wines as a resource.
- The base endpoint is: http://daretodiscover.herokuapp.com
- Here are the endpoints for the resource:
	- `GET /wines` -> Get all wines
	- `GET /wines/:id` -> Get one specific wine
	- `POST /wines` -> Create a new wine
	- `PUT /wines/:id` -> Update a specific wine
	- `DELETE /wines/:id` -> Delete a wine

