function createTask(){
    const myTasks = [];
    // get user input
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    const dueTime = document.getElementById('due-time').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;

    const task = {
        name: taskName,
        dueDate: dueDate,
        dueTime: dueTime,
        description: description,
        priority: priority
    }

    myTasks.push(task);
    
    const tasksContainer = document.querySelector('.tasks-container');
    // create task cards
    const taskCard = document.createElement('div');
    taskCard.className = 'task-cards';
    taskCard.innerHTML = `
        <h1><input type="checkbox"> ${task.name}</h1>
        <p>${task.dueDate}</p>
        <p>${task.description}</p>
        <div class="task-actions">
            <button class="edit-task">edit</button>
            <button class="delete-task">delete</button>
        </div>`;
    tasksContainer.appendChild(taskCard);    
}

export default createTask;