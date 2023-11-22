const taskList = [];

function Task(taskName, taskDetails, taskDate) {
    this.taskName = taskName;
    this.taskDetails = taskDetails;
    this.taskDate = taskDate;
}

export function addTask(event) {
    event.preventDefault();
    let formData = new FormData(document.forms.newTaskForm);
    let taskName = formData.get('taskName');
    let taskDetails = formData.get('taskDetails');
    let taskDate = formData.get('taskDate');
    let newTask = new Task(taskName, taskDetails, taskDate);
    taskList.push(newTask);
}

export {taskList};