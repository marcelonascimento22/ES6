/*
Conjuntos não aceitam repetição de valores
conjuntos não são indexados
*/

//Declarando um conjunto
let cursos = new Set()

//Adicionando valores
cursos.add('Logica de Programação')
cursos.add('HTML')
cursos.add('CSS')
cursos.add('Java')
cursos.add('Python')        
cursos.add('JavaScript')

//Adcionando valores concatendados
cursos.add('.NET').add('C#').add('PHP')

/*
console.log(cursos)
console.log(cursos.size)
//Verifica se o valor existe retorna (true/false), é case sensitive
console.log(cursos.has('Banco de dados')) 
*/

//Deletando
let ret = cursos.delete('JavaScript')
console.log(`O curso foi escluido: ${ret}`)
console.log(`Ocurno foi encontrado: ${cursos.delete('JavaScript')}`) 

let frutas = ['Manga', 'Uva', 'Banana', 'Maçã', 'Uva', 'Banana']
console.log(`Array com repetição: ${frutas}`)
let frutasSemRepeticao = new Set(frutas)
console.log(frutasSemRepeticao)