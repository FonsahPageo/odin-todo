import "./static/styles/style.css";
import odinLogo from "./static/images/me.jpg";
import { CreateProjectForm } from "./modules/create-project";
import { CreateTaskForm } from "./modules/create-task";

let projects = [];

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
const myProjects = document.createElement("h2");
projectFormContainer.innerHTML = `<h2>My Projects</h2>`;
document.body.appendChild(projectFormContainer);

// add project button logic
const addProject = document.createElement("button");
addProject.innerHTML = `New Project <i class="fa-solid fa-plus"></i>`;
addProject.addEventListener("click", () => {
    const projectForm = CreateProjectForm(addProjectToList); 
    projectFormContainer.innerHTML = "";
    projectFormContainer.appendChild(projectForm);
});

// form container for tasks
const taskFormContainer = document.createElement("div");
taskFormContainer.id = "taskFormContainer";
document.body.appendChild(taskFormContainer);

// add task button logic
const addTask = document.createElement("button");
addTask.innerHTML = `New Task <i class="fa-solid fa-plus"></i>`;
addTask.addEventListener("click", () => {
    const taskForm = CreateTaskForm(populateProjectDropdown, addTaskToList);
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

// populate project list with projects

function addProjectToList(projectName) {
    const projectItem = document.createElement("div");
    projectItem.className = "project-item";
    projectItem.innerHTML = `
        <h3>${projectName}</h3>
        <button class="delete-project"><i class = "fa-solid fa-trash-can"></i></button>
    `;
    projectListContainer.appendChild(projectItem);

    projectItem.querySelector(".delete-project").addEventListener("click", () => {
        projectListContainer.removeChild(projectItem);
        projects = projects.filter(project => project !== projectName);
    });

    projects.push(projectName);
}

// populate tasks table with tasks

function addTaskToList(taskData) {
    const { title, description, dueDate, priority, project, status } = taskData;

    const taskRow = document.createElement("tr");
    taskRow.innerHTML = `
        <td>${title}</td>
        <td>${description}</td>
        <td>${dueDate}</td>
        <td>${priority}</td>
        <td>${project}</td>
        <td>${status}</td>
        <td>
            <button class="delete-task"><i class="fa-solid fa-trash-can"></i></button>
        </td>
    `;

    taskList.querySelector("tbody").appendChild(taskRow);

    // delete task
    const deleteButton = taskRow.querySelector(".delete-task");
    deleteButton.addEventListener("click", () => {
        taskRow.parentNode.removeChild(taskRow);
    });

    // edit task
    // const editButton = taskRow.querySelector(".edit-task");
    // editButton.addEventListener("click", () => {
    //     const form = CreateTaskForm(populateProjectDropdown, addTaskToList); 
    //     form.querySelector("input[name='taskTitle']").value = title;
    //     form.querySelector("textarea[name='taskDescription']").value = description;
    //     form.querySelector("input[name='taskDueDate']").value = dueDate;
    //     form.querySelector("select[name='taskPriority']").value = priority;
    //     form.querySelector("select[name='project']").value = project;
    //     form.querySelector("select[name='status']").value = status;

    //     taskFormContainer.innerHTML = ""; 
    //     taskFormContainer.appendChild(form); 
    // });
}

function populateProjectDropdown(selectElement) {
    selectElement.innerHTML = '';

    projects.forEach((project) => {
        const option = document.createElement('option');
        option.value = project;
        option.textContent = project;
        selectElement.appendChild(option);
    });
}
