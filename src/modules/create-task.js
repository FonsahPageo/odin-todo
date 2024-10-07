export function CreateTaskForm(populateProjectDropdown, addTaskToList) {
    const taskForm = document.createElement("form");

    const taskTitle = document.createElement("input");
    taskTitle.type = "text";
    taskTitle.name = "taskTitle";
    taskTitle.placeholder = "Task Title";
    taskTitle.required = true;

    const taskDescription = document.createElement("textarea");
    taskDescription.name = "taskDescription";
    taskDescription.placeholder = "Task Description";
    taskDescription.required = true;

    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.name = "taskDueDate";
    dueDate.required = true;

    const taskPriority = document.createElement("select");
    taskPriority.name = "taskPriority";
    taskPriority.required = true;
    const priorities = ['Task Priority', 'Low', 'Medium', 'High'];
    priorities.forEach((priority) => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        taskPriority.appendChild(option);
    });

    const projectDropdown = document.createElement("select");
    projectDropdown.name = "project";
    populateProjectDropdown(projectDropdown);
    projectDropdown.required = true;

    const taskStatus = document.createElement("select");
    taskStatus.name = "taskStatus";
    const statuses = ['Task Status', 'Not Started', 'In Progress', 'Completed'];
    statuses.forEach((status) => {
        const option = document.createElement('option');
        option.value = status;
        option.textContent = status;
        taskStatus.appendChild(option);
    });

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.innerText = "Add Task";

    taskForm.append(taskTitle, taskDescription, dueDate, taskPriority, projectDropdown, taskStatus, submitBtn);

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const taskData = {
            title: taskTitle.value,
            description: taskDescription.value,
            dueDate: dueDate.value,
            priority: taskPriority.value,
            project: projectDropdown.value,
            status: taskStatus.value
        };

        addTaskToList(taskData);

        taskForm.reset();
        taskForm.innerHTML = '';
    });

    return taskForm;
};