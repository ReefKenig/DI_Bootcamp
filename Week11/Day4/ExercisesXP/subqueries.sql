-- 1
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (
    SELECT salary
    FROM employees
    WHERE last_name = 'Bell'
);

-- 2
SELECT first_name, last_name
FROM employees
WHERE manager_id IN(
	SELECT manager_id
	FROM employees
	WHERE department_id IN(
		SELECT department_id 
		FROM departments
		WHERE location_id IN(
			SELECT location_id 
			FROM locations
			WHERE country_id = 'US'
		)
	)
);

-- 3
SELECT first_name, last_name
FROM employees
WHERE employee_id IN(
	SELECT DISTINCT manager_id
	FROM employees
);

-- 4
SELECT first_name, last_name
FROM employees
WHERE salary > (
	SELECT AVG(salary)
	FROM employees
);

-- 5
SELECT first_name, last_name, job_id, salary
FROM employees e
WHERE salary = (
	SELECT min_salary
	FROM jobs j
	WHERE e.job_id = j.job_id
);

-- 6
SELECT first_name, last_name
FROM employees
WHERE employee_id NOT IN(
	SELECT DISTINCT manager_id
	FROM employees
	WHERE manager_id IS NOT null
);

-- 7
SELECT employee_id, first_name, last_name, salary
FROM employees AS e
WHERE salary > (
	SELECT AVG(salary)
	FROM employees
	WHERE department_id = e.department_id
);

-- 8
SELECT DISTINCT salary
FROM employees e1
WHERE 5 = (
	SELECT COUNT(DISTINCT salary)
	FROM employees e2
	WHERE e2.salary >= e1.salary
);

-- 9
SELECT DISTINCT salary
FROM employees e1
WHERE 4 = (
	SELECT COUNT(DISTINCT salary)
	FROM employees e2
	WHERE e2.salary <= e1.salary
);

-- 10
SELECT department_name, department_id
FROM departments
WHERE department_id NOT IN(
	SELECT DISTINCT department_id
	FROM employees
);