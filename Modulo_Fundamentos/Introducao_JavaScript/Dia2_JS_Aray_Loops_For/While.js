//Iniciando o aprendizado com o WHILE
//Deve tomar cuidado com o valor inicial da variavel quer sera usada no while
//pois se utilizar um valor errado pode entrar em um loop infinito e travar tudo
 
let counter = 0;

while(counter !== 5) {
  counter += 1;
  console.log(counter);
}

console.log("termino do primeiro exermplo!!!!")
console.log("")


function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();

}
console.log(d1)
console.log(d2)
console.log("termino do segundo exermplo!!!!")


