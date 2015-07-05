$(function() {

  // form to search spotify API
  var $spotifySearch = $('#spotify-search');

  // element to hold results from spotify API
  var $results = $('#results');

  // track (song) template
  var trackTemplate = _.template($('#track-template').html());

  // submit form to search spotify API
  $spotifySearch.on('submit', function(event) {
    event.preventDefault();

    $results.empty();

    // save form data to variable
    var searchTrack = $('#track').val();

    // spotify search URL
    var searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + searchTrack;

    // use AJAX to call spotify API
    $.get(searchUrl, function(data) {
      console.log(data);
      var trackResults = data.tracks.items;
      console.log(trackResults);

      _.each(trackResults, function(result, index) {
        var templateData = {
          albumArt: result.album.images.length > 0 ? result.album.images[0].url : null,
          artist: result.artists[0].name,
          name: result.name,
          previewUrl: result.preview_url
        };
        var $trackResult = $(trackTemplate(templateData));
        $results.append($trackResult);
      });
    });

    // reset the form
    $spotifySearch[0].reset();
    $('#track').focus();
  });

});