#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";



const sleep = ()=>{
    return new Promise((res) => {
        setTimeout(res,2000);
    })
}

async function welcome(){
    let rainbowTitle = chalkAnimation.rainbow('Lets start calculation');
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.redBright(`
         _____________________
        |  _________________  |
        | |cal           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|
        `))

        console.log(chalk.redBright())

}

await welcome()

async function askQuestion(){
    const answer = await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "list",
        name: "operator",
        message: chalk.magenta("which operation you want to perform?"),
        choices: ["Addition","Subtraction","Multiplication","Division"]
    },
    {
         type:"number",
         name:"num1",
         message:"Enter number :1"

    },
    {
        type:"number",
         name:"num2",
         message:"Enter number :2"
    } 
    
  ])
  .then((answers) => {
    
    if
    (answers.operator == "Addition"){
        console.log(chalk.blue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`))
    }
    else if
      (answers.operator == "Subtraction"){
            console.log(chalk.yellow(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`))
    }
    
    else if
        (answers.operator == "Multiplication"){
            console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`))
    }
    
    else if
        (answers.operator == "Division"){
            console.log(chalk.red(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`))
    }
         
  })

  };
// askQuestion()

  async function startAgain(){
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type: "input",
            name: "restart",
            message: chalk.cyan("Do you want another Calculation? Press Y or N:")
        })
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES'
    )}
startAgain()