function createProject(){
    const myProjects = [];

    // get values from form
    const projectName = document.getElementById('project-name').value;

    // object project
    const project ={
        name: projectName
    }
    myProjects.push(project);

    // display project
    const projectDisplay = document.querySelector('.project-display');
    // clear display before appending
    projectDisplay.innerHTML = "";
    // create project title and append to dispay
    const projectTitle = document.createElement('h1');
    projectTitle.className = 'project-title';
    projectTitle.innerHTML =`${project.name}`;
    projectDisplay.appendChild(projectTitle); 
    
    // create task container and append to display
    const tasksContainer = document.createElement('tasks-container');
    tasksContainer.className = 'tasks-container';
    projectDisplay.appendChild(tasksContainer);

    // add project to aside content
    const asideContent = document.querySelector('.aside-content');
    const contentItems = document.createElement('div');
    contentItems.className = 'content-items';
    contentItems.innerHTML = `
        <h2>${project.name}</h2>
        <div class="project-action">
            <button>delete</button>
            <button id="edit-project">edit</button>
        </div>`;
    asideContent.appendChild(contentItems); 

}

export default createProject;