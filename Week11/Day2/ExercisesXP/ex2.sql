-- 1
UPDATE film
SET language_id = 2
WHERE title LIKE '%Italian%';

-- 2
-- The address_id column in the address table is a foreign key in the customers table
-- Inserting new rows to the customers table must include an existing address_id

-- 3
DROP TABLE customer_review
-- No extra steps required because no other table references to this one

-- 4
SELECT COUNT(*) as outstanding
FROM rental
WHERE return_date is null;

-- 5
SELECT rental_rate
FROM film f
JOIN inventory i
ON f.film_id = i.film_id
JOIN rental r
ON r.inventory_id = i.inventory_id
WHERE r.return_date is null;

-- 6
SELECT f.title, f.description
FROM film f
JOIN film_actor fa
ON f.film_id = fa.film_id
WHERE 
	fa.actor_id = 120
	AND 
	(
		f.description ILIKE '%sumo%' 
		OR f.title ILIKE '%sumo%'
	);

SELECT f.title, f.rating, f.length
FROM film f
JOIN film_category fc
ON f.film_id = fc.film_id
WHERE
	f.length < 60
	AND f.rating = 'R'
	AND fc.category_id = 6;
	
SELECT f.title, f.rental_rate, r.return_date, r.customer_id
FROM film f
JOIN inventory i
	ON f.film_id = i.film_id
JOIN rental r
	ON r.inventory_id = i.inventory_id
WHERE
	f.rental_rate > 4.00
	AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'
	AND r.customer_id = 323;
	
SELECT f.title, f.description, f.rental_rate, r.customer_id
FROM film f
JOIN inventory i
	ON f.film_id = i.film_id
JOIN rental r
	ON r.inventory_id = i.inventory_id
WHERE
	r.customer_id = 323
	AND 
	(
		f.title ILIKE '%boat%'
		OR f.description ILIKE '%boat%'
	)
ORDER BY f.rental_rate DESC
LIMIT 1;