SUBMITION_PAGE = "./submitTask.html";
TASKS_PAGE = "./tasks.html";

// Get last task from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks"));
const lastTask = tasks[tasks.length - 1];

// Access task card
const taskCard = document.querySelector(".task_card");

// Task name element
let nameElement = document.createElement("h1");
nameElement.innerHTML = `Name: ${lastTask.name}`;

// Start date element
const taskStart = new Date(lastTask.startDate);
const yyyy = String(taskStart.getFullYear());
const mm = String(taskStart.getMonth() + 1).padStart(2, "0");
const dd = String(taskStart.getDate()).padStart(2, "0");
const hh = String(taskStart.getHours()).padStart(2, "0");
const MM = String(taskStart.getMinutes()).padStart(2, "0");
const ss = String(taskStart.getSeconds()).padStart(2, "0");
let startDateElement = document.createElement("h2");
startDateElement.innerHTML = `Start Date: ${dd}/${mm}/${yyyy} ${hh}:${MM}:${ss}`;

// Days left element
const taskEnd = new Date(lastTask.endDate);
let daysLeft = daysDifference(taskEnd, new Date());
if (daysLeft < 0) daysLeft = 0;
let daysLeftElement = document.createElement("h2");
daysLeftElement.innerHTML = `Days left: ${daysLeft}`;
taskCard.append(nameElement, startDateElement, daysLeftElement);

function daysDifference(date1, date2) {
  // Calculate difference in days
  const difference = date1.getTime() - date2.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
}
