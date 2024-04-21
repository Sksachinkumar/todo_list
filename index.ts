import inquirer from "inquirer"

let  todos = [];
let conditions = true;

while(conditions){
let addTask =  await inquirer.prompt(
    [
        {
            name: 'todo',
            type:'input',
            message :"what you want to add you Todo ?"
        },

        {
            name :'addMore',
            type:'confirm',
            message :"what  you want to add more ?",
            default : 'false'
        } 
        
    ]
)
console.log(addTask.todo);
conditions = addTask.addMore
todos.push(addTask.todo);

}