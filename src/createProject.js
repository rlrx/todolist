const projectList = [];


function Project(projectName) {
    this.projectName = projectName;
    this.projectTaskList = [];
}

// creates a project object based on project name and add the object to projectList array
function addProject(event) {
    event.preventDefault();
    let formData = new FormData(document.forms.newProjectForm);
    let projectName = formData.get('projectName');
    let newProject = new Project(projectName);
    let projectList = getLocalStorageProjectList();
    projectList.push(newProject);
    // update local storage projectList
    updateLocalStorage(projectList);
    return newProject;
}

function addTaskToProject(newTask) {
    let projectName = document.querySelector('.mainContentTitle').textContent;
    // Find the project based on projectName from projectList
    let projectList = getLocalStorageProjectList();
    const project = projectList.find(obj => obj.projectName === projectName);
    project.projectTaskList.push(newTask);
    // Update the projectList with new project with included task
    let projectIndex = projectList.findIndex(obj => obj.projectName === projectName);
    projectList[projectIndex] = project;
    // update local storage projectList
    updateLocalStorage(projectList);
    console.log(project.projectTaskList);
}

// get the task list of a project object based on task name
function getTaskList(projectName) {
    // get projectList based on what is in localStorage
    let projectList = getLocalStorageProjectList();
    const project = projectList.find(obj => obj.projectName === projectName);
    console.log(project.projectTaskList);
    return project.projectTaskList;
}

// bug here
// createProject.js:50 Uncaught TypeError: Cannot read properties of undefined (reading 'projectTaskList')
// at removeTaskFromProject (createProject.js:50:1)
function removeTaskFromProject(projectName, taskTitleToBeDeleted) {
    let projectList = getLocalStorageProjectList();
    const projectIndex = projectList.findIndex(obj => obj.projectName === projectName);
    const project = projectList.find(obj => obj.projectName === projectName);
    console.log(project);
    let updatedProjectTaskList = project.projectTaskList.filter(task => task.taskName !== taskTitleToBeDeleted);
    let updatedAttribute = {projectTaskList: updatedProjectTaskList};
    if(projectIndex !== -1) {
        Object.assign(projectList[projectIndex], updatedAttribute);
    }
    updateLocalStorage(projectList);
}

// iterate through all project objects and concatenate all their projectTaskList
function getAllTasks() {
    let taskList = [];
    let projectList = getLocalStorageProjectList();
    for(let proj of projectList) {
        taskList = taskList.concat(proj.projectTaskList);
    }
    return taskList;
}

// iterate through all project objects to find the project which holds a task
function getProjectNameByTask(taskName) {
    let projectName;
    let projectList = getLocalStorageProjectList();
    for(let proj of projectList) {
        for(let task of proj.projectTaskList) {
            if(task.taskName === taskName) {
                console.log(task);
                projectName = proj.projectName;
            }
        }
    }
    return projectName;
}

function deleteProject(projectName) {
    let projectList = getLocalStorageProjectList();
    const projectIndex = projectList.findIndex(obj => obj.projectName === projectName);
    projectList.splice(projectIndex, 1);
    // update local storage projectList
    updateLocalStorage(projectList);
}

function updateLocalStorage(projectList) {
    // Store the JSON string in localStorage under a specific key
    localStorage.setItem('projectListKey', JSON.stringify(projectList));
}

function getLocalStorageProjectList(){
    let projectListString = localStorage.getItem('projectListKey');
    let projectList = JSON.parse(projectListString); // List of projectObjects
    return projectList;
}






export {projectList, addProject, addTaskToProject, getTaskList, getAllTasks, getProjectNameByTask, removeTaskFromProject, deleteProject, getLocalStorageProjectList};