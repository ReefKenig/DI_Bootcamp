-- 1
SELECT
	d.location_id,
	l.street_address,
	l.city,
	l.state_province,
	c.country_name
FROM departments d
JOIN locations l ON d.location_id = l.location_id
JOIN countries c ON l.country_id = c.country_id;

-- 2
SELECT
	e.first_name,
	e.last_name,
	e.department_id,
	d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;

-- 3
SELECT
	e.first_name,
	e.last_name,
	e.job_id,
	d.department_name,
	e.employee_id
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON d.location_id = l.location_id
WHERE l.city = 'London';

-- 4
SELECT
	CONCAT(e1.employee_id, ' ', e1.last_name) AS employee,
	CONCAT(e2.employee_id, ' ', e2.last_name) AS manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.employee_id;

-- 5
SELECT
	e.employee_id,
	e.first_name,
	e.last_name,
	d.department_name,
	d.department_id
FROM employees e
JOIN departments d ON e.department_id = d.department_id;

-- 6
SELECT
	e.employee_id,
	j.job_title,
	CURRENT_DATE - e.hire_date AS "Working days"
FROM employees e
LEFT OUTER JOIN departments d ON e.department_id = d.department_id
LEFT OUTER JOIN jobs j ON e.job_id = j.job_id
WHERE d.department_id = 9;

-- 7
SELECT
	d.department_name,
	e.employee_id,
	l.city
FROM departments d
JOIN employees e ON d.department_id = e.department_id
JOIN locations l ON d.location_id = l.location_id
WHERE e.employee_id IN(
	SELECT manager_id
	FROM employees
);

-- 8
SELECT j.job_title, AVG(e.salary)
FROM employees e
JOIN jobs j ON e.job_id = j.job_id
GROUP BY j.job_title;

-- 9
SELECT
	d.department_name,
	e.first_name,
	e.last_name,
	e.hire_date,
	e.salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.employee_id IN(
	SELECT manager_id
	FROM employees
)
AND CURRENT_DATE - e.hire_date > 365 * 15;