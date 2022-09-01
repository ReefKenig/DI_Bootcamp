CREATE TABLE product_orders(
	order_id SERIAL PRIMARY KEY,
-- 	item_id INT,
	user_id INT,
-- 	CONSTRAINT fk_item_id
-- 	FOREIGN KEY(item_id)
-- 	REFERENCES items(item_id),
	CONSTRAINT fk_user_id
	FOREIGN KEY(user_id)
	REFERENCES users(user_id)
);

CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	description VARCHAR(255),
	price FLOAT,
	order_id INT
);

CREATE TABLE users(
	user_id SERIAL PRIMARY KEY,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	email VARCHAR(255),
	order_id INT
);

CREATE TABLE orders(
	order_id INT REFERENCES product_orders(order_id),
	item_id INT REFERENCES items(item_id)
);

INSERT INTO items(description, price, order_id)
VALUES('chair', 25, 1), ('bowl', 13.4, 1), ('bottle', 5, 2)

INSERT INTO users(first_name, last_name, email)
VALUES('reef', 'kenig', 'r.k@gmail.com'), ('john', 'doe', 'j.d@a.com')

INSERT INTO product_orders(user_id)
VALUES(1)

INSERT INTO orders(order_id, item_id)
VALUES(3, 2), (3, 3)

select * from product_orders where user_id = 1
select * from orders where order_id = 1
select * from items

-- select SUM(items.price)
-- from items
-- join orders on orders.item_id = items.item_id
-- join product_orders on product_orders.order_id = orders.order_id
-- join users on users.user_id = product_orders.user_id
-- where users.user_id = 1
CREATE OR REPLACE FUNCTION sum_price(id int, o_id int)
returns float
language plpgsql
as
$$
DECLARE
	total float;
BEGIN
	select SUM(items.price)
	into total
	from items
	join orders on orders.item_id = items.item_id
	join product_orders on product_orders.order_id = orders.order_id
	join users on users.user_id = product_orders.user_id
	where users.user_id = id
	and product_orders.order_id = o_id;
	return total;
END;
$$;

-- drop function sum_price

select sum_price(1, 3);