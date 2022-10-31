// O for/of permite criar loops em objetos iteráveis (Strings, arrays, entre outros)!!!!
//Exemplo 1
let numeros = ["Pão",2,3,4,5];
for (let letter of numeros){
    console.log(letter);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (numero of names){
    let mensagem = "Bem vindos, " + names[numero] + "!";
    console.log(mensagem);

}