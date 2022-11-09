//Como é criado uma função normalmente e atribuindo essa função a uma variavel
const printName = function () {
    const myName = 'Lucas';
    return myName;
};
console.log(printName());


//Como é criado uma função com ARROW FUNCTION e atribuindo essa função a uma variavel
//Forma 1 de criar uma arrow function
const printName2 = () => {
    const myName = 'Lucas';
    return myName;
};
console.log(printName2());

//mas uma arrow function pode ser ainda mais simplificada
const printName3 = () => 'Lucas';
console.log(printName3());

//Quando a função receber apenas 1 argumento utilizando arrow function podemos retirar os parenteses
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

//mas se tiver mais de um argumento precisa ser colocado os parenteses para os argumentos
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));


console.log('------------------------')