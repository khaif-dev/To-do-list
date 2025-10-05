import { myProjects } from "./myProjects";

function displayProject(){
    // display all the projects in the sidebar
    const projectContainer = document.querySelector('.projects-container');
    projectContainer.innerHTML = "";

    myProjects.forEach(project=>{
        // add project to aside content
        const contentItems = document.createElement('div');
        contentItems.className = 'content-items';
        contentItems.innerHTML = `
            <p>${project.name}</p>
            <div class="project-action">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>`;
        projectContainer.appendChild(contentItems); 

        // add eventlistener to add project to main display when clicked
        contentItems.addEventListener('click', ()=>{
            onSelectProject(project.id)
        });

    });

    //Display only last project in the array in the main display
    const projectDisplay = document.querySelector('.project-display');
    projectDisplay.innerHTML = "";

    const displayedProject = myProjects[myProjects.length -1];
    if(displayedProject){
        // create project title and append to dispay
        const projectTitle = document.createElement('h1');
        projectTitle.className = 'project-title';
        projectTitle.innerHTML =`${displayedProject.name}`;
        projectDisplay.appendChild(projectTitle); 
        
        // create task container and append to display
        const tasksContainer = document.createElement('tasks-container');
        tasksContainer.className = 'tasks-container';
        projectDisplay.appendChild(tasksContainer);

    }

}

// display Tasks
function displayTask(tasks) {
    const tasksContainer = document.querySelector('.tasks-container');
    tasksContainer.innerHTML = "";

    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-cards';
        taskCard.innerHTML = `
            <div class="task-content">
                <h1><input type="checkbox"> ${task.name}</h1>
                <p>Due : ${task.dueDate} at ${task.dueTime}</p>
                <p>${task.description}</p>
            </div>
            <div class="task-actions">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>`;
        tasksContainer.appendChild(taskCard);
    });
}


export { displayProject, displayTask };