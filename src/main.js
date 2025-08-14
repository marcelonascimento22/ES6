/*
import {soma as adcao, subtrai } from './help.js'
import dobrar from  './dobrar.js'
import quadrado, {metade, MEUPI} from './funcoes.js'

//import * as => somente com o export comum, sem o default
import * as helpers from './help.js'


//console.log(soma(47, 3))
console.log(subtrai(47, 3))
console.log(dobrar(8))
console.log(adcao(10, 110))

console.log(`Quadrado:${quadrado(16)}`)
console.log(metade(100))
console.log(MEUPI)

console.log(helpers.soma(36, 35))
console.log(helpers.subtrai(100, 30))
*/


document.querySelector('body').style.background = 'red' //'#345623'
document.querySelector('h1').innerText = 'Criando um servidor para o desenvolvimento'
let section = document.querySelector("section")
let span = document.createElement('span')

span.innerText = 'Marcelo Nascimento'
section.appendChild(span)

console.log(section)