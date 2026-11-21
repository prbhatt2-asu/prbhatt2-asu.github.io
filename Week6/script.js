// Interaction 1: When the page loads, show a greeting based on the time.
document.addEventListener("DOMContentLoaded", function () {
  let hour = new Date().getHours();
  let message = "Good evening!";

  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 17) {
    message = "Good afternoon!";
  }

  document.getElementById("greeting").textContent = message + " Ready to get things done?";
  updateCount();
});

// Interaction 2: Click the button to switch between light and dark mode.
document.getElementById("themeButton").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

// Interaction 3: Click into the text box to see a helpful message.
document.getElementById("taskInput").addEventListener("focus", function () {
  document.getElementById("inputTip").textContent = "Type your task, then click Add Task.";
});

// Interaction 4: Submit the form to add a new task to the list.
document.getElementById("taskForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.getElementById("taskInput");
  let task = input.value.trim();
  if (task === "") return;

  let item = document.createElement("li");
  let taskLabel = document.createElement("label");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let text = document.createElement("span");
  text.textContent = task;
  taskLabel.appendChild(checkbox);
  taskLabel.appendChild(text);
  item.appendChild(taskLabel);
  document.getElementById("taskList").appendChild(item);
  input.value = "";
  updateCount();
});

// Interaction 5: Check or uncheck any task to mark it completed.
document.getElementById("taskList").addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    event.target.closest("li").classList.toggle("done", event.target.checked);
    updateCount();
  }
});

function updateCount() {
  let total = document.querySelectorAll("#taskList input[type='checkbox']").length;
  let completed = document.querySelectorAll("#taskList input[type='checkbox']:checked").length;
  document.getElementById("taskCount").textContent = completed + " of " + total + " tasks completed";
}
