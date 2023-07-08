const student = {
    name : 'shakib khan',
    age :32,
    movies : ['king', 'dhakar mastan']
}
const numbers = [89,35,98,12];
// 1. template string
const aboutMe = `My name is ${student.name} has number ${numbers[2]} also like movied ${student.movies[0]}`;
console.log(aboutMe);

// 2.arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x%2 ==0;
const addThree = (x,y,z) => x+y+z;
const doMath = (n1,n2) => {
    const sum = n1 + n2;
    return sum;
}

// spread operator
const newNumber =  [...numbers];
newNumber.push(100);
numbers.push(99);
console.log(numbers);
console.log(newNumber);
const currentNumbers = [...numbers, 200];
console.log(currentNumbers);