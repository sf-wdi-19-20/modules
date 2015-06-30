$(function() {

  // form to create a new pet
  var $newPet = $('#new-pet');

  // element to hold our list of pets
  var $petsList = $('#pets-list');

  // pets template
  var petsTemplate = _.template($('#pets-template').html());

  // start with seed data
  var pets = [
    {name: "Sprinkles", species: "cat"},
    {name: "Bagel", species: "dog"},
    {name: "Fluffy", species: "dinosaur"}
  ];

  // append our existing pets (from seed data) to `$petsList`
  _.each(pets, function (pet, index) {
    var $pet = $(petsTemplate(pet));
    $pet.attr('data-index', index);
    $petsList.append($pet);
  });

  // submit form to create a new pet
  $newPet.on('submit', function(event) {
    event.preventDefault();

    // create new pet object from form data
    var petName = $('#pet-name').val();
    var petSpecies = $('#pet-species').val();
    var petData = {name: petName, species: petSpecies};

    // store our new pet in the `pets` array
    pets.push(petData);
    console.log(pets);
    var index = pets.indexOf(petData);

    // append new pet to `$petsList`
    var $pet = $(petsTemplate(petData));
    $pet.attr('data-index', index);
    $petsList.append($pet);

    // reset the form and add autofocus back to first input
    $newPet[0].reset();
    $('#pet-name').focus();
  });

  // remove pets from model and view
  $petsList.on("click", ".delete", function () {
    var $pet = $(this).closest(".pet");
    var index = $pet.attr('data-index');

    // remove pet from the `pets` array (model)
    pets.splice(index, 1);
    console.log(pets);

    // remove pet from the DOM (view)
    $pet.remove();

    // reset indexes in DOM to match `pets` array
    // $.each loops through DOM elements
    $('.pet').each(function(index) {
      $(this).attr('data-index', index);
    });
  });

});
