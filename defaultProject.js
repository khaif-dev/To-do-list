function defaultProject(){
    const projectDisplay = document.querySelector('.project-display');

    // create default content
    const projectTitle = document.createElement('h1');
    projectTitle.className = 'project-title';
    projectTitle.textContent =`Inbox`;
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
        <h2>Inbox</h2>
        <div class="project-action">
            <button>delete</button>
            <button id="edit-project">edit</button>
        </div>`;
    asideContent.appendChild(contentItems); 
}
export default defaultProject;