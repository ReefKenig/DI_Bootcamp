-- 1
SELECT name
FROM language;

-- 2
SELECT title, deescription, name
FROM film
LEFT OUTER JOIN language
ON film.language_id = language.language_id;

SELECT title, deescription, name
FROM film
FULL JOIN language
ON film.language_id = language.language_id;

-- 3
CREATE TABLE new_film
(
    id serial,
    name varchar(255),
	PRIMARY KEY(id)
);

INSERT INTO new_film(name)
VALUES
    ('Sonic the Hedgehog'),
    ('Star Wars'),
    ('Spider-Man'),
    ('Batman');

-- 4
CREATE TABLE customer_review
(
    review_id serial,
    id INT,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255),
    score INT,
    review_text TEXT,
    last_update TIMESTAMP DEFAULT current_timestamp,
    PRIMARY KEY(review_id),
	CONSTRAINT fk_film_id
			FOREIGN KEY(id)
				REFERENCES new_film(id)
					ON DELETE CASCADE,
    CONSTRAINT lmt_score
        CHECK(score BETWEEN 1 AND 10)
);

-- 5
INSERT INTO customer_review(id, language_id, title, score, review_text)
VALUES
    (1, 1, 'Sonic the Hedgehog', 8, 'Gotta go fast'),
    (2, 1, 'Star Wars', 10, 'In a galaxy far far away');

-- 6
DELETE
FROM new_film
WHERE id = 2;
-- The review about the film with the given ID has been deleted thanks to the cascade constraint