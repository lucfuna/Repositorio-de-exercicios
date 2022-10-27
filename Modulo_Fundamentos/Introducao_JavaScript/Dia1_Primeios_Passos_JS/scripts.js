//!!!Exercicio 1 em javascripta aprendendo sobre atribuição de variaveis e como logar no console!!!!!
//criando uma variavel e atribuindo um valor
const myName = "Lucas";
const birthCity = "Serra";
let birthYear = 1993;


//mostrando resultado no console
console.log(myName);
console.log(birthCity);
console.log(birthYear);
///////////////////////////////////////////////////////////////////////////////////////////////////



//Exercicio 2 - aula de tipos primitivos, tipagem dinâmica e operacoes aritmeticas!!!!!
let movie = "Avengers"; //string literal
let score = 10; //number literal
let isValid = true; //boolean
let name;           //undefined
let color = null; //variavel nula aguardando uma redefinição
//Inicio do exercicio
const base = 5;
const height = 8;
const area = base*height;
const perimeter = 2*base+2*height;

console.log(area);
console.log(perimeter)
///////////////////////////////////////////////////////////////////////////////

//Proxima Aula - Condições If e Else

let trybe = 16.42;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log ("Aula ao vivo");
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Fora dos momentos síncronos");
}

//////////////////////////////////////////////////////////////////////////////////////////////////


//Proxima Aula - Operadores Lógicos

//os operadores logicos existentes e que vamos muito usar sao
//o && (AND), || (OR) e ! (NOT)!!!!!!!!




///////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Proxima Aula - Switch e Case


// Nesse exemplo o "switch/case" deverá imprimir no terminal a classificação de quais filmes podem ser assistidos
// de acordo com a faixa etária de uma pessoa.

let faixaEtaria = 'adulto';

switch (faixaEtaria) {
  case 'adolescente':
    // Caso a variável seja "adolescente" então entraremos na lógica abaixo.

    console.log('Consulte a classificação do filme');
    // Quando a pessoa for adolescente essa será a mensagem impressa no console.

    break;
    
    // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido
  case 'adulto':
    // Após implementar a lógica de um case, você pode abrir outro case.
    // Agora vamos fazer a lógica do que deve ocorrer se a pessoa for adulta

    console.log('A pessoa adulta é classificada para assistir qualquer filme')
    //caso seja adulto essa mensagem deverá aparecer no terminal

    break;
    // Interrompemos o fluxo novamente caso a pessoa seja adulta
    case 'idoso':
      // Repetimos o mesmo processo para o case "idoso"
      console.log('A pessoa idosa é classificada para assistir qualquer filme');
      break
  default:
    // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases
    // Ou seja, se a pessoa, for criança, recém nascida, ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
    console.log('só pode assistir filmes livres');
    // note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não precisamos interromper o funcionamento do mesmo.
}




