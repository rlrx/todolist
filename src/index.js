import { projectList, addProject, addTaskToProject } from "./createProject";
import { initialDisplay, addProjectSidebar } from "./loadDisplay";
import { taskList, addTask } from "./createTask";

initialDisplay();

// Add Project Button
const addProjectDialog = document.querySelector('.addProjectDialog');
const addProjectButton = document.querySelector('.addProjectButton');
addProjectButton.addEventListener('click', () => {
    addProjectDialog.showModal();
})

const newProjectSubmit = document.querySelector('.newProjectSubmit');
newProjectSubmit.addEventListener('click', (event) => {

    let newProject = addProject(event); //new project obj
    addProjectSidebar(newProject.projectName);
})


// Add Task Submit Button
const newTaskSubmit = document.querySelector('.newTaskSubmit');
newTaskSubmit.addEventListener('click', (event) => {
    let newTask = addTask(event);
    // Link this task to the project
    addTaskToProject(newTask);
    // Append this latest task to the main container
    let mainContentContainer = document.querySelector('.mainContentContainer');
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');
    taskDiv.textContent = `${newTask.taskName}`;
    mainContentContainer.appendChild(taskDiv);
})
