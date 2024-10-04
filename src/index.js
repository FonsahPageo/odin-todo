import "./static/styles/style.css";
import odinLogo from "./static/images/me.jpg";

// const todoDiv = document.createElement("div");
// todoDiv.id = "todo";

const todoHeader = document.createElement("header");
todoHeader.id = "todo-header"
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
  <li><a href="#">Project 1</a></li>
  <li><a href="#">Project 2</a></li>
  <li><a href="#">Project 3</a></li>    
`;
projectDetails.appendChild(projectList);
const addProject = document.createElement("button");
addProject.innerHTML = "Add Project";

projectDetails.appendChild(addProject);

sidebar.appendChild(userDetails);
sidebar.appendChild(projectDetails);

document.body.appendChild(sidebar);