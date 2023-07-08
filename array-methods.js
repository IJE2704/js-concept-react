const products = [
    {name:'laptop', price:32000, brand:'lenevo', color:'silver'},
    {name:'phone', price:72000, brand:'iphone', color:'golden'},
    {name:'watch', price:2000, brand:'casio', color:'yellow'},
    {name:'sunglass', price:3000, brand:'ribon', color:'black'},
    {name:'camera', price:42000, brand:'Nikon', color:'gray'}
]
// 1. map
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(price => price.price);
console.log(prices);

// 2. for each
products.forEach(product => console.log(product.color));
products.forEach(product => {

})

// 3.filter

const cheap = products.filter(product =>product.price<=5000);
console.log(cheap);
const nameN = products.filter(product => product.name.includes('n'));
console.log(nameN);

// 4.find 
const special = products.find(p => p.name.includes('n'));
console.log(special);