/**
 * Facila o trabalho com coleções
 */
/*
let nome = 'Marcelo Nascimento'
// for-of percorre coleções iteráveis (arrays, strings, etc.)
for(let letra of nome) {
    console.log(letra)
}
    */

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let n of number) {
    console.log(`${n} x 2 = ${n * 2}`)
}

//Acessando os indeces
for (let indice in number) {
    console.log(`Posição: ${indice}, Valor: ${number[indice]}`)
}