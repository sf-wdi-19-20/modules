// CLIENT-SIDE JAVASCRIPT

$(function() {

  var phrasesController = {
    // compile phrase template
    template: _.template($('#phrase-template').html()),

    // add event-handlers to phrases for updating/deleting
    addEventHandlers: function() {
      $('#phrase-list')
        .on('submit', '.update-phrase', function(event) {
          event.preventDefault();
          var phraseId = $(this).closest('.phrase').attr('data-id');
          var updatedWord = $(this).find('.updated-word').val();
          var updatedDefinition = $(this).find('.updated-definition').val();
          phrasesController.updatePhrase(phraseId, updatedWord, updatedDefinition);
        })
        .on('click', '.delete-phrase', function(event) {
          event.preventDefault();
          var phraseId = $(this).closest('.phrase').attr('data-id');
          phrasesController.deletePhrase(phraseId);
        });
    },

    getAllPhrases: function() {
      $.get('/phrases', function(data) {
        var allPhrases = data;
        // iterate through allPhrases and pass each phrase object through phrasesController.template
        _.each(allPhrases, function(phrase) {
          var $phraseHtml = $(phrasesController.template(phrase));
          $('#phrase-list').append($phraseHtml);
        });
        phrasesController.addEventHandlers();
      });
    },

    createPhrase: function(word, definition) {
      var phraseData = {word: word, definition: definition};
      $.post('/phrases', phraseData, function(data) {
        console.log(data);
        var $phraseHtml = $(phrasesController.template(data));
        $('#phrase-list').append($phraseHtml);
      });
    },

    updatePhrase: function(phraseId, word, definition) {
      console.log(phraseId);
    
      // send a POST request with the form values
      $.ajax({
        type: 'PUT',
        url: '/phrases/' + phraseId,
        data: {
          word: word,
          definition: definition
        },
        success: function(data) {
          var updatedPhrase = data;
          console.log(data);
          var $updatedPhraseHTML = $(phrasesController.template(updatedPhrase));
          $('#phrase-' + phraseId).replaceWith($updatedPhraseHTML);
        }
      });
    },
    
    deletePhrase: function(phraseId) {
      $.ajax({
        type: 'DELETE',
        url: '/phrases/' + phraseId,
        success: function(data) {
          // once successful, remove deleted phrase li from the DOM
          $('#phrase-' + phraseId).remove();
        }
      });
    },

    // runs on page-load to append existing phrases to view and
    // add event-handler to new-phrase form
    setupView: function() {
      phrasesController.getAllPhrases();
      $('#new-phrase').on('submit', function(event) {
        event.preventDefault();
        var newWord = $('#new-word').val();
        var newDefinition = $('#new-definition').val();
        phrasesController.createPhrase(newWord, newDefinition);
        $(this)[0].reset();
        $('#new-word').focus();
      });
    }

  };

  phrasesController.setupView();

});