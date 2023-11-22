import { projectList, addProject } from "./createProject";
import { initialDisplay, addProjectSidebar } from "./loadDisplay";

initialDisplay();

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
