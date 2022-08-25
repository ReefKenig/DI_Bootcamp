-- 1
SELECT first_name AS "First Name", last_name AS "Last Name"
FROM employees;

-- 2
SELECT DISTINCT(department_id)
FROM employees;

-- 3
SELECT *
FROM employees
ORDER BY first_name desc;

-- 4
SELECT first_name, last_name, salary, salary * 0.15 AS "PF"
FROM employees;

-- 5
SELECT employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary;

-- 6
SELECT SUM(salary)
FROM employees;

-- 7
SELECT MAX(salary), MIN(salary)
FROM employees;

-- 8
SELECT AVG(salary)
FROM employees;

-- 9
SELECT COUNT(*)
FROM employees;

-- 10
SELECT UPPER(first_name)
FROM employees;

-- 11
SELECT LEFT(first_name, 3)
FROM employees;

-- 12
SELECT concat(first_name, ' ', last_name) AS "Full Name"
FROM employees;

-- 13
SELECT first_name, last_name, LENGTH(concat(first_name, ' ', last_name))
FROM employees;

-- 14
SELECT first_name
FROM employees
WHERE first_name ~ '\d';

-- 15
SELECT *
FROM employees
LIMIT 10;