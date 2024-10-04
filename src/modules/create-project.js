export const CreateProjectForm = () => {
    const projectForm = document.createElement("form");
    projectForm.id = "create-project-form";
    projectForm.innerHTML = `
        <label for="projectTitle">Project Title:</label>
        <input type="text" id="projectTitle" name"projectTitle" required><br>

        <label for="projectDescription">Description:</label>
        <textarea id="projecDescription" required></textarea><br>

        <button type = "submit">Add Project</button>
    `;

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const projectTitle = document.getElementById("projectTitle").value;

        if(projectTitle) {
            addProjectToList(projectTitle);
            projectForm.reset();
        }
    });
    
    return projectForm;
};

const addProjectToList = (title) => {
    const projectList = document.querySelector("#projectFormContainer");
    const newProject = document.createElement("li");
    newProject.innerHTML = `<a href="#">${title}</a> <i class="fa-solid fa-delete-left"</i>`;
    projectList.appendChild(newProject);
};