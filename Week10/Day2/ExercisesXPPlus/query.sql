CREATE DATABASE bootcamp;

CREATE TABLE students(
	id INT GENERATED ALWAYS AS IDENTITY,
	last_name varchar(255),
	first_name varchar(255),
	birth_date date
);

INSERT INTO students(last_name, first_name, birth_date)
VALUES
	('Benichou', 'Mark', '1998-11-02'),
	('Cohen', 'Yoan', '2010-12-03'),
	('Benichou', 'Lea', '1987-07-27'),
	('Amelia', 'Dux', '1996-04-07'),
	('David', 'Grez', '2003-06-14'),
	('Omer', 'Simpson', '1980-10-03');
	
SELECT * 
FROM students
ORDER BY id;

SELECT first_name, last_name 
FROM students;

SELECT first_name, last_name 
FROM students 
WHERE id = 2;

SELECT first_name, last_name 
FROM students 
WHERE last_name = 'Benichou' AND first_name = 'Mark';

SELECT first_name, last_name 
FROM students 
WHERE last_name = 'Benichou' OR first_name = 'Mark';

SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE '%a%';

SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE 'A%';

SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE '%a';

SELECT first_name, last_name 
FROM students 
WHERE first_name LIKE '_%a%';

SELECT first_name, last_name 
FROM students 
WHERE id = 1 OR id = 3;

SELECT *
FROM students
WHERE birth_date > '2000-01-01';