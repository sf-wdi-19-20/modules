# Intro SQL

| Objectives |
| :---- |
| Discuss SQL database structure and components |
| Create tables with columns, types, and constraints in Postgres |
| Implement simple and aggregation queries for resources in Postgres |

## Setup

1. Download [Postgres.app](http://postgresapp.com/).

2. Follow Postgress.app's install instructions (move Postgres into your Applications folder).
    
3. Follow Postgres.app's [instructions to install command line tools](http://postgresapp.com/documentation/cli-tools.html): 
  * add Postgres.app to your `$PATH`

      ```bash
        echo 'PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin' >> ~/.bash_profile
      ```
  * source your `~/.bash_profile`

      ```bash
      source ~/.bash_profile
      ```
  * check that your install worked
    
      ```bash
      which psql
      ```

## What Are Relational Databases?

Relational databases were invented the 1970's as a way to structure data so that it can be queried by a "relational algebra."  The basic idea of relational model, though, was to use collections of data, **Tables**, where each database manages **Relations** among the data in various tables. Each table is organized like a spreadsheet with a **Row** (also known as "record") for each data item and with attributes of those items arranged in  **Columns***.

**Authors Table**

| `id` | `first_name` | `last_name` | `year_of_birth` | `year_of_death` |
| :---  | :---  | :---  | :---  | :---  |
| 1 | Rudyard | Kipling | 1865 | 1936 |
| 2 | Lewis | Carroll | 1832 | 1892 |
| 3 | H.G.  | Wells |  1866 | 1946  |

**Books Table**

| `id` | `title` | `publication_year` | `isbn` | `author_id` |
| :---  | :---  | :---  | :---  | :---  |
| 1 | The Jungle Book | 1894 | 9788497896696 | 1 |
| 2 | Alice's Adventures in Wonderland | 1865 | 9781552465707 | 2 |
| 3 | Rikki-Tikki-Tavi | 1894 | 1484123689 | 1 |
| 4 | Through the Looking-Glass | 1871 | 9781489500182 | 2 |
| 5 | The Time Machine |  1895  | 9781423794417 | 3 |

## What is SQL?

SQL, Structured Query Language, is a specialized language used to create, manipulate, and query tables in relational databases.

  * Data **Definition** Language
    * Define and update database's structure
    * `CREATE`, `ALTER`, `RENAME`, `DROP`, `TRUNCATE` 
    * Data Types
    * Constraints
  * Data **Manipulation** Language 
    * CRUD data within the database
    * `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `ORDER BY`    
    * `UPSERT` (attempts an UPDATE, or on failure, INSERT) is part of SQL 3 but not yet in Postgres
    * Queries
    * Aggregation: `GROUP BY`, `SUM`, `AVG`, `MIN`
  * Data **Control** Language (beyond our scope)
    * `GRANT` access to parts of the table 


## Creating and Modifying RDB Structure

### Database Setup

Let's create our first relational database using the Terminal.
    
  ```bash
  createdb practice
  ```

Then let's connect to it by name so we can practice our SQL.

  ```bash
  psql practice
  ```

In your Terminal, you should see a prompt like the following:

  ```sql
  practice=#
  ```
  
### Workflow Setup

To save your progress on the in-class examples and the challenges, I suggest creating files that store your SQL commands. To run a `.sql` file, use the following command in your terminal:

  ```bash
  psql -f <file_name>
  ```
    
You can also create (and destroy) tables from within a SQL file. At the top of your SQL file, I suggest you write the following:

  ```sql
  DROP DATABASE IF EXISTS database_name;
  CREATE DATABASE database_name;
  ```

### Our First Table

Now let's try to create our first Table within the new database.  Note: please feel free to shorten attribute names so they're easier to type.

  ```sql
  CREATE TABLE author (
    id SERIAL primary key,
    firstName VARCHAR(255),
    year_of_birth INTEGER, -- also known as yob
    year_of_death INTEGER DEFAULT 'NaN',
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT now()
  );
  ```

  * [`SERIAL TYPE`](http://www.postgresql.org/docs/9.4/interactive/datatype-numeric.html#DATATYPE-SERIAL)
  * [`Primary Key`](http://www.postgresql.org/docs/9.4/interactive/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS)
  * [MORE DATA TYPES](http://www.postgresql.org/docs/9.4/interactive/datatype.html)

### Altering Tables and Columns

We can `ALTER` this table after is created.

  ```sql
  ALTER TABLE author ADD COLUMN last_name varchar(255);
  ```
  
An author doesn't need a `description` column, so let's remove it.

  ```sql
  ALTER TABLE author DROP COLUMN description;
  ```
Oops, **Table names should always be plural.** We'll fix the author table name.

  ```sql
  ALTER TABLE author RENAME TO authors;
  ```
Oops, it looks like our `firstName` column is `camelCased`. **All column names should be `snake_case`.** We can also rename columns.

  ```sql
  ALTER TABLE authors RENAME COLUMN firstName TO first_name;
  ```

Let's `DROP` our table! 

  ```sql
  DROP TABLE authors;
  ```
  
 
## Creating, Reading, Updating, and Deleting data in our RDB

The library's having a fundraiser! Here's another table we might have in the database:

```sql
CREATE TABLE products (
    id SERIAL primary key,
    name VARCHAR(255),
    price numeric NOT NULL DEFAULT 'NaN',
    quantity integer NOT NULL DEFAULT 0
)
```

### Inserting Data into RDB

How do we get data into a table? With `INSERT`!

```sql
INSERT INTO products
  (name, price, quantity)
  VALUES
  ('bookmark', 0.50, 200);
```


Let's add a few more items to our products table

```sql
'book cover', 2.00, 75
'book bag', 60.00, 15
'reading light', 25.00, 10
```

### Reading Data from RDB

To retrieve data from inside our database, we use the command `SELECT`.

```sql
SELECT * FROM products;
```

Let's look at only some attributes of each product.

```sql
SELECT name, price FROM products;
```

We can use `ORDER BY` to sort the selected items.

```sql
SELECT name FROM products ORDER BY price;
```

The `WHERE` keyword allows us to narrow down our query results. We can grab just the `bookmark` record. 

```sql
SELECT * FROM products
  WHERE name = 'bookmark';
```

We can grab the more expensive items only.

```sql
SELECT * FROM products
  WHERE price > 20.00
  ORDER BY price;
```

We can even use regular expressions to find products with "book" at the start of their `name`s. 

```sql 
SELECT * FROM products
  WHERE name LIKE 'book%';
```

### Updating Simple Data in the RDB

So far we've had a great time using `SELECT` to read data from our TABLE. We can also change data. Here comes our first sale, a bookmark!

```sql
UPDATE products
  SET quantity = quantity - 1
  WHERE name = 'bookmark';
```

Let's also correct the spelling of `book bag` to `bookbag`.

```sql
UPDATE products
  SET name = 'bookbag'
  WHERE name = 'book bag';
```

You might wonder why you don't see anything change after you update an entry. If you'd like, you can tell Postgres to return the modified record.  It just isn't the standard behavior.

```sql
UPDATE products
  SET quantity = quantity - 1
  WHERE name = 'bookmark'
  RETURNING *;
```

### Deleting Simple Data from an RDB

Let's remove a row in our `products` table. Book covers don't sell that well.

```sql
DELETE FROM products
  WHERE name = 'book cover'
  RETURNING *;
```

We could also `DELETE` everything but the `bookmark`s with the `<>` (not equal) operator.

```sql
DELETE FROM products
  WHERE name <> 'bookmark';
```

You can `DELETE` everything from a table using

```sql
DELETE FROM products;
```

**Challenge**: Insert four items into the products table.

### ALIAS

You can make your queries easier to read using an alias. Aliases in SQL use the keyword `AS`.


```sql
SELECT * FROM products
  AS prod  -- alias for the products table
  WHERE prod.name = 'bookmarks';
```

```sql
SELECT name, price AS cost, quantity  -- alias for the price column only
  FROM products
  WHERE prod.name = 'bookmarks';
```

Note also that `--` starts a SQL comment.

### DISTINCT

We can use selection to filter out rows that aren't distinct. First, let's add  duplicate bookbag records.

```sql
INSERT INTO products
  (name, price, quantity)
  VALUES
  ('bookbag', 50.00, 20),
  ('bookbag', 65.00, 10);
```

Then we'll select, looking for records with distinct names.  Which of the bookbag records do you think will be selected?

```sql
SELECT DISTINCT ON (name) *
  FROM products;
```

### Aggregation


```sql
SELECT SUM(quantity) AS total_inventory_count from products;
```

```sql
SELECT name, MIN(price) AS lowest_avaialable_price
FROM products
GROUP BY name
ORDER BY lowest_avaialable_price;
```


### Basic Challenges

1. Use SQL aggregators to get the total value of the inventory, calculated as the sum of the price*quantity for each item.

1. Create a books table based on the printed table above. It should have attributes for `id`, `title`, `pub_year`, `isbn`, and `author_id`.  For now, just make the `author_id` an `INTEGER`. 

1. Add the classic children's books from earlier in this readme into your books table.

1. The library wants to start selling off old books.  Add a `book_id` attribute to the products table so that the library can store books as inventory.

1. Insert the books from your books table into your products table. Make up a price and quantity for them.

### Stretch Challenges

1. Find the inventory value of the books by Lewis Caroll.

1. Find the inventory value of the books for each author, and sort the records by inventory value, in descending order.



<!--## Joins-->

<!--![Joins](https://raw.githubusercontent.com/sf-wdi-18/notes/master/lectures/week-07/day-1-intro-sql/dawn-simple-queries/images/join.png)-->

<!--### Joins Are Important-->

<!--Each table in a relational database is considered a relation. All of the table's data is naturally related by single set of attributes defined for it. However, in order to be relational we need to be able to make queries between relations or tables of data.-->

<!--JOINS are our means of implementing queries that join together data and show results from multiple tables.-->


<!--## Keys-->

<!--* Primary Key: The primary key of a relational table uniquely identifies each record in the table. This column is automatically assigned a btree index in postgres.-->

<!--* Foreign Key: a foreign key is a field (or collection of fields) in one table that uniquely identifies a row of another table.[1][2][3] **In other words, a foreign key is a column or a combination of columns that is used to establish and enforce a link between the data in two tables.**-->

<!--![primary and foreign key diagram](https://raw.githubusercontent.com/sf-wdi-18/notes/master/lectures/week-07/day-1-intro-sql/dawn-simple-queries/images/primary_foreign_key.png)-->


<!--## Example-->

<!--Let's set up a relationship between a `people` table and a `pets` table.-->


<!--```sql-->
<!--create table authors (-->
<!--  id SERIAL primary key,-->
<!--  name TEXT,-->
<!--  age integer-->
<!--);-->

<!--create table pets (-->
<!--  id serial primary key,-->
<!--  name text,-->
<!--  age integer,-->
<!--  breed text,-->
<!--  people_id integer-->
<!--);-->

<!--INSERT INTO people ( name, age)-->
<!--      VALUES ('Zed', 37);-->

<!--INSERT INTO people ( name, age)-->
<!--    VALUES ('Bobby', 7);-->

<!--INSERT INTO pets (name, breed, age, people_id)-->
<!--      VALUES ( 'Fluffy', 'Unicorn', 1000, 1);-->

<!--INSERT INTO pets (name, breed, age, people_id)-->
<!--      VALUES ('Rocko', 'Dog', 4, 2);-->

<!--INSERT INTO pets (name, breed, age, people_id)-->
<!--     VALUES ('Gigantor', 'Robot', 25, 1);-->

<!--INSERT INTO pets (name, breed, age, people_id)-->
<!--     VALUES ('Goldy', 'Fish', 1, 2);-->
<!--```-->


<!--Let's try our first joins-->

<!--```sql-->
<!--  SELECT * FROM people-->
<!--  INNER JOIN pets-->
<!--  ON people.id = pets.people_id;-->

<!--  SELECT people.name, pets.name from people-->
<!--  INNER JOIN pets-->
<!--  ON people.id = pets.people_id;-->

<!--```-->

<!--**Other Types of Joins**  -->


<!--Full Outer Join  -->

<!--```sql-->
<!--SELECT * FROM people-->
<!--  FULL OUTER JOIN pets-->
<!--  ON people.id = pets.people_id;-->
<!--```-->

<!--Left Outer Join  -->

<!--```sql-->

<!--SELECT * FROM people-->
<!--  LEFT OUTER JOIN pets-->
<!--  ON people.id = pets.people_id;-->

<!--```-->

<!--Right Outer Join  -->

<!--```sql-->

<!--SELECT * FROM people-->
<!--  RIGHT OUTER JOIN pets-->
<!--  ON people.id = pets.people_id;-->

<!--```  -->

<!--Left Outer Join with Where  -->

<!--```sql-->
<!--SELECT * FROM people-->
<!--  LEFT OUTER JOIN pets-->
<!--  ON people.id = pets.people_id-->
<!--  WHERE pets.breed = 'Unicorn';-->
<!--```-->

<!--Cross Join  -->

<!--```sql-->
<!--SELECT * FROM people-->
<!--  CROSS JOIN pets-->
<!--  WHERE people.id = 1;-->
<!--```-->

<!--# Intro SQL-->
<!--## Exercises With PG-->

<!--So far you've been interacting directly with your database using `psql`. However, we want to gain understanding to how Ruby libraries can manipulate and model SQL interactions at the application level. Thus we will continue exploring SQL using the `pg` gem.-->

<!--```bash-->
<!--gem install pg-->
<!--```-->

<!--Then create a `shopper_app` using the `createdb` command from earlier.-->

<!--## Exercise 1: Simple Connection-->

<!--Try the following, copy it into an `example_1.rb`-->

<!--```ruby-->
<!--require 'pg'-->

<!--conn = PG.connect(dbname: "shopper_app")-->

<!--conn.exec("CREATE TABLE shopper (-->
<!--              id serial primary key,-->
<!--              first_name varchar(255),-->
<!--              last_name varchar(255),-->
<!--              email text,-->
<!--              address text)")-->

<!--```-->

<!--* Run the file.-->
<!--* Run `psql shopper_app` and verify the table exists-->

<!--```-->
<!--select * from shopper;-->
<!--```-->

<!--* What happens when you try to run the second time?-->

<!--## Exercise 2: Alter Table-->

<!--What's wrong with above table name? Let's alter it to be correct. Copy the code from the above exercise into a new file `example_2.rb` and erase the exec query and write a query to `ALTER` and `RENAME` the table to `shoppers`.-->

<!--## Exercise 3: Inserting-->

<!--Create file called `example_3.rb` and use `pg` to insert three new people into the `shoppers` table.-->

<!--Try doing it the way we did in class and then try it using the following format.-->

<!--```ruby-->
<!--conn.exec("INSERT INTO shoppers-->
<!--            (first_name, last_name, email, address)-->
<!--            VALUES-->
<!--            ($1, $2, $3, $4)",-->
<!--            ["zoe", "doe", "zoe@gmail.com", "1234 st"]);-->

<!--```-->

<!--The `($1, $2, $3, $4)` in the insertion represents the first, second, third, and fourth items in the array passed to `exec`.-->

<!--Use `psql` to verify they exist.-->

<!--## Exercise 4: Fake Data-->

<!--Writing a bunch of fake data is tedious and time consuming. Let's use a gem to help use create fake data.-->

<!--```ruby-->
<!--gem install ffaker-->
<!--```-->

<!--Then let's try using it in the REPL before we go writing code with it.-->

<!--```-->
<!--> require "ffaker"-->
<!--> FFaker::Name.first_name-->
<!--# => 'Zoe'-->
<!--> FFaker::Name.last_name-->
<!--# => 'Doe'-->
<!--> FFaker::Internet.email-->
<!--# => 'ethyl@roberts.us'-->
<!--```-->

<!--## Exercise 5: Fake Create-->

<!--Use the `ffaker` gem to insert three new entries into the db.-->
