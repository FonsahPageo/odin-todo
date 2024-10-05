export const CreateTaskForm = () => {
    const taskForm = document.createElement("form");
    taskForm.id = "create-task-form";
    taskForm.innerHTML = `
        <label for="taskTitle">Task Title:</label>
        <input type="text" id="taskTitle" name="taskTitle" required>
        
        <label for="taskDescription">Task Description:</label>
        <textarea id="taskDescription" name="taskDescription" required></textarea>

        <label for="taskDueDate">Due Date:</label>
        <input type="date" id="taskDueDate" name="taskDueDate" required>

        <label for="taskPriority">Priority:</label>
        <select id="taskPriority" name="taskPriority" required>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>

        <label for="taskProject">Project:</label>
        <select id="taskProject" name="taskProject" required>
            <option value="Project 1">Project 1</option>
            <option value="Project 2">Project 2</option>
            <option value="Project 3">Project 3</option>
        </select>

        <button type="submit">Add Task</button>
    `;

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskTitle = document.getElementById("taskTitle").value;
        const taskDescription = document.getElementById("taskDescription").value;
        const taskDueDate = document.getElementById("taskDueDate").value;
        const taskPriority = document.getElementById("taskPriority").value;
        const taskProject = document.getElementById("taskProject").value;

        if (taskTitle && taskDescription && taskDueDate){
            addTaskToList(taskTitle, taskDescription, taskDueDate, taskPriority, taskProject);
            document.getElementById("taskFormContainer").innerHTML = "";
            taskForm.reset();
        }
    });

    return taskForm;
};

const addTaskToList = (title, description, dueDate, priority, project) => {
    const taskListBody = document.querySelector("#taskList tbody");
    const newTaskRow = document.createElement("tr");

    newTaskRow.innerHTML = `
        <td>${title}</td>
        <td>${description}</td>
        <td>${dueDate}</td>
        <td>${priority}</td>
        <td>${project}</td>
        <td>Pending</td>
        <td><button>Delete <i class = "fa-solid fa-delete-left"></i></button></td>
    `;

    taskListBody.appendChild(newTaskRow);
};