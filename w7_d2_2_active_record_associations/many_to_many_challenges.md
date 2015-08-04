# Many-to-Many Challenges

Our goal is to build the relationship between `actors` and `movies`. An actor can appear in many movies, and a movie can have many actors. How would you set up this relationship? Is there an additional data table we need besides `actors` and `movies`? **Hint:** Think back to the relationship between students and courses.

Here's what our models' attributes might look like for actors and movies:
  * `Actor`: first_name, last_name
  * `Movie`: title, description, year

For these challenges, continue to work in your `practice` Rails app.

## Your Task

1. Create models and migrations for three tables: `actors`, `movies`, and a *join* table. Think about what you should name your join table and what columns it should have.
2. Implement a many-to-many relationship between `actors` and `movies`.
3. Use the Rails console to create at least three `actors` and two `movies`. Each movie should have at least two starring actors associated.

## Stretch Challenges

1. Add <a href="http://guides.rubyonrails.org/active_record_validations.html" target="_blank">validations</a> to your `Actor` and `Movie` models:
  * All attributes for actors and movies should be required (**Hint:** `presence: true`)
  * For movies, the year should not be in the future (**Hint:** Look at <a href="http://guides.rubyonrails.org/active_record_validations.html#numericality" target="_blank">numericality</a>)

2. Test your validations in the Rails console:

  ```ruby
  a = Actor.create
  a.errors.messages
  # => What does this return?
  ```

## Super Stretch Challenge

Set up routes and views for `actors` and `models`. Remember "route-side-in"! Start with reading and creating (`index`, `new`, `create`, `show`), then move onto update and delete if time permits.
