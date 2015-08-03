# SQL Continued (JOINS)

| Objectives |
| :--- |
| Determine which table to put foreign key |
| Use JOINS to combine data between SQL tables |

## Joins

Each table in a relational database is considered a relation. All of the table's data is naturally related by single set of attributes defined for it. However, in order to be relational, we need to be able to make queries between relations or tables of data.

**JOINS** are our means of implementing queries that combine data and show results from multiple tables.

There are many kinds of joins, based on how you want to combine data.

![](https://raw.githubusercontent.com/sf-wdi-18/notes/master/lectures/week-07/day-1-intro-sql/dawn-simple-queries/images/join.png)

## Foreign Key

To implement a JOIN between two tables, one of our tables must have a **foreign key**. A foreign key is a field in one table that uniquely identifies a row of another table. We use the foreign key to **establish and enforce a link between the data in two tables**.

The foreign key always goes on the table with the data that belongs to data from another table. In the example below, a person **has_many** pets, and a pet **belongs_to** a person. The foreign key `person_id` goes on the `pets` table to indicate which person the pet belongs to.

![](https://raw.githubusercontent.com/sf-wdi-18/notes/master/lectures/week-07/day-1-intro-sql/dawn-simple-queries/images/primary_foreign_key.png)

## Implementing JOINS

Using our `practice` database, let's set up a relationship between a `people` table and a `pets` table.

```sql
$ psql

# connect to our `practice` database
\c practice

# show all tables in our `practice` database
\dt

CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age INTEGER
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age INTEGER,
  breed VARCHAR(255),
  person_id INTEGER REFERENCES people
);

INSERT INTO people (name, age)
  VALUES ('Zed', 37);

INSERT INTO people (name, age)
  VALUES ('Bobby', 7);

INSERT INTO people (name, age)
  VALUES ('Cindy', 14);

INSERT INTO pets (name, breed, age, person_id)
  VALUES ('Fluffy', 'Unicorn', 1000, 1);

INSERT INTO pets (name, breed, age, person_id)
  VALUES ('Rocko', 'Dog', 4, 2);

INSERT INTO pets (name, breed, age, person_id)
  VALUES ('Gigantor', 'Robot', 25, 1);

INSERT INTO pets (name, breed, age, person_id)
  VALUES ('Goldy', 'Fish', 1);
```

#### Inner JOIN

```sql
SELECT * FROM people
INNER JOIN pets
ON people.id = pets.person_id;

SELECT people.name, pets.name from people
INNER JOIN pets
ON people.id = pets.person_id;
```

#### Full Outer JOIN

```sql
SELECT * FROM people
FULL OUTER JOIN pets
ON people.id = pets.person_id;
```

#### Left Outer JOIN

```sql
SELECT * FROM people
LEFT OUTER JOIN pets
ON people.id = pets.person_id;
```

#### Right Outer JOIN

```sql
SELECT * FROM people
RIGHT OUTER JOIN pets
ON people.id = pets.person_id;
```  

#### Left Outer JOIN with Where  

```sql
SELECT * FROM people
LEFT OUTER JOIN pets
ON people.id = pets.person_id
WHERE pets.breed = 'Unicorn';
```

#### Cross JOIN

**Note:** A cross JOIN shows all possible combinations of data between the two tables.

```sql
SELECT * FROM people
CROSS JOIN pets
WHERE people.id = 1;
```
