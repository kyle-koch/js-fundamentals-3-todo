console.log('My code is running');

//let taskEntry = prompt('Your task:', 'task here...');

document.getElementById("todoForm").addEventListener("submit", function(event) {event.preventDefault(); // Prevent form submission

var task = document.getElementById("task").value;
var priority = document.getElementById("priority").value;
var details = document.getElementById("details").value;

var todo = {
  task: task,
  priority: priority,
  details: details
};

if (todo.priority === "high") {
    var highPriorityList = document.getElementById("highPriorityList");
    var listItem = document.createElement("li");
    listItem.textContent = "Task: " + todo.task + " | Priority: " + todo.priority + " | Details: " + todo.details;
    highPriorityList.appendChild(listItem);
  } else {
    var normalPriorityList = document.getElementById("normalPriorityList");
    var listItem = document.createElement("li");
    listItem.textContent = "Task: " + todo.task + " | Priority: " + todo.priority + " | Details: " + todo.details;
    normalPriorityList.appendChild(listItem);
  }

document.getElementById("todoForm").reset();
});