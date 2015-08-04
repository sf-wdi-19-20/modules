# Many-to-Many Challenges

Continuing with our e-commerce example, let's build out the relationship between `customers` and `products`. Customers can purchase many products at one time by creating a shopping cart, and that cart becomes a `sale` once the customer completes checkout.

## Your Task

1. Create models and migrations for three tables: `customers`, `products`, and `sales`. Implement a many-to-many relationship between `customers` and `products`, using `sales` as the *join* table.
2. Use the Rails console to add `customers` and `products` to 2-3 `sales`.
3. Use the Rails console to display all products and customers associated with each order (**Hint:** Look at ActiveRecord's <a href="http://guides.rubyonrails.org/active_record_querying.html#using-array-hash-of-named-associations" target="_blank">join</a> method).

## Stretch Challenge

It's important we have some sanity checks on our products. We definitely don't want to lose money if some yahoo decides to mark the price down to -100.00. There may be some edge-cases where it's useful to zero out the price, but we definitely don't want the price to go negative. How could we stop this?

For starters...

* How do you ensure that the price going into your database is valid?
* Can you stop an item from saving if it doesn't meet a requirement?
* Can you create an error during validation?
  * `p = Product.create(name: "nail", description: "a very expensive nail", price: -100)` # what's the value of `p` now?
* Can you create a custom error message for this scenario? e.g. "Price cannot be negative"
  * Can you log it to the Rails console?

## Super Stretch Challenge

How would you include a total in your `Sale` model? It would need to change pretty frequently if we wanted it to reflect the current products in the shopping cart.

For starters...

* How would you store the total? What new field would you need and where?
  * **Hint:** Create a new migration
* How would you calculate the total?
  * **Hint:** Try to figure it out in the Rails console, then turn it into a method.
* When would the total need to change/update? How would you trigger it?
  * **Hint:** Read the docs! Take a look at the ActiveRecord documentation.