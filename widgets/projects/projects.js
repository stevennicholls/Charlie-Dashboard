const projects = ['SintelFlow UI', 'Gmail Add-on', 'Make .com sync'];
const projectList = document.getElementById("projectlist");
projects.forEach(project => {
  const li = document.createElement("li");
  li.textContent = project;
  projectList.appendChild(li);
});