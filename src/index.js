import "./static/styles/style.css";
import odinLogo from "./static/images/me.jpg";

const todoHeader = document.createElement("header");
todoHeader.innerHTML = "My To-do List";
document.body.prepend(todoHeader);

const sidebar = document.createElement("div");
sidebar.id = "sidebar";

const userDetails = document.createElement("div");
userDetails.id = "userdetails";

const userLogo = document.createElement("img");
userLogo.src = odinLogo;
userLogo.className = "user-logo"
userLogo.alt = "Odin Logo";
console.log(userLogo);

const userName = document.createElement("h2");
userName.innerHTML = "AshPrince";

userDetails.appendChild(userLogo);
userDetails.appendChild(userName);

const projectDetails = document.createElement("div");
const showProjects = document.createElement("h2");
showProjects.innerHTML = "All Projects";
projectDetails.appendChild(showProjects);

const projectList = document.createElement("ul");
projectList.id = "all-projects";
projectList.innerHTML = `
  <li><a href="#">Project 1</a> <i class="fa-solid fa-delete-left"></i></li>
  <li><a href="#">Project 2</a> <i class="fa-solid fa-delete-left"></i></li>
  <li><a href="#">Project 3</a> <i class="fa-solid fa-delete-left"></i></li>    
`;
projectDetails.appendChild(projectList);

const addProject = document.createElement("button");
addProject.innerHTML = `Add Project <i class="fa-solid fa-plus"></i>`;

const addTask = document.createElement("button");
addTask.innerHTML = `Add Task <i class="fa-solid fa-plus"></i>`;

projectDetails.appendChild(addProject);
projectDetails.appendChild(addTask);

sidebar.appendChild(userDetails);
sidebar.appendChild(projectDetails);

document.body.appendChild(sidebar);

const main = document.createElement("div");
main.id = "main";
const taskList = document.createElement("table");
taskList.id = "taskList";
taskList.innerHTML = `
    <thead>
        <tr><th>Title</th><th>Description</th><th>Due Date</th><th>Priority</th><th>Project</th><th>Status</th><th>Action</th></tr>
    </thead>
    <tbody>
        <tr><td>Task 1</td><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td><td>2024-01-01</td><td>High<td>Project 1</td></td><td>Pending</td><td><button>Delete <i class="fa-solid fa-delete-left"></i></button> </td></tr>
        <tr><td>Task 2</td><td>Duis ac turpis ac ipsum imperdiet sodales.</td><td>2024-02-01</td><td>Medium</td><td>Project 2</td><td>Completed</td><td><button>Delete <i class="fa-solid fa-delete-left"></i></button></td></tr>
        <tr><td>Task 3</td><td>Nulla facilisi. Nulla facilisi.</td><td>2024-03-01</td><td>Low</td><td>Project 3</td><td>Completed</td><td><button>Delete <i class="fa-solid fa-delete-left"></i></button></td></tr>
    </tbody>
`;

main.appendChild(taskList);
document.body.appendChild(main);

// const todoFooter = document.createElement("footer");
// const footerMessage = document.createElement("p");
// footerMessage.innerHTML = "Created by Fonsah Pageo. Copyrights &copy; 2024";
// todoFooter.appendChild(footerMessage);
// document.body.appendChild(todoFooter);