//Estrutura do for!!
//For ('variavel que vai contar as repetições'; 'define a quantidade de repetições'; 'como vai ser a atuaização apos cada repetição';)
var numero = 7;
for (var contador = 1; contador <= 9; contador+= 1) {
    console.log(numero * contador);
}


//Exercicio 2 da aula de for!!
var listaDeNomes = ["Joana", "Maria", "Lucas"];

for ( var indice = 0; indice < listaDeNomes.length; indice+= 1){
    var mensagem = "Boas Vindas, " + listaDeNomes[indice] + "!";
    console.log(mensagem);
}