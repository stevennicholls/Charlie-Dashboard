const tasks = ['Email John', 'Update dashboard', 'Prepare slides'];
const taskList = document.getElementById("tasklist");
tasks.forEach(task => {
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
});