import { myProjects } from "./myProjects";
import { toggleModal } from ".";

function displayProject(){
    const projectContainer = document.querySelector('.projects-container');
    projectContainer.innerHTML = "";

    // on the sidebar list
    myProjects.forEach(project=>{
        const contentItems = document.createElement('div');
        contentItems.className = 'content-items';
        contentItems.innerHTML = `
            <p class= "edit-project">${project.name}</p>
            <div class="project-action">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>`;
        projectContainer.appendChild(contentItems); 

        //on the main display
        // update project tilte
        const projectTitle = document.querySelector('.project-title');
        projectTitle.textContent = project.name;

        // clear the tasks continer
        const tasksContainer = document.querySelector('.tasks-container');
        tasksContainer.innerHTML = '';  
        
        // select project
        contentItems.project = project;
        contentItems.addEventListener('click', () =>{
            // clear project title and tasks container
            projectTitle.textContent = ''; 
            tasksContainer.innerHTML = '';

            // retrieve the selected heading and title
            const selectedProject = project;
            console.log(selectedProject);
            if(selectedProject){                    
                projectTitle.textContent = selectedProject.name;
                displayTasks(selectedProject.tasks);
            }     

        });

        // delete project
        const deleteProjectBtn = contentItems.querySelector('.fa-trash');         
        deleteProjectBtn.addEventListener('click',(e) => {
            deleteProjectBtn.project = project; //ties each button directly to the project
            e.stopPropagation();
            const selectedProjectId = project.id;
            const index = myProjects.findIndex(p => p.id === selectedProjectId);
            if(index >= 0){
                myProjects.splice(index, 1);
                projectTitle.textContent = '';
            }
            displayProject();
        }); 
        
        // edit project
        const editProjectBtn = contentItems.querySelector('.fa-pen-to-square');
        editProjectBtn.addEventListener('click', (e)=>{
            e.stopPropagation();
            const selectedProjectId = project.id;
            // open modal
            const projectModal = document.querySelector('#project-modal');
            toggleModal(projectModal);
            document.getElementById('project-name').value = project.name;

            // target project
            projectModal.dataset.editingProjectId = project.id;
                      
        });
    });            

}

function displayTasks(tasks){
    const tasksContainer = document.querySelector('.tasks-container');
    tasksContainer.innerHTML = '';

    // create a task card for each task
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

            // delete task
            const deleteTaskBtn = taskCard.querySelector('.fa-trash');
            deleteTaskBtn.addEventListener('click', () => {
                deleteTaskBtn.task = task;
                const selectedTask = task;
                console.log(selectedTask);
                const selectedTaskId = task.id;
                console.log(selectedTaskId);
                const index = tasks.findIndex(p => p.id === selectedTaskId);
                if(index >= 0){
                    tasks.splice(index, 1);                  
                }
                  displayTasks(tasks);
            });

            // edit task
            const editTaskBtn = taskCard.querySelector('.fa-pen-to-square');
            editTaskBtn.addEventListener('click',()=>{
                const taskModal = document.querySelector('#task-modal');
                toggleModal(taskModal);

                    // display modal with existing data
                    document.getElementById('task-name').value = task.name;
                    document.getElementById('due-date').value = task.dueDate;
                    document.getElementById('due-time').value = task.dueTime;
                    document.getElementById('description').value = task.description;
                    document.getElementById('priority').value = task.priority;

                    // s
            });
    
        tasksContainer.appendChild(taskCard);    
    });   

}

export { displayProject, displayTasks };
