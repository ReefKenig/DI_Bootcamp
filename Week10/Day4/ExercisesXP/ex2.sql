-- Task 1
SELECT * FROM customer;

-- Task 2
SELECT concat(first_name,' ', last_name) as full_name
FROM customer;

-- Task 3
SELECT DISTINCT create_date
FROM customer;

-- Task 4
SELECT *
FROM customer
ORDER BY first_name desc;

-- Task 5
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate;

-- Task 6
SELECT address, phone
FROM address
WHERE district = 'Texas';

-- Task 7
SELECT *
FROM film
WHERE film_id = 15 OR film_id = 150;

-- Task 8
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE '%Star%';

-- Task 9
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'St%';

-- Task 10
SELECT title, MIN(rental_rate) as price
FROM film
GROUP BY title
ORDER BY price asc
LIMIT 10

-- Task 11
SELECT title, MIN(rental_rate) as price
FROM film
GROUP BY title
ORDER BY price asc
LIMIT 10 OFFSET 10

-- Task 12
SELECT amount, payment_date
FROM payment
JOIN customer
ON customer.customer_id = payment.customer_id
ORDER BY payment.customer_id

-- Task 13
SELECT film_id, title
FROM film
WHERE film_id not in (SELECT film_id FROM inventory)

-- Task 14
SELECT city.city, country.country
FROM city
JOIN country
ON city.country_id = country.country_id

-- Task 15
SELECT 
	customer.customer_id,
	concat(first_name,' ', last_name) as full_name,
	payment.amount,
	payment.payment_date
FROM customer
LEFT JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id