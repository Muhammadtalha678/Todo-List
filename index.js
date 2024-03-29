#! /usr/bin/env node
import inquirer from "inquirer";
let tasks = [];
let condition = true;
let exit;
while (exit !== "Exit") {
    let askTask = await inquirer.prompt({
        message: "What you like to do?",
        type: "list",
        choices: ["Add Task", "View Task", "Delete Task", "Exit"],
        name: "chosseTask"
    });
    if (askTask.chosseTask === "Exit") {
        console.log("Exiting the application. Goodbye!");
        exit = "Exit";
    }
    else if (askTask.chosseTask === "Add Task") {
        let addTask = await inquirer.prompt({
            type: 'input',
            name: 'task',
            message: 'Enter the task:'
        });
        tasks.push(addTask.task);
        console.log('Task added successfully!');
    }
    else if (askTask.chosseTask === "View Task") {
        if (tasks.length > 0) {
            console.log(`Your Tasks: ${tasks}`);
        }
        else {
            console.log(`No Tasks Found. Add Task First!`);
        }
    }
    else if (askTask.chosseTask === "Delete Task") {
        if (tasks.length > 0) {
            console.log(`Your Tasks : ${tasks}`);
            let deleteTask = await inquirer.prompt({
                message: "Enter Your Task which you want to delete: ",
                type: "input",
                name: "deleteTask"
            });
            if (tasks.includes(deleteTask.deleteTask)) {
                let index = tasks.indexOf(deleteTask.deleteTask);
                tasks.splice(index, 1);
                console.log("Task deleted successfully!");
            }
            else {
                console.log("No Task Found, Please try again");
            }
        }
        else {
            console.log(`No Tasks Found. Add Task First!`);
        }
    }
}
