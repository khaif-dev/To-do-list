import { myProjects } from "./myProjects"; 

function createProject(name){
    return{
        id: Date.now(),
        name,
        tasks: []
    };

}

function addProject(project){
    myProjects.push(project);
}

export { createProject, addProject};