let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span onclick="toggleTask(${index})" class="${task.completed ? "completed" : ""}">
        ${task.text}
      </span>
      <button onclick="deleteTask(${index})">❌</button>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value === "") return;

  tasks.push({ text: input.value, completed: false });
  input.value = "";

  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  showTasks();
}

// Load tasks on start
showTasks();