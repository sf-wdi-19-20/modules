# In Class Exercise 1
## One-to-Many Associations

Imagine we're creating an online order system for an e-commerce site. A customer loads up their shopping cart with _items_ and a new _order_ is created when they check out. So we know we'll have an `order` model and an `item` model (don't worry about the customer model for now).

Here's a start to what our models/attributes might look like:
Order: placed_on date...
Item: Name, description, price...

Be sure to think about what the relationship between _Orders_ and _Items_ should be.

If the relationship is modeled correctly, you'll be able to assign a variable `o = Order.create` and then type `o.items` without getting back an error. You should also be able ask an individual order item what order it belongs to using `item.order`.

Once you've finished creating the models:
  1. Create 5 items
  2. Create 2 Orders
  3. Assign 3 items to the order with id = 1, and 2 items to order with id = 2.
  4. Play around with some of the array methods you know (each, map, select, size) for each order

#### Exercise Bonus

Try to select only the items in an order that are less than a certain price.

You'll need to start with something like this:
```ruby
someorder.items.select { ... } # Your code to select goes between the brackets.

# Note this could also be written like this
someorder.items.select do
    # Code to select specific items goes here
end
```
