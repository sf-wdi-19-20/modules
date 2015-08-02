# Intro SQL

| Objectives |
| :---- |
| Discuss SQL database structure and components |
| Discuss and create tables, columns, types, and constraints in Postgres |
| Discuss and implement simple queries for resources in Postgres |

## Setup

* Go and download [Postgres.app](http://postgresapp.com/)
* Finish install and drag it into your applications folder.
* Then add Postgres.app to your `$PATH`

  ```bash
    echo 'PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin' >> ~/.bash_profile
  ```
* Then source your `~/.bash_profile`

  ```bash
  source ~/.bash_profile
  ```
* Check that your install worked

  ```bash
  which psql
  ```

## Outline

* What is SQL?
  * tables, rows, and columns
* ORDBMS and RDBMS
  * Postgres, MySQL, SQLite, Microsoft SQL Server
* Data Definition Language
  * `CREATE`, `ALTER`, `RENAME`, `DROP`, `TRUNCATE`
  * Data Types
  * Constraints
* Queries
  * `SELECT`, `INSERT`, `UPDATE`, `DELETE`    * `MERGE` or `UPSERT` coming to **Postgres** 9.5
* DUMP-ing


## What Are Relational Databases?

Relational databases were invented at IBM in the 1970's as a way to structure data so that it can be queried by a relational algebra.  The idea of relational model was to use collections of data, **Tables**, where each database manages **Relations** among the data in various tables. Tables are organized like a spreadsheet with a  **Row** (also known as 'record') for each data item and with attributes of those items arranged in  **Columns***.

## What is SQL?

SQL, a Structured Query Language, is a specialized language used to create, manipulate, and query tables in relational databases.

#### Authors Table

| `id` | `first_name` | `last_name` | `y_o_b` | `y_o_d` |
| :---  | :---  | :---  | :---  | :---  |
| 1 | Rudyard | Kipling | 1865 | 1936 |
| 2 | Lewis | Carroll | 1832 | 1892 |
| 3 | H.G.  | Wells |  1866 | 1946  |



#### Books Table

| `id` | `title` | `description` | `publication_year` | `isbn` | `author_id` |
| :---  | :---  | :---  | :---  | :---  | :---  |
|1 | The Jungle Book | The Jungle Book is a collection of stories by English author Rudyard Kipling. The stories were first published in magazines in 1893–94. The original publications contain illustrations, some by Rudyard's father, John Lockwood Kipling. | 1894 | 9788497896696 | 1 |
| 2 | Alice's Adventures in Wonderland | Alice's Adventures in Wonderland is an 1865 novel written by English author Charles Lutwidge Dodgson under the pseudonym Lewis Carroll. | 1865 | 9781552465707 | 2 |
| 3 | Rikki-Tikki-Tavi |"Rikki-Tikki-Tavi" is a short story in The Jungle Book by Rudyard Kipling about the adventures of a valiant young mongoose. The story has often been anthologized, and has been published more than once as a short book in its own right. | 1894 | 1484123689 | 1 |
| 4 | Through the Looking-Glass | Through the Looking-Glass, and What Alice Found There is a novel by Lewis Carroll, the sequel to Alice's Adventures in Wonderland. It is based on his meeting with another Alice, Alice Raikes | 1871 | 9781489500182 | 2 |
| 5 | The Time Machine | The Time Machine is a science fiction novel by H. G. Wells, published in 1895. Wells is generally credited with the popularisation of the concept of time travel by using a vehicle that allows an operator to travel purposefully and selectively | 1895  | 9781423794417 | 3 |



## ORDBMS and RDBMS

[Services](http://en.wikipedia.org/wiki/List_of_relational_database_management_systems#List_of_Software)


## Data Definition Language

The **DDL** is the language we use to create and manage **Relations** in our database.

* Let's first create our first database

```bash
createdb practice
```

  * Then let's connect to it so we can practice more SQL

  ```bash
  psql practice
  ```

  * You should see a prompt like the following:

  ```sql
  practice=#
  ```

* Now let's try to create our first Table

  ```sql
  CREATE TABLE author (
    id SERIAL primary key,
    firstName VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT now()
  );
  ```

  * [`SERIAL TYPE`](http://www.postgresql.org/docs/9.4/interactive/datatype-numeric.html#DATATYPE-SERIAL)
  * [`Primary Key`](http://www.postgresql.org/docs/9.4/interactive/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS)
  * [MORE DATA TYPES](http://www.postgresql.org/docs/9.4/interactive/datatype.html)


* Let's learn how to `ALTER` this table after is created.

  ```sql
  ALTER TABLE author ADD COLUMN last_name varchar(255);
  ```
* Now an author doesn't need a `description` column so let's remove it.

  ```sql
  ALTER TABLE author DROP COLUMN description;
  ```
* Oops, **Table** names should always be plural.

  ```sql
  ALTER TABLE author RENAME TO authors;
  ```
* Oops, it looks like our `firstName` column is `camelCased` all column names should be `snake_case`.

  ```sql
  ALTER TABLE authors RENAME COLUMN firstName TO first_name;
  ```

* This was a great table and you should try doing all this again sometime, so let's `DROP` our table.

  ```sql
  DROP TABLE authors;
  ```

## Querying

Let's begin by creating a `products` table

```sql
CREATE TABLE products (
  id serial primary key,
  name text,
  price numeric NOT NULL DEFAULT 'NaN',
  quantity integer NOT NULL DEFAULT 0
);
```

How do we get data into the table. Let's try an example using `INSERT`.

```sql
INSERT INTO products
  (name, price, quantity)
  VALUES
  ('blue jeans', 50.00, 20);
```

Let's add a few more items to our products

```sql
'blue slacks', 62.00, 15
'plain T-Shirts', 10.00, 75
'long shorts', 25.00, 10
```

That seems great, but how do we see all this data?

```sql
SELECT * FROM products;
```

How would we view only the names of products?

```sql
SELECT name FROM products;
```

How would we view them all sorted by price?

```sql
SELECT name FROM products ORDER BY price;
```

How would would we grab just `plain T-Shirts`

```sql
SELECT * FROM products
  WHERE name = 'plain T-Shirts';
```

This is the first time we have seen the `WHERE` clause, and it's nifty.


```sql
SELECT * FROM products
  WHERE price > 18.00
  ORDER BY price;
```

So far we've had a great time trying to `SELECT` data from our TABLE.

```sql
UPDATE products
  SET quantity = quantity - 1
  WHERE name = 'long shorts';
```

We can also change `plain T-Shirts` to `plain T-shirts`


```sql
UPDATE products
  SET name = 'plain T-shirts'
  WHERE name = 'plain T-Shirts';
```

You might wondering why you don't see anything change after you update an entry. This is not standard behavior, but you can tell postgres to return the modified record.

```sql
UPDATE products
  SET quantity = quantity - 1
  WHERE name = 'long shorts'
  RETURNING *;
```

Let's remove some of these rows in our `products` table.

```sql
DELETE FROM products
  WHERE name = 'long shorts'
  RETURNING *;
```

You can also `DELETE` a everything but the `blue slacks`


```sql
DELETE FROM products
  WHERE name <> 'blue slacks';
```

You can `DELETE` everything from a table using

```sql
DELETE FROM products;
```

### Exercises

* Re-insert into  the table the four items we started with.


## Running A File

To run a `.sql` file. Use the following:

```bash
psql -f <file_name>
```



## ALIAS

You can make your queries easier to read using an alias. Aliases in SQL use the keyword `AS`.


```sql
SELECT * FROM products
  AS prod  -- alias for the products table
  WHERE prod.name = 'long shorts';
```


```sql
SELECT name, price AS cost, quantity  -- alias for the price column
  FROM products
  WHERE prod.name = 'long shorts';
```

## DISTINCT

We can also filter out rows that aren't distinct when we do our selection.


```sql
INSERT INTO products
  (name, price, quantity)
  VALUES
  ('blue jeans', 50.00, 20);
```

Try to remove duplicates from selection

```sql
SELECT DISTINCT ON (name) *
  FROM products;
```

## Research

* Aggregate

```sql
SELECT SUM(price*quantity) AS total_inventory_value from products;
```

```sql
SELECT name, MIN(price) AS lowest_avaialable_price
FROM products
GROUP BY name
ORDER BY lowest_avaialable-price;
```



## JOINS

| Objectives |
|:---|
| To discuss and explain different types of table relations in SQL |
| To discuss and implement ways to query using relationships from two tables |
| To explain relationship concepts like `foriegn_key` and `join_table` using simple ERD |


![Joins](https://raw.githubusercontent.com/sf-wdi-18/notes/master/lectures/week-07/day-1-intro-sql/dawn-simple-queries/images/join.png)

## Why Are Joins Important

Each table in a relational database is considered a relation. All of the table's data is naturally related by single set of attributes defined for it. However, in order to be relational we need to be able to make queries between relations or tables of data.

JOINS are our means of implementing queries that join together data and show results from multiple tables.


## Keys

* Primary Key: The primary key of a relational table uniquely identifies each record in the table. This column is automatically assigned a btree index in postgres.

* Foreign Key: a foreign key is a field (or collection of fields) in one table that uniquely identifies a row of another table.[1][2][3] **In other words, a foreign key is a column or a combination of columns that is used to establish and enforce a link between the data in two tables.**

![primary and foreign key diagram](https://raw.githubusercontent.com/sf-wdi-18/notes/master/lectures/week-07/day-1-intro-sql/dawn-simple-queries/images/primary_foreign_key.png)


## Example

Let's use a simple foreign key relationship as follows between `people` and `petss` tables.


```sql
create table people (
  id serial primary key,
  name text,
  age integer
);

create table pets (
  id serial primary key,
  name text,
  age integer,
  breed text,
  people_id integer
);

INSERT INTO people ( name, age)
      VALUES ('Zed', 37);

INSERT INTO people ( name, age)
    VALUES ('Bobby', 7);

INSERT INTO pets (name, breed, age, people_id)
      VALUES ( 'Fluffy', 'Unicorn', 1000, 1);

INSERT INTO pets (name, breed, age, people_id)
      VALUES ('Rocko', 'Dog', 4, 2);

INSERT INTO pets (name, breed, age, people_id)
     VALUES ('Gigantor', 'Robot', 25, 1);

INSERT INTO pets (name, breed, age, people_id)
     VALUES ('Goldy', 'Fish', 1, 2);
```


Let's try our first joins

```sql
  SELECT * FROM people
  INNER JOIN pets
  ON people.id = pets.people_id;

  SELECT people.name, pets.name from people
  INNER JOIN pets
  ON people.id = pets.people_id;

```

**Other Types of Joins**  


Full Outer Join  

```sql
SELECT * FROM people
  FULL OUTER JOIN pets
  ON people.id = pets.people_id;
```

Left Outer Join  

```sql

SELECT * FROM people
  LEFT OUTER JOIN pets
  ON people.id = pets.people_id;

```

Right Outer Join  

```sql

SELECT * FROM people
  RIGHT OUTER JOIN pets
  ON people.id = pets.people_id;

```  

Left Outer Join with Where  

```sql
SELECT * FROM people
  LEFT OUTER JOIN pets
  ON people.id = pets.people_id
  WHERE pets.breed = 'Unicorn';
```

Cross Join  

```sql
SELECT * FROM people
  CROSS JOIN pets
  WHERE people.id = 1;
```

# Intro SQL
## Exercises With PG

So far you've been interacting directly with your database using `psql`. However, we want to gain understanding to how Ruby libraries can manipulate and model SQL interactions at the application level. Thus we will continue exploring SQL using the `pg` gem.

```bash
gem install pg
```

Then create a `shopper_app` using the `createdb` command from earlier.

## Exercise 1: Simple Connection

Try the following, copy it into an `example_1.rb`

```ruby
require 'pg'

conn = PG.connect(dbname: "shopper_app")

conn.exec("CREATE TABLE shopper (
              id serial primary key,
              first_name varchar(255),
              last_name varchar(255),
              email text,
              address text)")

```

* Run the file.
* Run `psql shopper_app` and verify the table exists

```
select * from shopper;
```

* What happens when you try to run the second time?

## Exercise 2: Alter Table

What's wrong with above table name? Let's alter it to be correct. Copy the code from the above exercise into a new file `example_2.rb` and erase the exec query and write a query to `ALTER` and `RENAME` the table to `shoppers`.

## Exercise 3: Inserting

Create file called `example_3.rb` and use `pg` to insert three new people into the `shoppers` table.

Try doing it the way we did in class and then try it using the following format.

```ruby
conn.exec("INSERT INTO shoppers
            (first_name, last_name, email, address)
            VALUES
            ($1, $2, $3, $4)",
            ["zoe", "doe", "zoe@gmail.com", "1234 st"]);

```

The `($1, $2, $3, $4)` in the insertion represents the first, second, third, and fourth items in the array passed to `exec`.

Use `psql` to verify they exist.

## Exercise 4: Fake Data

Writing a bunch of fake data is tedious and time consuming. Let's use a gem to help use create fake data.

```ruby
gem install ffaker
```

Then let's try using it in the REPL before we go writing code with it.

```
> require "ffaker"
> FFaker::Name.first_name
# => 'Zoe'
> FFaker::Name.last_name
# => 'Doe'
> FFaker::Internet.email
# => 'ethyl@roberts.us'
```

## Exercise 5: Fake Create

Use the `ffaker` gem to insert three new entries into the db.
