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

// list for added projects
const projectListContainer = document.createElement("ul");
projectListContainer.id = "projectListContainer";

// form container for projects
const projectFormContainer = document.createElement("div");
projectFormContainer.id = "projectFormContainer";
projectFormContainer.innerHTML = `<h2>All Projects</h2>`;
document.body.appendChild(projectFormContainer);

// add project button logic
const addProject = document.createElement("button");
addProject.innerHTML = `Add Project <i class="fa-solid fa-plus"></i>`;
addProject.addEventListener("click", () => {
    const projectForm = CreateProjectForm();
    projectFormContainer.innerHTML = "";
    projectFormContainer.appendChild(projectForm);
});

// form container for tasks
const taskFormContainer = document.createElement("div");
taskFormContainer.id = "taskFormContainer";
document.body.appendChild(taskFormContainer);

// add task button logic
const addTask = document.createElement("button");
addTask.innerHTML = `Add Task <i class="fa-solid fa-plus"></i>`;
addTask.addEventListener("click", () => {
    const taskForm = CreateTaskForm();
    taskFormContainer.innerHTML = "";
    taskFormContainer.appendChild(taskForm);
});

// div for the add project and add task buttons
const newItems = document.createElement("div");
newItems.className = "new-items";
newItems.appendChild(addProject);
newItems.appendChild(addTask);

sidebar.appendChild(userDetails);
sidebar.appendChild(projectFormContainer);
sidebar.appendChild(projectListContainer);
sidebar.appendChild(newItems);

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