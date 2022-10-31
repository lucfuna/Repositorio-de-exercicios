//Variavel simples
let pizza1 = '4 Queijos';
let pizza2 = 'Frango com Catupiry';
let pizza3 = 'Marguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate';
// Caso eu queira logar todas essas variavel teria que dar um log em cada uma delas


//declarando um array!!!!

let pizzas = ['4 Queijos','Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];
// lembrar que o posicionamento dentro do array começa com 0!!

//caso que queria colocar mais um elemento dentro da minha array!!!
pizzas.push('Peito de Peru');
pizzas.push('Gratinada');

//como saber quantos elemento tem dentro do array!!!
//console.log(pizzas.length)

//como colocar em ordem alfabetica!!!
//console.log(pizzas.sort());


//Criando um laço de repetição

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}

