$(function() {

  var $shoppingUL = $('#shopping_list');

  var $newItemForm = $('#new_shopping_item');

  var $itemNameBlank = $('#item_name');

  $newItemForm.on('submit', function(event) {
    event.preventDefault();
    var listItem = $('#item_name').val();
    console.log(listItem);

    // store our new shopping list item
    shoppingList.push(listItem);

    // clear the form
    $itemNameBlank.val("");

    // append our new item to the page's shopping list
    $shoppingUL.append('<li class="item">' + listItem + '</li>');
  });

  $shoppingUL.on('click', '.item', function() {
    $(this).addClass('purchased');
    $(this).animate({opacity: '0.50'}, 1000);
  });

});


var shoppingList = ["Soap", "Envelopes", "Dry Erase Markers"];
