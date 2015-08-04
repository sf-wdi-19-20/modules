-- Setup --
DROP DATABASE IF EXISTS library_app;  -- if the library_app database exists, remove it...
CREATE DATABASE library_app;          -- and recreate it

DROP TABLE authors;       -- go ahead and drop our tables as well
DROP TABLE products;      -- to be more careful, we could drop these tables IF EXISTS
DROP TABLE books;

CREATE TABLE authors (           
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255),
	year_of_birth INTEGER, 
	year_of_death INTEGER,
	created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	price NUMERIC NOT NULL DEFAULT 'NaN',
	quantity INTEGER NOT NULL DEFAULT 0
);

INSERT INTO products
	(name, price, quantity)
	VALUES
	('bookmark', 0.50, 200),
	('book cover', 2.00, 75),  
	('bookbag', 65.00, 20),
	('bookbag', 50.00, 20),
	('reading light', 25.00, 10);

-- Basic Challenges --

-- Use SQL aggregators to get the total value of the inventory, 
-- calculated as the sum of the price*quantity for each item.
SELECT SUM(price*quantity) AS total_inventory_value
	FROM products;
	
-- Create a books table based on the printed table from the notes. 
-- It should have attributes for id, title, pub_year, isbn, and author_id. 

CREATE TABLE books (
	id SERIAL primary key,
	title VARCHAR(255),
	isbn VARCHAR(255) NOT NULL,
	pub_year INTEGER,
	author_id INTEGER
);


-- Add the classic children's books from earlier 
-- into your books table.
INSERT INTO books 
	(title, pub_year, isbn, author_id)
	VALUES
	('The Jungle Book', 1894, '9788497896696', 1),
	('Alice''s Adventures in Wonderland', 1865, '9781552465707', 2), -- the '' lets us keep the apostrophe in Alice's
	('Rikki-Tikki-Tavi', 1894, '9781484123689', 1),
	('Through the Looking-Glass', 1871, '9781489500182', 2),
	('The Time Machine', 1895, '9781423794417', 3);


-- Let's make sure that worked!
SELECT * FROM books;


-- The library wants to start selling off old books. 
-- Add a book_id attribute to the products table 
-- so that the library can store books as inventory.
ALTER TABLE products 
	ADD COLUMN book_id INTEGER;

-- Insert the books from your books table into your products table. 
-- Make up a price and quantity for them.
INSERT INTO products
	(book_id, price, quantity)
	VALUES
	(1, 6.50, 16),
	(2, 8.20, 24),
	(3, 5.00, 7),
	(4, 7.00, 13),
	(5, 6.40, 23);

-- Let's see what the products table is now.
SELECT * FROM products;
-- Note that the non-book products have names
-- and the book products have book_ids.
-- This is expected based on how we designed the table.
	
	
-- Stretch Challenges -- 

-- Find the inventory value of each book, 
-- and sort the records by inventory value, in descending order.
SELECT book_id, SUM(price*quantity) AS inventory_value
	FROM products	
	WHERE book_id IS NOT NULL
	GROUP BY book_id
	ORDER BY inventory_value DESC;


-- Find the inventory value of the books by Lewis Caroll.
SELECT SUM(price*quantity) AS inventory_value
	FROM products
	WHERE book_id = 2 OR book_id = 4;
	
-- Joins will make this last solution much less awkward, and give us more readable output!

