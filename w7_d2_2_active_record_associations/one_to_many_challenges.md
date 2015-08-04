# One-to-Many Challenges

Imagine we're creating an online order system for an e-commerce site. A customer loads up their shopping cart with *items* and a new *order* is created when they check out. So we know we'll have an `Order` model and an `Item` model (don't worry about the customer model for now).

Here's what our models' attributes might look like:
  * `Order`: created_at
  * `Item`: name, description, price

Think about what the relationship between `orders` and `items` should be.

## Your Task

Create models and migrations for `orders` and `items` and set up the proper relationship to associate data between the two tables.

If the relationship is modeled correctly, you'll be able to test your models in the Rails console. You should be able to do the following without throwing an error:

```ruby
# create new order
o = Order.create

# list order's items
o.items

# create new items
i = Item.create()

# return item's order
i.order
```

**Once you've finished creating the models:**
  1. Create five items
  2. Create two orders
  3. Assign three items to the order with id = 1 and two items to the order with id = 2
  4. For one order, iterate through each of its items and print the item details to the console.
  4. Map each item in your database to its name.

## Stretch Challenge

Select only the items in an order that are less than a certain price.

You'll need to start with something like this:

```ruby
some_order.items.select { ... } # your code to select goes between the brackets

# your select query could also be written like this
some_order.items.select do
  # your code to select specific items goes here
end
```