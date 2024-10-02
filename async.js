console.log(1);
console.log(2);
setTimeout(doSomething, 4000)
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log('Dhil')
}

function one(){
    console.log('A');
    two();
    console.log('C');
}

function two(){
    console.log('B')
}
one();

console.log('I')
setTimeout(() => {
    console.log('Eat');
}, 2000);

console.log('Ice Cream');