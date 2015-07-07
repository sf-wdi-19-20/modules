// CLIENT-SIDE JAVASCRIPT


var setUpView = function(){

  // set up the template
  Phrases.template = _.template($("#phrase-template").html());

  // set up the submit button event handler
  $('#new-phrase-form').on('submit', function(event) {
    event.preventDefault();
    Phrases.create(this);
    // below: we need to grab the zero-th element from the
    // jquery objects because both .reset() and .focus() are
    // javascript methods (NOT jquery) that must be called on
    // the HTML element itself - not a jquery object containing
    // the HTML element
    $('#new-phrase-form')[0].reset();
    $('input.form-control')[0].focus();
  });
}

// Phrases is a "controller"
function Phrases() {};

Phrases.all = function() {
  $.get('/phrases', function(res) {
    var allPhrases = JSON.parse(res);
    var phraseHTML;
    _.each(allPhrases, function(phrase){
      phraseHTML = Phrases.template({item: phrase});
      $("#phrase-ul").append(phraseHTML);
    });
  });
};

Phrases.create = function(form) {
  $.post('/phrases', $(form).serialize())
  .done(function(res) {
    newPhrase = JSON.parse(res);
    var phraseHTML = Phrases.template({item: newPhrase});
    $("#phrase-ul").append(phraseHTML);
  });
}

Phrases.delete = function(delBtn) {
  var phraseId = $(delBtn).data().id;
  $.ajax({
    url: '/phrases/' + phraseId,
    type: 'DELETE',
    success: function(res) {
      // once successful, remove deleted phrase li from the DOM
      $('#phrase-'+phraseId).remove();
    }
  });
};


Phrases.update = function(event, form){
  event.preventDefault();
  // pull the values we want out of form
  var $form = $(form);
  var phraseId = $form.data().phraseid;
  var newWord = $form.find("input[name='word']").val();
  var newdefinition = $form.find("input[name='definition']").val();
  // send a POST request with the form values
  $.post("/phrases/"+phraseId, {word: newWord, definition: newdefinition})
  .done(function(res){
    updatedPhrase = JSON.parse(res);
    // once done, use template to format edited phrase
    var updatedPhraseHTML = Phrases.template({item: updatedPhrase});
    $('#phrase-'+phraseId).replaceWith(updatedPhraseHTML);
  });
}

// when page loads:
$(function(){
  setUpView();
  // get and render all phrases
  Phrases.all();
});

