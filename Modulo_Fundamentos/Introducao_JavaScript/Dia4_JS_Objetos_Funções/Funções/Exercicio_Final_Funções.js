//Item 1 - Verificação de uma palavra palindroma!!!!!!

function verificaPalindrome(word) {
    for(index in word) {
      if(word[index] != word[(word.length - 1) - index]) {
        return false;
      }
    }
    return true;
  }
console.log('')

  //Outra forma de resolver utilizando,SPLI, REVERSE e JOIN!!!

  function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false

console.log('')
console.log('----------------------------------------------------')
console.log('')

//ITEM 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
  
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4

  console.log('')
  console.log('----------------------------------------------------')
  console.log('')

//ITEM 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
  
    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6

  console.log('')
  console.log('----------------------------------------------------')
  console.log('')

//ITEM 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
  
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda


  console.log('')
  console.log('----------------------------------------------------')
  console.log('')

//ITEM 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
  
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
  
    return numeros[indexNumeroRepetido];
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2


  console.log('')
  console.log('----------------------------------------------------')
  console.log('')

//ITEM 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somaTodosNumeros(numero) {
    let total = 0;
  
    for (let index = 1; index <= numero; index += 1) {
      total = total + index;
    }
    return total;
  }
  
  console.log(somaTodosNumeros(5)); //15


  console.log('')
  console.log('----------------------------------------------------')
  console.log('')


//ITEM 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;
    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
      if (inversoPalavra[index] !== inversoFimPalavra[index]) {
        result = false;
        break;
        break; // O "break" serve para encerrar o loop.
      } else {
        result = true;
      }
    }
    
    return result;
  }
  
  console.log(verificaFimPalavra('trybe', 'be')); //true
  console.log(verificaFimPalavra('joaofernando', 'fernan')); //false


