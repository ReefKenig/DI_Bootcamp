SUBMITION_PAGE = "./submitTask.html";
TASKS_PAGE = "./tasks.html";

function saveTask(newTask) {
  // Save new task to localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  !tasks ? (tasks = [newTask]) : tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const name = document.getElementById("name");
const description = document.getElementById("description");
const startDate = document.getElementById("start_date");
const endDate = document.getElementById("end_date");

document.forms[0].onsubmit = function (event) {
  event.preventDefault();
  console.log("I am working!!");
  const task = {
    name: name.value,
    description: description.value,
    startDate: new Date(startDate.value),
    endDate: new Date(endDate.value),
    isCompleted: false,
  };
  saveTask(task);
  location.href = TASKS_PAGE;
};
// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   const task = {
//     name: name.value,
//     description: description.value,
//     startDate: new Date(startDate.value),
//     endDate: new Date(endDate.value),
//     isCompleted: false,
//   };
//   saveTask(task);
// });
