function Post(title, username) {
  this.title = title;
  this.username = username;
}

$(function() {

  // form to create new post
  var $newPost = $('#new-post');

  // element to hold our list of posts
  var $postList = $('#post-list');

  // post template
  var postTemplate = _.template($('#post-template').html());

  // `posts` array is our model (holds our data)
  // contains test (or "seed") data
  var posts = [];

  // append existing posts (from seed data) to `$postList`
  // `_.each` is an "iterator" function provided by Underscore.js
  _.each(posts, function (post, index) {
    var $post = $(postTemplate(post));
    $post.attr('data-index', index);
    $postList.append($post);
  });

  // submit form to create new post
  $newPost.on('submit', function(event) {
    event.preventDefault();

    // create new post object from form data
    var postTitle = $('#post-title').val();
    var postUsername= $('#post-username').val();
    var post = new Post(postTitle, postUsername);
    // store our new post

    posts.push(post);
    console.log(posts);
    var index = posts.indexOf(post);

    // append our new post to the page
    var $post = $(postTemplate(post));
    $post.attr('data-index', index);
    $postList.prepend($post);

    // reset the form
    $newPost[0].reset();
    $('#post-title').focus();
  });

  // add class to post on click to mark it as done
  $postList.on('click', '.post-text', function() {
    $(this).toggleClass('done');
  });

  // remove post from model and view
  $postList.on("click", ".delete", function () {
    var $post = $(this).closest(".post");
    var index = $post.attr('data-index');

    // remove post from the `posts` array (model)
    posts.splice(index, 1);
    console.log(posts);

    // remove post from the DOM (view)
    $post.remove();

    // reset indexes in DOM to match `posts` array
    // $.each loops through DOM elements
    $('.post').each(function(index) {
      $(this).attr('data-index', index);
    });
  });

});