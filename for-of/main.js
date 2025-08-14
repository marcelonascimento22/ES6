/**
 * Facila o trabalho com coleções
 */
/*
let nome = 'Marcelo Nascimento'
// for-of percorre coleções iteráveis (arrays, strings, etc.)
for(let letra of nome) {
    console.log(letra)
}
    

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let n of number) {
    console.log(`${n} x 2 = ${n * 2}`)
}

//Acessando os indeces
for (let indice in number) {
    console.log(`Posição: ${indice}, Valor: ${number[indice]}`)
}
*/

let curso = new Map([
    [1, {nome:'JavaScript',  carga:'140 horas'}],
    [2, {nome:'Python', carga:'120 horas'}],  
    [3, {nome:'Java', carga:'130 horas'}],
    [4, {nome:'C#', carga:'150 horas'}],
    [5, {nome:'PHP', carga:'110 horas'}],
    [6, {nome:'Ruby', carga:'100 horas'}],
    [7, {nome:'Swift', carga:'125 horas'}],
    [8, {nome:'Go', carga:'115 horas'}],
    [9, {nome:'Kotlin', carga:'135 horas'}],
    [10, {nome:'Rust', carga:'145 horas'}]
])
console.log('**********************************')
console.log('Cursos disponíveis:')
console.log('**********************************')
for (let [id, produto] of curso) {
    console.log(`ID: ${id}, Curso: ${produto.nome}, Carga Horária: ${produto.carga}`)
}

let produtos = new Map([
    [1, {nome:'Notebook', preco: 2500, descr:'Notebook Dell Inspiron 15'}],
    [2, {nome:'Smartphone', preco: 1500, descr:'Smartphone Samsung Galaxy S21'}],
    [3, {nome:'Tablet', preco: 800, descr:'Tablet Apple iPad Air'}],
    [4, {nome:'Monitor', preco: 1200, descr:'Monitor LG UltraWide 29"'}],
    [5, {nome:'Teclado', preco: 200, descr:'Teclado Mecânico Logitech G Pro'}],
    [6, {nome:'Mouse', preco: 100, descr:'Mouse Gamer Razer DeathAdder'}],
    [7, {nome:'Impressora', preco: 600, descr:'Impressora HP LaserJet Pro'}],
    [8, {nome:'Roteador', preco: 300, descr:'Roteador TP-Link Archer A7'}],
    [9, {nome:'Webcam', preco: 400, descr:'Webcam Logitech C920'}],
    [10, {nome:'Fone de Ouvido', preco: 250, descr:'Fone de Ouvido Sony WH-1000XM4'}]
])

console.log('**********************************')
console.log('Produtos disponíveis:')
console.log('**********************************')
for (let [id, produto] of produtos) {
    console.log(`Item: ${id}, Nome: ${produto.nome}, Preço: R$ ${produto.preco.toFixed(2)}`)
    console.log(`Descrição: ${produto.descr}`)
    console.log('**********************************')
}