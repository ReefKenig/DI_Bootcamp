<<<<<<< HEAD
SUBMITION_PAGE = "./submitTask.html";
TASKS_PAGE = "./tasks.html";

function saveTask(newTask) {
  // Save new task to localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  !tasks ? (tasks = [newTask]) : tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const form = document.forms[0];

form.onsubmit = (event) => {
  event.preventDefault();
  const name = form.name.value;
  const description = form.description.value;
  const startDate = form.start_date.value;
  const endDate = form.end_date.value;
  const task = {
    name: name,
    description: description,
    startDate: startDate,
    endDate: endDate,
    isCompleted: false,
  };
  saveTask(task);
  location.href = TASKS_PAGE;
};
=======
SUBMITION_PAGE = "./submitTask.html";
TASKS_PAGE = "./tasks.html";

function saveTask(newTask) {
  // Save new task to localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  !tasks ? (tasks = [newTask]) : tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const form = document.forms[0];

form.onsubmit = (event) => {
  event.preventDefault();
  const name = form.name.value;
  const description = form.description.value;
  const startDate = form.start_date.value;
  const endDate = form.end_date.value;
  const task = {
    name: name,
    description: description,
    startDate: startDate,
    endDate: endDate,
    isCompleted: false,
  };
  saveTask(task);
  location.href = TASKS_PAGE;
};
>>>>>>> 03937c36f46deac63afbbaaf66480fbbca5e6107
