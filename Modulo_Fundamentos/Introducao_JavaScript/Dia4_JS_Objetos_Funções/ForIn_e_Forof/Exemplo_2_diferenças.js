//Esse exemplo vai mostrar a diferença crucial do For in para o For of!!!!!

//Uso do for in!!!
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};


for (let key in names){
    console.log(key);
};

console.log('')

//Usando o For of, percebi que nao da pra usar em objetos normais ele varre apenas array!!! tirar essa duvida

let names2 = ['João', 'Maria', 'Jorge'];
for (let key of names2) {
  console.log(key);
};
//resultado: hamburguer, bife, acarajé;