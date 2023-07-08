// 1. how to declare a variable using let and const

const fatherName = 'Mostofa';
let season = 'rainy';
season = 'winter';

//2. conditions
// 6 basic conditions : >,<,!==,<=,>=
// multiple consitions
if(fatherName === 'Mostofa'|| season === 'rainy')
{

}
// 3. array
// index
// length,push
const numbers = [89,35,98,12];

// 4. loop
for(let i =0; i<numbers.length; i++)
{
    console.log(numbers[i]);
}

// 5. functions
function multipy (n1,n2)
{
    const result = n1 * n2;
    return result;
}
const output = multipy(2,5);

// 6. object
const student = {
    name : 'shakib khan',
    age :32,
    movies : ['king', 'dhakar mastan']
}
console.log(student.age);
console.log(student.movies[0])