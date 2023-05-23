var clearTasksButton = document.getElementById("clearTasksButton");
var clearStorageButton = document.getElementById("clearStorageButton");

clearTasksButton.addEventListener("click", function() {
  var highPriorityList = document.getElementById("highPriorityList");
  var normalPriorityList = document.getElementById("normalPriorityList");
  highPriorityList.innerHTML = "";
  normalPriorityList.innerHTML = "";

  clearStoredTodos();
});

clearStorageButton.addEventListener("click", function() {
  localStorage.clear();
});

document.getElementById("todoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var task = document.getElementById("task").value;
  var priority = document.getElementById("priority").value;
  var details = document.getElementById("details").value;

  var todo = {
    task: task,
    priority: priority,
    details: details,
    done: false
  };

  if (todo.priority === "high") {
    var highPriorityList = document.getElementById("highPriorityList");
    var listItem = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
        todo.done = true;
      } else {
        taskText.style.textDecoration = "none";
        todo.done = false;
      }
    });

    var taskText = document.createElement("span");
    taskText.innerHTML = "Task: " + todo.task + "<br/>";
    var detailsText = document.createElement("span");
    detailsText.innerHTML = "Details: " + todo.details;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(detailsText);
    highPriorityList.appendChild(listItem);
  } else {
    var normalPriorityList = document.getElementById("normalPriorityList");
    var listItem = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
        todo.done = true;
      } else {
        taskText.style.textDecoration = "none";
        todo.done = false;
      }
    });

    var taskText = document.createElement("span");
    taskText.innerHTML = "Task: " + todo.task + "<br/>";
    var detailsText = document.createElement("span");
    detailsText.innerHTML = "Details: " + todo.details;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(detailsText);
    normalPriorityList.appendChild(listItem);
  }

  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  document.getElementById("todoForm").reset();
});

window.addEventListener("DOMContentLoaded", function() {
  var todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach(function(todo) {
    if (todo.priority === "high") {
      var highPriorityList = document.getElementById("highPriorityList");
      var listItem = document.createElement("li");

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
          taskText.style.textDecoration = "line-through";
        } else {
          taskText.style.textDecoration = "none";
        }
      });

      var taskText = document.createElement("span");
      taskText.innerHTML = "Task: " + todo.task + "<br/>";
      var detailsText = document.createElement("span");
      detailsText.innerHTML = "Details: " + todo.details;

      checkbox.checked = todo.done;

      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      listItem.appendChild(detailsText);
      highPriorityList.appendChild(listItem);
    } else {
      var normalPriorityList = document.getElementById("normalPriorityList");
      var listItem = document.createElement("li");

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
          taskText.style.textDecoration = "line-through";
        } else {
          taskText.style.textDecoration = "none";
        }
      });

      var taskText = document.createElement("span");
      taskText.innerHTML = "Task: " + todo.task + "<br/>";
      var detailsText = document.createElement("span");
      detailsText.innerHTML = "Details: " + todo.details;

      checkbox.checked = todo.done;

      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      listItem.appendChild(detailsText);
      normalPriorityList.appendChild(listItem);
    }
  });
});