-- 1
CREATE TABLE book
(
	book_id SERIAL,
	title VARCHAR(255) NOT NULL,
	author VARCHAR(255) NOT NULL,
	PRIMARY KEY(book_id)
);

-- 2
INSERT INTO book(title, author)
VALUES
(
	'Alice In Wonderland', 'Lewis Carroll'
),
(
	'Harry Potter', 'J.K Rowling'
),
(
	'To kill a mockingbird', 'Harper Lee'
);

-- 3
CREATE TABLE student
(
	student_id SERIAL,
	name VARCHAR(255) NOT NULL UNIQUE,
	age INT CHECK(age < 15),
	PRIMARY KEY(student_id)
);

-- 4
INSERT INTO student(name, age)
VALUES
(
	'John', 12
),
(
	'Lera', 11
),
(
	'Patrick', 10
),
(
	'Bob', 14
);

-- 5
CREATE TABLE library
(
	book_fk_id INT,
	student_id INT,
	borrowed_date DATE,
	CONSTRAINT fk_book_id
		FOREIGN KEY(book_fk_id)
		REFERENCES book(book_id)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	CONSTRAINT fk_student_id
		FOREIGN KEY(student_id)
		REFERENCES student(student_id)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	PRIMARY KEY(book_fk_id, student_id)
);

-- 6
INSERT INTO library(book_fk_id, student_id, borrowed_date)
VALUES
(
	(SELECT book_id
	FROM book
	WHERE title = 'Alice In Wonderland'),
	(SELECT student_id
	FROM student
	WHERE name = 'John'),
	'2022-02-15'
),
(
	(SELECT book_id
	FROM book
	WHERE title = 'To kill a mockingbird'),
	(SELECT student_id
	FROM student
	WHERE name = 'Bob'),
	'2021-03-03'
),
(
	(SELECT book_id
	FROM book
	WHERE title = 'Alice In Wonderland'),
	(SELECT student_id
	FROM student
	WHERE name = 'Lera'),
	'2021-05-23'
),
(
	(SELECT book_id
	FROM book
	WHERE title = 'Harry Potter'),
	(SELECT student_id
	FROM student
	WHERE name = 'Bob'),
	'2021-08-12'
);

-- 7
SELECT *
FROM library;

SELECT s.name, b.title
FROM library l
JOIN student s ON l.student_id = s.student_id
JOIN book b ON b.book_id = l.book_fk_id;

SELECT AVG(s.age)
FROM student s
JOIN library l ON s.student_id = l.student_id
JOIN book b ON b.book_id = l.book_fk_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM student
WHERE student_id = 1;
-- The id of the deleted student also disappeared from the junction table