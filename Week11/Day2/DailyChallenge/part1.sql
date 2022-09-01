-- 1
CREATE TABLE new_customer(
	id serial,
	first_name varchar(255),
	last_name varchar(255) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE customer_profile(
	id serial,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INT,
	CONSTRAINT fk_customer_id
		FOREIGN KEY(customer_id)
		REFERENCES new_customer(id)
);

-- 2
INSERT INTO new_customer(first_name, last_name)
VALUES
(
	'John', 'Doe'
),
(
	'Jerome', 'Lalu'
),
(
	'Lea', 'Rive'
);

-- 3
INSERT INTO customer_profile(customer_id, isLoggedIn)
SELECT
	id,
	CASE
		WHEN first_name = 'John' THEN true
	ELSE
		false
	END AS isLoggedIn
FROM new_customer;

-- 4
SELECT nc.first_name
FROM new_customer nc
LEFT JOIN customer_profile cp
	ON nc.id = cp.customer_id
WHERE cp.isLoggedIn = true;

SELECT nc.first_name, cp.isLoggedIn
FROM new_customer nc
FULL JOIN customer_profile cp
	ON nc.id = cp.customer_id;
	
SELECT COUNT(*) AS notLoggedIn
FROM customer_profile
WHERE isLoggedIn = false;