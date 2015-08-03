DROP DATABASE IF EXISTS library_app;
CREATE DATABASE library_app;

CREATE TABLE authors (
	id SERIAL primary key,
	first_name VARCHAR(255),
	year_of_birth INTEGER, 
	year_of_death INTEGER DEFAULT 'NaN',
	created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE products (
	id SERIAL primary key,
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

SELECT SUM(price*quantity) AS total_inventory_value
	FROM products;
	
CREATE TABLE books (
	id SERIAL primary key,
	title VARCHAR(255),
	isbn INTEGER NOT NULL,
	pub_year INTEGER,
	author_id INTEGER
);

INSERT INTO books 
	(title, isbn, pub_year, author_id)
	VALUES
	('The Jungle Book', 1894, 9788497896696, 1),
	("Alice's Adventures in Wonderland", 1865, 9781552465707, 2),
	('Rikki-Tikki-Tavi', 1894, 1484123689, 1),
	('Through the Looking-Glass', 1871, 9781489500182, 2),
	('The Time Machine', 1895, 9781423794417, 3);

ALTER TABLE products 
	ADD COLUMN book_id INTEGER;

INSERT INTO products
	(book_id, price, quantity)
	VALUES
	(1, 6.50, 16),
	(2, 8.20, 24),
	(3, 5.00, 7),
	(4, 7.00, 13),
	(5, 6.40, 23);


SELECT book_id, SUM(price*quantity) AS inventory_value
	FROM products
	WHERE book_id IS NOT NULL
	ORDER BY inventory_value DESC;


SELECT SUM(price*quantity) AS inventory_value
	FROM products
	WHERE book_id = 2 OR book_id = 4;

