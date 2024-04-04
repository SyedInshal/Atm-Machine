#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar

console.log(`Your Total Balance Is :${myBalance}`)

let myPin = 1234;

let pinEntered = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter Your Pin number",
            type: "number",
            
        }
    ]
);


 if (pinEntered.pin === myPin) {
    console.log("Correct Pin Code!");
   
    let atmQuestions = await inquirer.prompt(
        [
            {
                name:"account type",
                message:"please select your account type",
                type:"list",
                choices: [
                    "Current Account",
                     "Saving Account",
                    ]
            },
            {
                name:"transMethod",
                message:"select the transaction method please",
                type:"list",
                choices:[
                    "Cash Withdrawal",
                    "Fast Cash",
            
                ]
            }
        ]
    );
    if (atmQuestions.transMethod ==  "Cash Withdrawal")
{
    let cash_withdrawAmount = await inquirer.prompt([
        {
            name:'withdrawal',
            message: 'enter your amount you want to withdraw',
            type:'number',

        }
    ]);

    if(myBalance >= cash_withdrawAmount.withdrawal)
    {
        myBalance -= cash_withdrawAmount.withdrawal
        console.log(`Your Remaining Balance Is :${myBalance}`)
    }
    else(
        console.log(`Not Enough Balance`)
    )
}
    else {
        let fast_cashAmount = await inquirer.prompt(
            [
                {
                    name:"fastCash",
                    message:"please select the amount you want to withdraw",
                    type:"list",
                    choices:[
                        "1000",
                        "2500",
                        "5000",
                    ]
                }
            ]
        )
        if(myBalance >= fast_cashAmount.fastCash){
            myBalance -=  fast_cashAmount.fastCash
            console.log(`Your Remaining Balance Is :${myBalance}`)
        }
        else(
            console.log(`Not Enough Balance`)
        )
    }  
} else{
    console.log("Incorrect Pin Number")
}

