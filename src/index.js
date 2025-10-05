import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { myProjects } from "./myProjects";
import { createProject, addProject } from "./createProject";
import { displayProject } from "./display";
import { createTask } from "./createTask";
import { addTaskToProject } from "./createTask";
import { displayTask } from "./display";



// function to toggle modals
const modalOverlay = document.querySelector('.modal-overlay');
function toggleModal(modal){
    modal.classList.toggle('active');
    modalOverlay.classList.toggle('active');    
}

// open task modal
// when side bar add task button s clicked
const addTaskBtn = document.querySelector('.addTask');
addTaskBtn.addEventListener('click',()=>{
    const taskModal = document.getElementById('task-modal');
    toggleModal(taskModal);
});

// when add project container is clicked
const addTaskBottom = document.querySelector('.task-bottom');
addTaskBottom.addEventListener('click',()=>{
    const taskModal = document.getElementById('task-modal');
    toggleModal(taskModal);
});

// open project modal
const addProjectBtn = document.querySelector('.addProject');
addProjectBtn.addEventListener('click', ()=>{
    const projectModal = document.getElementById('project-modal');
    toggleModal(projectModal);
});


// close modal
// when x is clicked
const closeModalBtn = document.querySelectorAll('.close');
closeModalBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const targetModal = button.closest('.modal');
        toggleModal(targetModal);
    });
});

// when modal overlay is clicked
modalOverlay.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    modalOverlay.classList.toggle('active');   
});


// Default Project that displays when dom first loads
document.addEventListener('DOMContentLoaded', ()=>{
    const project = createProject("Inbox");
    addProject(project);
    currentProjectId = project.id;
    displayProject(onSelectProject);
});

// save  and display new project
const createProjectBtn = document.getElementById('create-project');
createProjectBtn.addEventListener('click', ()=>{
    // close modal
    const projectModal = document.getElementById('project-modal');
    toggleModal(projectModal);

    // create new project
    const name = document.getElementById('project-name').value.trim();
    const project = createProject(name);
    addProject(project);
    currentProjectId = project.id;
    displayProject(onSelectProject);

    // reset form
    const form = projectModal.querySelector('form');
    form.reset();
});

// define currentProjectId so we know which project task is being added and is to be displayed
let currentProjectId = null;

// callback for when a project is clicked
function onSelectProject(projectId) {
    currentProjectId = projectId;

    const project = myProjects.find(p => p.id === projectId);
    if (project) {
        displayTask(project.tasks);
    }
}

// create, save and display tasks
const createTaskBtn = document.getElementById('create-task');
createTaskBtn.addEventListener('click', () => {
    // hide the empty state
    const emptyState = document.querySelector('.empty');
    emptyState.style.display = 'none';
    //close modal
    const taskModal = document.getElementById('task-modal');
    toggleModal(taskModal);
    
    // get input from form
    const name = document.getElementById('task-name').value.trim();
    const dueDate = document.getElementById('due-date').value;
    const dueTime = document.getElementById('due-time').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;

    const task = createTask(name, dueDate, dueTime, description, priority);
    if (currentProjectId) {
        addTaskToProject(currentProjectId, task);

        const project = myProjects.find(p => p.id === currentProjectId);
        displayTask(project.tasks);
    }

    // reset form
    const form = taskModal.querySelector('form');
    form.reset();
});

