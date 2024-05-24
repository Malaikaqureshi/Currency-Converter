#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n \t Welcome to CodeWithMalaika - Currency Converter\n"));

//Define the list of Currencies and their exchange Rates
let exchange_rate: any = {
    "USD": 1, //Base Currency
    "EUR": 0.9, //European Currency
    "JYP": 113, //Japanese Currency
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, //Australian Dollar
    "PKR": 278.42, //Pakistani Rupees
}

//Prompt the User to select Currencies to convertfrom and to
let user_answer = await inquirer.prompt([
    {
        name: "from_curreny",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD" , "EUR" , "JYP" , "CAD" , "AUD" , "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to conver into",
        choices: ["USD" , "EUR" , "JYP" , "CAD" , "AUD" , "PKR"]

    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }

]);

//Perform Currency Conversion by using Formula
let from_amount = exchange_rate[user_answer.from_curreny]
let to_amount = exchange_rate[user_answer.to_currency]
let amount = user_answer.amount

//Formula of Conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//Display the converted amount
console.log(`Converted Amount =  ${chalk.green(converted_amount.toFixed(2))}`);
 
