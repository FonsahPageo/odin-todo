export function CreateProjectForm (addProjectCallback) {
    const projectForm = document.createElement("form");
    projectForm.id = "create-project-form";

    const projectTitle =  document.createElement("input");
    projectTitle.type = "text";
    projectTitle.name = "projectTitle";
    projectTitle.placeholder = "Project Title";
    projectTitle.required = true;

    const projectDescription =  document.createElement("textarea");
    projectDescription.placeholder = "Describe the project";
    projectDescription.name = "projectDescription";

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.innerHTML = `Add Project <i class="fa-solid fa-plus">`;

    projectForm.append(projectTitle, projectDescription, submitBtn);

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const projectName = projectTitle.value;
        addProjectCallback(projectName);

        projectForm.reset();
        projectForm.innerHTML = '';
    });
    
    return projectForm;
};
