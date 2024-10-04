import "./static/styles/style.css";
import odinLogo from "./static/images/me.jpg";
import { CreateProjectForm } from "./modules/create-project";
import { CreateTaskForm } from "./modules/create-task";

// header
const todoHeader = document.createElement("header");
todoHeader.innerHTML = "My To-do List";
document.body.prepend(todoHeader);

// sidebar
const sidebar = document.createElement("div");
sidebar.id = "sidebar";

const userDetails = document.createElement("div");
userDetails.id = "userdetails";

const userLogo = document.createElement("img");
userLogo.src = odinLogo;
userLogo.className = "user-logo"
userLogo.alt = "Odin Logo";

const userName = document.createElement("h2");
userName.innerHTML = "AshPrince";

userDetails.appendChild(userLogo);
userDetails.appendChild(userName);

const projectFormContainer = document.createElement("div");
projectFormContainer.id = "projectFormContainer";
projectFormContainer.innerHTML = `<h2>All Projects</h2>`;

// const projectList = document.createElement("ul");
// projectList.id = "all-projects";

const addProject = document.createElement("button");
addProject.innerHTML = `Add Project <i class="fa-solid fa-plus"></i>`;
addProject.addEventListener("click", () => {
    const projectForm = CreateProjectForm();
    projectFormContainer.innerHTML = "";
    projectFormContainer.appendChild(projectForm);
});

document.body.appendChild(projectFormContainer);

const taskFormContainer = document.createElement("div");
taskFormContainer.id = "taskFormContainer";

document.body.appendChild(taskFormContainer);

const addTask = document.createElement("button");
addTask.innerHTML = `Add Task <i class="fa-solid fa-plus"></i>`;
addTask.addEventListener("click", () => {
    const taskForm = CreateTaskForm();
    taskFormContainer.innerHTML = "";
    taskFormContainer.appendChild(taskForm);
});

projectFormContainer.appendChild(addProject);
projectFormContainer.appendChild(addTask);

sidebar.appendChild(userDetails);
sidebar.appendChild(projectFormContainer);

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
       
    </tbody>
`;

main.appendChild(taskList);
document.body.appendChild(main);

// const todoFooter = document.createElement("footer");
// const footerMessage = document.createElement("p");
// footerMessage.innerHTML = "Created by Fonsah Pageo. Copyrights &copy; 2024";
// todoFooter.appendChild(footerMessage);
// document.body.appendChild(todoFooter);