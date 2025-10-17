let tasksDb = [];

function addTask() {
  const taskInput = document.getElementById("todo-input");
  const taskDate = document.getElementById("todo-date");

  if (validateInput(taskInput.value, taskDate.value)) {
    const newTask = {
      task: taskInput.value,
      date: taskDate.value
    };

    tasksDb.push(newTask);
    renderTasks();

        // reset input
        taskInput.value = "";
        taskDate.value = "";
      }
    }

    function renderTasks(list = tasksDb) {
      const taskList = document.getElementById("task-list");
      taskList.innerHTML = "";

      if (list.length === 0) {
        taskList.innerHTML = "<li>No tasks added yet</li>";
        return;
      }

      list.forEach(taskObj => {
        taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}</li>`;
      });
    }

    function deleteAllTasks() {
      if (confirm("Are you sure you want to delete all tasks?")) {
        tasksDb = [];
        renderTasks();
      }
    }

    function filterTasks() {
      const filterDate = prompt("Enter date to filter (YYYY-MM-DD):");
      if (filterDate === null || filterDate.trim() === "") {
        renderTasks();
        return;
      }

      const filtered = tasksDb.filter(task => task.date === filterDate);
      if (filtered.length === 0) {
        alert("No tasks found for that date.");
      }
      renderTasks(filtered);
    }

    function validateInput(task, date) {
      if (task === "" || date === "") {
        alert("Please enter both task and due date.");
        return false;
      }
      return true;
    }

    // Initial render
    renderTasks();