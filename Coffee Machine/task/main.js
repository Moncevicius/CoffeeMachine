// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
let stock = {
    money: 550,
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9
}

let coffeeTypes = {
    espresso: {
        water: 250,
        milk: 0,
        beans: 16,
        money: 4,
        cups: 1
    },
    latte: {
        water: 350,
        milk: 75,
        beans: 20,
        money: 7,
        cups: 1
    },
    cappuccino: {
        water: 200,
        milk: 100,
        beans: 12,
        money: 6,
        cups: 1
    }
}

/*  That is where the magic happens */
while (true){
    let option = input("Write action (buy, fill, take, remaining, exit):\n");
    switch (option){
        case "buy":
            buy();
            break;
        case "fill":
            fillUp();
            break;
        case "take":
            take();
            break;
        case "remaining":
            printStatus();
            break;
        case "exit":
            return;
    }
}

/* Displays the number of supplies machine has */
function printStatus(){
    console.log(`\nThe coffee machine has:
${stock.water} ml of water
${stock.milk} ml of milk
${stock.beans} g of coffee beans
${stock.cups} disposable cups
$${stock.money} of money
`);
}

/* Option Buy implementation */
function buy(){
    let coffeeType;
    let option = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
    switch (option){
        case "1":
            coffeeType = "espresso";
            cupOfCoffee(coffeeType);
            break;
        case "2":
            coffeeType = "latte";
            cupOfCoffee(coffeeType);
            break;
        case "3":
            coffeeType = "cappuccino";
            cupOfCoffee(coffeeType);
            break;
        case "back":
            break;
    }
}

/* Make one cup of coffee of coffeeType */
function cupOfCoffee(coffeeType){
    if(stock.water < coffeeTypes[coffeeType].water){
        console.log(`Sorry, not enough water!
        `);
    }else if(stock.milk < coffeeTypes[coffeeType].milk){
        console.log(`Sorry, not enough milk!
        `);
    }else if(stock.beans < coffeeTypes[coffeeType].beans){
        console.log(`Sorry, not enough beans!
        `);
    }else if(stock.cups < coffeeTypes[coffeeType].cups){
        console.log(`Sorry, not enough cups!
        `);
    }else {
        console.log("I have enough resources, making you a coffee!");
        stock.water -= coffeeTypes[coffeeType].water;
        stock.milk -= coffeeTypes[coffeeType].milk;
        stock.beans -= coffeeTypes[coffeeType].beans;
        stock.money += coffeeTypes[coffeeType].money;
        stock.cups -= coffeeTypes[coffeeType].cups;
        console.log("");
    }
}

/* Option to fill up the Coffee machine */
function fillUp(){
    stock.water += Number(input("\nWrite how many ml of water you want to add:\n"));
    stock.milk += Number(input("Write how many ml of milk you want to add:\n"));
    stock.beans += Number(input("Write how many grams of coffee beans you want to add:\n"));
    stock.cups += Number(input("Write how many disposable coffee cups you want to add:\n"));
    console.log();
}

/* Option to take the money out of the Coffee machine */
function take(){
    console.log(`\nI gave you $${stock.money}
        `);
    stock.money = 0;
}