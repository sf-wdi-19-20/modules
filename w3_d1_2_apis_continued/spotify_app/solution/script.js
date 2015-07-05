$(function() {

  // form to search spotify API
  var $spotifySearch = $('#spotify-search');

  // form input for track (song)
  var $track = $('#track');

  // element to hold results from spotify API
  var $results = $('#results');

  // loading gif
  var $loading = $('#loading');

  // track (song) template
  var trackTemplate = _.template($('#track-template').html());

  // submit form to search spotify API
  $spotifySearch.on('submit', function(event) {
    event.preventDefault();

    // empty previous results and show loading gif
    $results.empty();
    $loading.show();

    // save form data to variable
    var searchTrack = $track.val();

    // spotify search URL
    var searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + searchTrack;

    // use AJAX to call spotify API
    $.get(searchUrl, function(data) {

      // track results are in an array called `items`
      // which is nested in the `tracks` object
      var trackResults = data.tracks.items;
      console.log(trackResults);

      // hide loading gif
      $loading.hide();

      // only append results if there are any
      if (trackResults.length > 0) {

        // iterate through results
        _.each(trackResults, function(result, index) {
          
          // build object of data we want in our template
          var templateData = {
            albumArt: result.album.images.length > 0 ? result.album.images[0].url : null,
            artist: result.artists[0].name,
            name: result.name,
            previewUrl: result.preview_url
          };

          // put data in template and append to view
          var $trackResult = $(trackTemplate(templateData));
          $results.append($trackResult);
        });

      // else let user know there are no results
      } else {
        $results.append('No results.');
      }
    });

    // reset the form
    $spotifySearch[0].reset();
    $track.focus();
  });

});