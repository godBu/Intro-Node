//console.log(typeof NaN)

const sayHello = () => {
    console.log('Hello');
}
const sayGoodbye = () => {
    console.log('Bye');
}
const sayWhat = () => {
    console.log('WHATTTT?');
}

//module.exports = sayHello; //one function export (single export)

module.exports = {
    sayHello, 
    sayGoodbye,
    sayWhat
}; 