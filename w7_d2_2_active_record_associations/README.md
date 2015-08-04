# ActiveRecord Associations

| Objectives |
| :--- |
| Create one-to-many and many-to-many relationships in Rails |
|  Modify migrations to add foreign keys to tables |
| Create a join table for a many-to-many relationship |
| Create model instances with associations |

## Associations: Relationships Between Models

| Relationship Type | Abbreviation | Description | Example |
| :--- | :--- | :--- | :--- |
| One-to-Many | 1:N | Parent model is associated with many children from another model | One author can have many books. |
| Many-to-Many | N:N | Two models that can both be associated with many of the other. | Libraries and books. One library can have many books, while one book can be in many libraries. |

## One-To-Many (1:N) Relationship

**Example:** One owner `has_many` pets and a pet `belongs_to` one owner (our `Pet` model will have a foreign key (FK) `owner_id`).

**Always remember!** Whenever there is a `belongs_to` in the model, there should be a *FK in the matching migration!*

### Set Up

1. In the terminal, set up a new Rails app called `practice`:

  ```
  $ rails new practice -d postgresql
  $ cd practice
  $ rake db:create
  ```

2. Also in the terminal, from the root of your Rails app, generate two models, `Owner` and `Pet`:

  ```
  $ rails g model Owner name:string
  $ rails g model Pet name:string
  ```

3. Open your app in Sublime, and define the relationship in both models:

  ```ruby
  #
  # app/models/owner.rb
  #
  class Owner < ActiveRecord::Base
    has_many :pets, dependent: :destroy
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

  **Note:** When setting up the `has_many` relationship, we use `dependent: :destroy` to maintain data integrity. This means that whenever an owner is deleted (destroyed), that owner's associated pets are also destroyed.

  `belongs_to` uses the singular form of the class name (`:owner`), while `has_many` uses the pluralized form (`:pets`).

  If you think about it, this is exactly how you'd want to describe the relationship in plain English. For example, if we were discussing the relationship between pets and owners, we'd say:

    * "One owner has many pets"
    * "A pet belongs to one owner"

4. Add a foreign key to the pets migration:

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

### Using Your Associations

1. Create your database tables by running your migrations from the terminal:

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
  nathan.pets.count
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

## Challenges, Part 1: One-To-Many

Jump over to the [One-To-Many Challenges](one_to_many_challenges.md) where you'll work in pairs on a solution.

## Many-To-Many (N:N) with 'through'

**Example:** A student `has_many` courses and a course `has_many` students. Thinking back to our SQL discussions, recall that we used a *join* table to create this kind of association.

A *join* table has two different foreign keys, one for each model it is associating. In the example below, 3 students have been associated with 4 different courses:

| student_id | course_id |
| ---------- | --------- |
| 1          | 1         |
| 1          | 2         |
| 1          | 3         |
| 2          | 1         |
| 2          | 4         |
| 3          | 2         |
| 3          | 3         |

### Set Up

To create N:N relationships in Rails, we use this pattern: `has_many :related_model, through: :join_table_name`

1. In the terminal, create three models:

  ```
  rails g model Student name:string
  rails g model Course name:string
  rails g model Enrollment
  ```

  `Enrollment` is the model for our *join* table. When naming your join table, you can either come up with a name that makes semantic sense (like "Enrollment"), or you can combine the names of the associated models (e.g. "StudentCourse").

2. Open up the models in Sublime, and edit them so they include the proper associations:

  ```ruby
  #
  # app/models/course.rb
  #
  class Course < ActiveRecord::Base
    has_many :enrollments, dependent: :destroy
    has_many :students, through: :enrollments
  end
  ```

  ```ruby
  #
  # app/models/student.rb
  #
  class Student < ActiveRecord::Base
    has_many :enrollments, dependent: :destroy
    has_many :courses, through: :enrollments
  end
  ```

  ```ruby
  #
  # app/models/enrollment.rb
  #
  class Enrollment < ActiveRecord::Base
    belongs_to :course
    belongs_to :student
  end
  ```

3. Add the foreign keys to the enrollments migration:

  ```ruby
  #
  # db/migrate/20150804040426_create_enrollments.rb
  #
  class CreateEnrollments < ActiveRecord::Migration
    def change
      create_table :enrollments do |t|
        t.timestamps

        # define foreign keys for associated models
        t.belongs_to :student
        t.belongs_to :course
      end
    end
  end
  ```

### Using Your Associations

1. In the terminal, run `rake db:migrate` to create the new tables.

2. Enter the rails console (`rails c`) to create and associate data!

  ```ruby
  # create some students
  sally = Student.create(name: "Sally")
  fred = Student.create(name: "Fred")
  alice = Student.create(name: "Alice")

  # create some courses
  algebra = Course.create(name: "Algebra")
  english = Course.create(name: "English")
  french = Course.create(name: "French")
  science = Course.create(name: "Science")

  # associate our model instances
  sally.courses << algebra
  sally.courses << french

  fred.courses << science
  fred.courses << english
  fred.courses << french

  # here's a little trick: use an array to associate multiple courses with a student in just one line of code
  alice.courses << [english, algebra]
  ```

  **Note:** Because we've used `through`, we can create our associations in the same way we do for a 1:N association (`<<`).

3. Still in the Rails console, test your data to make sure your associations worked:

  ```ruby
  sally.courses.map(&:name)
  # => ["Algebra", "French"]

  fred.courses.map(&:name)
  # => ["Science", "English", "French"]

  alice.courses.map(&:name)
  # => ["English", "Algebra"]
  ```

## Challenges, Part 2: Many-To-Many

Head over to the [Many-To-Many Challenges](many_to_many_challenges.md) and work together in pairs.

## Migration Workflow

Getting your models and tables synced up is a bit tricky. Pay close attention to the following workflow, especially the rake tasks.

```
# create a new rails app
rails new my_app -d postgresql
cd my_app

# create the database
rake db:create

# REPEAT THESE TASKS FOR EVERY CHANGE TO YOUR DATABASE
# <<< BEGIN WORKFLOW LOOP >>>

# -- IF YOU NEED A NEW MODEL --
# auto-generate a new model (AND automatically creates a new migration)
rails g model Pet name:string
rails g model Owner name:string

# --- OTHERWISE ---

# if you only need to change fields in an *existing* model,
# you can just generate a new migration
rails g migration AddAgeToOwner age:integer

# never try to create a migration file yourself through the file system! it's really hard to get the name right!

# -- EITHER WAY --
### whether we're creating a new model or updating an existing one, we can manually edit our models and migrations in sublime
# update associations in model --> this affects model interface
# update foreign keys in migrations --> this affects database tables

# generate schema for database tables
rake db:migrate

# <<< END LOOP >>>

# finally, we need some data to play with
# for now, we'll seed it manually, from the rails console...
rails c
> Pet.create(name: "Wowzer")
> Pet.create(name: "Rufus")

# --- OR ---

# but later we will run a seed task
rake db:seed
```

## Helpful Hints

When you're **creating associations** in Rails ActiveRecord (or most any ORM, for that matter):

  * Define the relationships in your models (the blueprint for your objects)
    * Don't forget to define all sides of the relationship (e.g. `has_many` and `belongs_to`)
  * Remember to put the foreign key for a relationship in your migration
    * If you're not sure which side of the relationship has the foreign key, just use this simple rule: the model with `belongs_to` must include a foreign key.

## Less Common Associations

These are for your references and are not used nearly as often as `has_many` and `has_many through`.

  * <a href="http://guides.rubyonrails.org/association_basics.html#the-has-one-association" target="_blank">has_one</a>
  * <a href="http://guides.rubyonrails.org/association_basics.html#the-has-one-through-association" target="_blank">has_one through</a>
  * <a href="http://guides.rubyonrails.org/association_basics.html#has-and-belongs-to-many-association-reference" target="_blank">has_and_belongs_to_many</a>

## Useful Docs

* <a href="http://guides.rubyonrails.org/association_basics.html" target="_blank">Associations Rails Guide</a>
* <a href="http://edgeguides.rubyonrails.org/active_record_migrations.html" target="_blank">Migrations Rails Guide</a>
