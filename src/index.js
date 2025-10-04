import "./style.css";
import defaultProject from "../defaultProject";
import createProject from "../createProject";
import createTask from "../createTask";

document.addEventListener('DOMContentLoaded',()=>{
    defaultProject();
});
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

// // edit task
// const editTaskBtn = document.querySelector('.edit-task');
// editTaskBtn.addEventListener('click', () =>{
//     const taskModal = document.getElementById('task-modal');
//     toggleModal(taskModal);
// });

// open project modal
const addProject = document.querySelector('.addProject');
addProject.addEventListener('click', ()=>{
    const projectModal = document.getElementById('project-modal');
    toggleModal(projectModal);
});

// edit project
const editProjectBtn = document.querySelectorAll('#edit-project');
editProjectBtn.forEach(button => {
    button.addEventListener('click', () => {
        const projectModal = document.getElementById('project-modal');
        toggleModal(projectModal)        
    });
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

// save  and display project
const createProjectBtn = document.getElementById('create-project');
createProjectBtn.addEventListener('click', ()=>{
    // hide the empty state
    const empyState = document.querySelector('.empty');
    empyState.style.display = 'none';
    //close modal
    const projectModal = document.getElementById('project-modal');
    toggleModal(projectModal);
    // display project
    displayProject();  
    // reset form
    const form = projectModal.querySelector('form');
    form.reset();
  
});

// function to display project
function displayProject(){
    createProject();

}

// save and display tasks
const createTaskBtn = document.getElementById('create-task');
createTaskBtn.addEventListener('click', () => {
    // hide the empty state
    const empyState = document.querySelector('.empty');
    empyState.style.display = 'none';
    //close modal
    const taskModal = document.getElementById('task-modal');
    toggleModal(taskModal);
    // display project
    displayTask(); 
    // reset form
    const form = taskModal.querySelector('form');
    form.reset();
});

// function to display tasks
function displayTask(){
    createTask();
}