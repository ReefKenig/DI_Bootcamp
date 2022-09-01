-- 1
UPDATE employees
SET phone_number = 999
WHERE phone_number LIKE '%124%';

-- 2
SELECT *
FROM employees
WHERE LENGTH(first_name) >= 8;

-- 3
SELECT concat(
		UPPER(LEFT(first_name, 1)),
		UPPER(last_name),
	SUBSTRING(
		email,
		'@.*'
	))
	AS new_mail
FROM employees;

-- 4
SELECT employee_id, LEFT(email, -3)
FROM employees;

-- 5
SELECT split_part(job_title, ' ', 1) AS "First job word"
FROM jobs;

-- 6
SELECT first_name, LENGTH(first_name) name_length
FROM employees
WHERE first_name ~ '^[AJM]'
ORDER BY first_name;

-- 7
SELECT first_name, concat(salary, '$') "SALARY"
FROM employees;