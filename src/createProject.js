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
    projectList.push(newProject);
    return newProject;
}

function addTaskToProject(newTask) {
    let projectName = document.querySelector('.mainContentTitle').textContent;
    // Find the project based on projectName from projectList
    const project = projectList.find(obj => obj.projectName === projectName);
    console.log("Task added to project Task List");
    project.projectTaskList.push(newTask);
    console.log(project.projectTaskList);
}

// get the task list of project object based on task name
function getTaskList(projectName) {
    const project = projectList.find(obj => obj.projectName === projectName);
    console.log(project.projectTaskList);
    return project.projectTaskList;
}

// iterate through all project objects and concatenate all their projectTaskList
function getAllTasks() {
    let taskList = [];
    for(let proj of projectList) {
        taskList = taskList.concat(proj.projectTaskList);
    }
    return taskList;
}







export {projectList, addProject, addTaskToProject, getTaskList, getAllTasks};