CREATE DATABASE public;

CREATE TABLE items(
    id int,
    item varchar(255),
    price int
);
CREATE TABLE customers(
    id int,
    FirstName varchar(255),
    LastName varchar(255)
);

INSERT INTO items(id, item, price)
VALUES
    (1, 'Small Desk', 100),
    (2, 'Large Desk', 300),
    (3, 'Fan', 80);

INSERT INTO customers(id, FirstName, LastName)
VALUES
    (1, 'Greg', 'Jones'),
    (2, 'Sandra', 'Jones'),
    (3, 'Scott', 'Scott'),
    (4, 'Trevor', 'Green'),
    (5, 'Melanie', 'Johnson');
	
SELECT * FROM items;

SELECT * FROM items WHERE price > 80;

SELECT * FROM items WHERE price < 300;

SELECT * FROM customers WHERE LastName = 'Smith';
-- Output is nothing since there is no LastName that is Smith in the table

SELECT * FROM customers WHERE LastName = 'Jones';

SELECT * FROM customers WHERE FirstName != 'Scott';