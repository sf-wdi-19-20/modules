# ActiveRecord Associations

| Objectives |
| :--- |
| Create one-to-many and many-to-many relationships in Rails |
|  Modify migrations to add foreign keys to tables |
| Create a join table for a many-to-many relationship |
| Create model instances with associations |

## Associations: Relationships between Models

| Relationship Type | Abbreviation | Description | Example |
| :--- | :--- | :--- | :--- |
| One-to-Many | 1:N | Parent model is associated with many children from another model | One author can have many books. |
| Many-to-Many | N:N | Two models that can both be associated with many of the other. | Libraries and books. One library can have many books, while one book can be in many libraries. |

## One to many (1:N) Relationship

**Example:** One owner `has_many` pets and a pet `belongs_to` one owner (our `Pet` model will have a foreign key (FK) `owner_id`)

**Always remember!** Whenever there is a `belongs_to` in the model, there should be a *FK in the matching migration!*

### Set Up

1. In the terminal, from the root of your Rails app, generate two models, `Owner` and `Pet`:

  ```
  $ rails g model Owner name:string
  $ rails g model Pet name:string
  ```

2. Define the relationship in both models:

  ```ruby
  #
  # app/models/owner.rb
  #
  class Owner < ActiveRecord::Base
    has_many :pets
  end
  ```

  ```ruby
  #
  # app/models/pet.rb
  #
  class Pet < ActiveRecord::Base
    belongs_to :owner
  end
  ```

  **Note:** `belongs_to` uses the singular form of the class name (`:owner`), while `has_many` uses the pluralized form (`:pets`).

  If you think about it, this is exactly how you'd want to describe the relationship in plain English. For example, if we were discussing the relationship between pets and owners, we'd say:

    * "One owner has many pets"
    * "A pet belongs to one owner"

3. Add a foreign key to our pets migration:

  ```ruby
  #
  # db/migrate/20150804001429_create_pets.rb
  #
  class CreatePets < ActiveRecord::Migration

    def change
      create_table :pets do |t|
        t.string :name
        t.timestamps

        # add this line
        t.integer :owner_id

        # OR this line
        t.references :owner

        # OR... this line
        t.belongs_to :owner

        # but NOT all three!
      end
    end

  end
  ```

  **Options for adding a foreign key:**
  * `t.integer`: adds an integer column to the table for the foreign key
  * `t.references`: more *rails-y* and semantic with a few benefits:
    * Defines the name of the foreign key column (in this case, `owner_id`) for us
    * Adds a **foreign key constraint** which ensures **referential data integrity**  in our Postgres database
  * `t.belongs_to`: even more *rails-y* and semantic, with the same functionality as `t.references`

### Using Our Associations

1. Create our database tables by running our migrations from the terminal. (**Note:** Before migrating, crete your database if you haven't already by running `rake db:create`)

  ```
  $ rake db:migrate
  ```

2. Still in the terminal, enter the rails console (`rails c`) to create and associate data!

  ```ruby
  Pet.count
  Owner.count
  fido = Pet.create(name: "Fido")
  lassie = Pet.create(name: "Lassie")
  nathan = Owner.create(name: "Nathan")
  nathan.pets
  fido.owner
  nathan.pets << fido # makes Fido one of Nathan's pets
  nathan.pets << lassie # makes Lassie another one of Nathan's pets
  nathan.pets.size
  nathan.pets.map(&:name)
  nathan.pets.each do |pet| puts "My pet is named #{pet.name}!" end
  fido.owner

  # What will be returned when we do this?
  fido.owner.name
  ```

  **Note:** We just saw that in Rails, we can associate two model **instances** together using the `<<` operator.

#### Wait!!! What if I forget to add a foreign key before running `rake db:migrate`?

If you accidentally run `rake db:migrate` before adding a foreign key to the table's migration, it's ok. There's no need to panic. You can always fix this by creating a new migration:

```
$ rails g migration AddOwnerIdToPets
```

Then modify the migration to include the following:

```ruby
#
# db/migrate/20150804010921_add_owner_id_to_pets.rb
#
class AddOwnerIdToPets < ActiveRecord::Migration

  change_table :pets do |t|
    # only add ONE OF THESE THREE to your new migration
    t.integer :owner_id

    # OR...
    t.references :owner

    # OR...
    t.belongs_to :owner
  end

end
```

### Class Exercise 1

Let's jump over to [in-class exercise #1](associations_1toN_exercise.md) where you'll all work in groups on a solution.

## Many to Many (N:N) with 'through'

Let's think about the example of students and courses. A student can take many courses and a course will have many students. If you think back to our SQL discussions, you'll recall that we used a _join_ table to create this kind of association.

### A Typical 'Join' Table

Remember that a _join_ table has two different FKs, one for each model it is associating. In the example below, 3 students have been associated with 4 different courses.

| student_id | course_id |  
| ---------- | --------- |  
| 1          | 1         |  
| 1          | 2         |  
| 1          | 3         |  
| 2          | 1         |  
| 2          | 4         |  
| 3          | 2         |  
| 3          | 3         |  

Let's make sure we understand how this _join table_ works before moving on.

### So how do we create N:N associations in rails?

We use the `has_many :relatedModel, :through => :joinTableName` method.

We'll start by creating 3 models

```console
rails generate model Student name:string
rails generate model Course name:string
rails generate model Enrollment enrollment_date:date
```

Note that "Enrollment" is our __join__ table.

After generating our models, we need to open them in sublime and edit them so they include the proper associations.

Your models should look as follows once you've finished making the necessary changes:

```ruby
# models/course.rb
class Course < ActiveRecord::Base
    has_many :enrollments
    has_many :students, :through => :enrollments
end
```

```ruby
# models/student.rb
class Student < ActiveRecord::Base
    has_many :enrollments
    has_many :courses, :through => :enrollments
end
```

```ruby
# models/enrollment.rb
class Enrollment < ActiveRecord::Base
    belongs_to :course
    belongs_to :student
end
```

We'll also want to modify the migration for the `enrollment` model before we run db:migrate. Make your enrollment model look like this:

```ruby
class CreateEnrollments < ActiveRecord::Migration
  def change
    create_table :enrollments do |t|
      t.date :enrollment_date
      t.timestamps null: false

      # The foreign keys for the associations are defined below
      t.references :student
      t.references :course

      # or we can do this instead
      t.belongs_to :student
      t.belongs_to :course
    end
  end
end
```

Make sure your save the file before running `rake db:migrate`.

(Also, just a reminder, if you're using postgresql, be sure to run `rake db:create` first!)

### Let's test out our models!

Open the rails console by running `rails c` in terminal.

At the command prompt, let's create some students:

```ruby
nathan = Student.create(name: "Nathan")
ilias = Student.create(name: "Ilias")
del = Student.create(name: "Delmer")
```

Now we can create some courses too:
```ruby
algebra = Course.create(name: "Algebra")
science = Course.create(name: "Science")
english = Course.create(name: "English")
french = Course.create(name: "French")
```

#### Associate our model instances

Now, because we've used `:through`, we can create our associations in the same way we do for a 1:N association. If you're the curious type, you can try just using `has_many` without `through` (outside of class time please!!) and then using the console to experiment and figure out how you'd associate, and then access various instances together.

```ruby
nathan.courses << algebra
nathan.courses << french

ilias.courses << science
ilias.courses << english
ilias.courses << french

# Here's a little trick: Use an array to associate multiple courses with a student in just one line of code.
del.courses << [english, algebra]
```

#### Let's see if it worked

Once you've done all of this, try the following and see if your output matches the below in _irb_.

```ruby
nathan.courses.map(&:name)
# Outputs: => ["Algebra", "French"]

ilias.courses.map(&:name)
# Outputs: => ["Science", "English", "French"]

del.courses.map(&:name)
# Outputs: => ["Algebra", "English"]
```

Side note: Anyone know why we're passing `&:name` to `.map` here? (Hint, it has something to do with Blocks and Procs)

### Many-to-Many Exercise

To do this exercise, let's [head over to our many-to-many exercise file](associations_NtoN_exercise.md) and work together in groups of two.

# Migration Workflow

Getting your models and tables synced up is a bit tricky. Pay close attention to the following workflow, especially the rake tasks.

```
# create a new rails app
rails new my_app -T -d postgresql
cd my_app

# setup the empty database
rake db:create

# <<< BEGIN LOOP >>>

# Auto-generate a new model AND a new migration, e.g.:
rails generate model Pet name:string
rails generate model Owner name:string

# --- OR ---

# If we only need to change fields in an *existing* model,
# we can just generate a new migration:
rails generate migration AddSomeNewFieldToOwner some_new_field:Integer

## Either way, we need to manually edit our models and migrations:
# update the associations in our model --> this affects our model interface
# update the foreign keys in our migrations --> this affects our database tables

# and then we need to generate the schema for our database tables
rake db:migrate

# <<< END LOOP >>>

# Finally, we need some data to play with!
# For now we will seed it manually, from the rails console...
rails c
> Pet.create(name: "Wowzer")
> Pet.create(name: "Rufus")

# --- OR ---

# but later we will run a seed task:
rake db:seed
```

## **H**opefully **H**elpful **H**ints

When you are **creating associations** in Rails' ActiveRecord (or most any ORM, for that matter):

  - You'll define the relationships in your models (the blueprint for your objects)
    + Don't forget to define all sides of the relationship (more on this in a moment)
  - Remember to put the foreign key for a relationship in your migrations
    + If you're not sure which side of the relationship has the foreign key, just use this simple rule: The model with `belongs_to` must include a foreign key.

## Less Common Associations

For your reference. If you'd like to experiment with these, go nuts! (after class please...)

  - [has_one](http://guides.rubyonrails.org/association_basics.html#the-has-one-association)
  - [has_one through](http://guides.rubyonrails.org/association_basics.html#the-has-one-through-association)
  - [has_and_belongs_to_many](http://guides.rubyonrails.org/association_basics.html#has-and-belongs-to-many-association-reference)

## Other Useful Notes

  - [Associations Docs](http://api.rubyonrails.org/classes/ActiveRecord/Associations/ClassMethods.html)
  - [Model field data types](http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/TableDefinition.html#method-i-column)
