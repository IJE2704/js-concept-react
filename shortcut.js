// just check true false
let myVar = 5;
if(myVar)
{
    myVar = myVar *100;
}
else{
    myVar = 0;
}

let myMoney = 50;
if(!myMoney)
{

}

const money = 80;
let food;
if(money>100)
{
    food = 'biriani';
}
else
{
    food = 'cha biskut';
}

// turnary
let food1 = money>100 ? 'biriani' : 'cha biskut';
console.log(food1);
let drink = (money>500 && myVar>100) ? 'coke' : 'minarel water';
console.log(drink);
//numbers to string
const num = 53;
console.log(num);
const numstr = num + '';
console.log(numstr);
//string to number
const input = '560';
console.log(input);
const inputnum = +input;
console.log(inputnum);

const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// turnery call function
isActive ? showUser() : hideUser();
// right site true then call function
isActive && showUser();
// true or false call function
isActive || hideUser();
// if true then false
isActive = !isActive;