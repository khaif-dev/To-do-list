import { myProjects } from "./myProjects";

function createTask(name, dueDate, dueTime, description, priority){
    return{
        id: Date.now(),
        name,
        dueDate,
        dueTime,
        description,
        priority,
    };
}

function addTaskToProject(projectId, task) {
    const project = myProjects.find(p => p.id === projectId);
    if (project) {
        project.tasks.push(task);
    }
}
export { createTask, addTaskToProject };