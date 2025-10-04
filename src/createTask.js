function createTask(name, dueDate, dueTime, description, priority){
    return{
        id: Date.now(),
        name,
        dueDate,
        dueTime,
        description,
        priority,
        // edit
        /* ... is a spread operator that copies all key value pairs from one object to another
            and allow for overwritting of any old values*/ 
        editTask(updates){
            return{
                ... this,
                ... updates
            };
        }
    };
}
export default createTask;