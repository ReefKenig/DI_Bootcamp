SUBMITION_PAGE = "./submitTask.html";
TASKS_PAGE = "./tasks.html";

// Get tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks"));

let orderedTasks = orderByStartDate(tasks);
for (let i = 0; i < orderedTasks.length; i++) {
  orderedTasks[i].id = i + 1;
}
updateLocalStorage(orderedTasks);

orderedTasks.forEach((task) => {
  displayTask(task);
});

const taskCards = document.querySelectorAll(".task_card");
taskCards.forEach((card) => {
  card.querySelector(".name").addEventListener("click", () => {
    showDescription(card.querySelector(".description"));
  });
  // card.querySelector(".progress").addEventListener("click", () => {
  //   changeStatus(card);
  // })
});

function updateLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function orderByStartDate(taskList) {
  return taskList.sort(function (a, b) {
    return new Date(a.startDate) - new Date(b.startDate);
  });
}

function displayTask(task) {
  // Create task card
  const taskCard = document.createElement("div");
  taskCard.setAttribute("id", task.id);
  const status = task.isCompleted ? "completed" : "uncompleted";
  taskCard.classList.add("task_card", status);

  // Task name element
  let nameElement = document.createElement("h1");
  nameElement.classList.add("name");
  nameElement.innerHTML = task.name;

  // Task description element- display none until click
  let descriptionElement = document.createElement("h2");
  descriptionElement.classList.add("description");
  descriptionElement.innerHTML = task.description;
  descriptionElement.style.display = "none";

  // Start date element
  const taskStart = new Date(task.startDate);
  const yyyy = String(taskStart.getFullYear());
  const mm = String(taskStart.getMonth() + 1).padStart(2, "0");
  const dd = String(taskStart.getDate()).padStart(2, "0");
  const hh = String(taskStart.getHours()).padStart(2, "0");
  const MM = String(taskStart.getMinutes()).padStart(2, "0");
  const ss = String(taskStart.getSeconds()).padStart(2, "0");
  let startDateElement = document.createElement("h2");
  startDateElement.classList.add("start_date");
  startDateElement.innerHTML = `Start Date: ${dd}/${mm}/${yyyy} ${hh}:${MM}:${ss}`;

  // Days left element
  const taskEnd = new Date(task.endDate);
  let daysLeft = daysDifference(taskEnd, new Date());
  if (daysLeft <= 0) {
    daysLeft = 0;
    taskCard.classList.add("ended");
  }
  let daysLeftElement = document.createElement("h2");
  daysLeftElement.classList.add("days_left");
  daysLeftElement.innerHTML = `Days left: ${daysLeft}`;

  // Create checkbox to mark a completed task
  let checkbox = document.createElement("input");
  checkbox.classList.add("progress");
  status === "completed"
    ? (checkbox.checked = true)
    : (checkbox.checked = false);
  checkbox.setAttribute("type", "checkbox");

  // Place all elements inside task card and put in DOM
  taskCard.append(
    nameElement,
    descriptionElement,
    startDateElement,
    daysLeftElement,
    checkbox
  );
  document.body.appendChild(taskCard);
}

function daysDifference(date1, date2) {
  // Calculate difference in days
  const difference = date1.getTime() - date2.getTime();
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
}

function showDescription(desc) {
  desc.style.display = "block";
}

function changeStatus(taskCard) {
  // Get task ID to find it
  const id = taskCard.getAttribute("id");
  const taskToChange = orderedTasks.filter((obj) => {
    return obj.id == id;
  });

  // Get checkbox element
  let checkbox = taskCard.querySelector(".progress");

  // Change task status to completed/uncompleted
  if (checkbox.checked) {
    taskToChange.isCompleted = true;
    taskCard.classList.remove("uncompleted");
    taskCard.classList.add("completed");
  } else {
    taskToChange.isCompleted = false;
    taskCard.classList.remove("completed");
    taskCard.classList.add("uncompleted");
  }
  for (let i = 0; i < orderedTasks.length; i++) {
    if (orderedTasks[i].id == id) orderedTasks[i] = taskToChange;
  }
  console.log(taskToChange);
  console.log(orderedTasks);
  updateLocalStorage(orderedTasks);
}
