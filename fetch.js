// 1. json
const student = {
    name : 'shakib khan',
    age :32,
    movies : ['king', 'dhakar mastan']
}
// stringfy
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
//  parse
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// 2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

//keys values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

//for
const numbers = [23,24,35,46,67,75,34,23];
numbers.forEach(num =>console.log(num));
numbers.map(num => num*2);
console.log(numbers);

// for of an array like object
// looop on an object using in


// add or remove from an aray
const products = [
    {name:'laptop', price:32000, brand:'lenevo', color:'silver'},
    {name:'phone', price:72000, brand:'iphone', color:'golden'},
    {name:'watch', price:2000, brand:'casio', color:'yellow'},
    {name:'sunglass', price:3000, brand:'ribon', color:'black'},
    {name:'camera', price:42000, brand:'Nikon', color:'gray'}
]
const newproduct = {name: 'webcam', price: 700, brand: 'lal'};
// copy products array and then newproduct
const newproducts = [...products, newproduct];
console.log(newproducts);

// create a new array without one specific item
const remaining = products.filter(p =>  p.name !=='phone');
console.log(remaining);