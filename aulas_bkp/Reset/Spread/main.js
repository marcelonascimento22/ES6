//Reset/Spread (Juntar/Espalhar) => ...
//...preco é convertido para um array
function total(...preco){
    let total = 0

    preco.forEach(p => total += p)

    return total
}

//Não tem limite de argumentos
//Junta todos os argumentos em um array
console.log(total(23.44, 22, 3.45, 5.67).toFixed(2))

console.log(total(23, 67))

console.log(total(3, 6, 77))

console.log(total())


let fetras1 = ['Maga', 'Uva', 'Banana']
let fetras2 = ['Abacate', 'Morango', 'Jaca']

let compras = [...fetras1, ...fetras2]

console.log(compras)

let alunos = ['Paula',  'Felipe', 'João', 'Maria']
let novos = 'Ana'
alunos.push(novos)
let todos = [ ...alunos, novos, 'Fernando']

console.log(alunos)
console.log(todos)
