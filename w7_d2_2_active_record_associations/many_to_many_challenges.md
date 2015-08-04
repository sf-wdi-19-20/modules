# In Class Exercise 2
## Many-to-Many Associations

Let's pair into groups of two.

Let's create models for something like Amazon.com. Amazon has many products, and many customers. Customers can purchase many products at one time by creating a shopping cart, and that cart becomes an order once the customer completes checkout.

Your mission, should you wish to accept it:

  1. Create 3 models (the third model can be called "sale" or "order")
  2. Use the rails console to add products and customers to 2-3 'sales' (or 'orders')
  3. Use the rails console to display all products and customers associated with each order.


#### Exercise Bonus:

It's important we have some sanity checks on our order items. We definitely don't want to lose money if some yahoo decides to mark the price down to -100.00. There may be some odd edge-cases where it's useful to zero out the price (maybe we need a way to do inventory adjustments). But we definitely don't want the price to go negative. How could we stop this?

For starters...

- How do you ensure that the price going into your database is valid?
- Can you stop an item from saving if it doesn't meet a requirement?
- How would you recover from / handle this scenario in your code?
    + Can you create an error during validation?
        * i = Item.save(price: -100, name: "nail", description: "A very expensive nail") # what's the value of `i` now?
    + Can you create an error message for this scenario? E.g. "Price cannot be negative"
        * Can you log it to the rails console?
        * Can you display it to the client?


#### Exercise Double Bonus:

How would you include a total in your cart/order model? It would need to change pretty frequently if we wanted it to reflect the current items in the cart/order.

For starters...

- How would you store it? What new field would you need and where?
    + Create a new migration
- How would you calculate it? (Can you figure it out in the Rails Console?)
    + Turn it into a method
- When would it need to change/update? How would you trigger it?
    + HINT: Read the docs! Take a look at the ActiveRecord documentation.
