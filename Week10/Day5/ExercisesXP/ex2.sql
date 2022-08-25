-- Ex 1
SELECT first_name, last_name, salary
FROM employees
WHERE salary BETWEEN 10000 AND 15000;

-- Ex 2
SELECT first_name, last_name, hire_date
FROM employees
WHERE EXTRACT(YEAR FROM hire_date) = 1987;

-- Ex 3
SELECT first_name
FROM employees
WHERE first_name ~ 'c' AND first_name ~ 'e';

-- Ex 4
SELECT last_name, jobs.job_title, salary
FROM employees
JOIN jobs
ON employees.job_id = jobs.job_id
WHERE 
	jobs.job_title != 'Programmer'
	AND jobs.job_title != 'Shipping Clerk'
	AND salary NOT IN (4500, 10000, 15000);

-- Ex 5
SELECT last_name
FROM employees
WHERE LENGTH(last_name) = 6;

-- Ex 6
SELECT last_name
FROM employees
WHERE POSITION('e' IN last_name) = 3;

-- Ex 7
SELECT job_title
FROM jobs
RIGHT JOIN employees
ON employees.job_id = jobs.job_id;

-- Ex 8
SELECT *
FROM employees
WHERE last_name IN ('Jones', 'Blake', 'Scott', 'King', 'Ford');