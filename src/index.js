import { projectList, addProject, addTaskToProject } from "./createProject";
import { initialDisplay, addProjectSidebar, allTaskDisplay, createTaskDiv } from "./loadDisplay";
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
    // Get the taskName, taskDetails, taskDate from newTask object
    let taskName = newTask.taskName;
    let taskDetails = newTask.taskDetails;
    let taskDate = newTask.taskDate;
    // Append this latest task to the main container
    createTaskDiv(taskName, taskDetails, taskDate);
})


// All Tasks Button
const allTaskButton = document.querySelector('.allTaskButton');
allTaskButton.addEventListener('click', () => {
    allTaskDisplay();
})