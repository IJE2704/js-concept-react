// 1. array destructurin
const numbers = [43,56];
const [x,y] = [42,65];
console.log(x,y);
function box(n1 ,n2){
    const n = [n1,n2];
    return n;
}
console.log(box(3,4));
const student = {
    name : 'shakib khan',
    age :32,
    movies : ['king', 'dhakar mastan']
} 

const [firstMovie, secondMove] = student.movies;
console.log(firstMovie,secondMove);


// object destructuring
const{name,age} = {name: 'alu', salary:400,  age: 14};
console.log(name, age);

const employe ={
    ide: 'vscode',
    deignation : 'developer',
    machine : 'windows',
    language : ['c', 'c++', 'html','css','js'],
    specification : {
        height : 66,
        weight : 67,
        adress : 'dhaka',
        drink : 'water'
    }
}
const {machine, ide} = employe;
console.log(machine,ide);
const{height,weight} = employe.specification;
console.log(height,weight);