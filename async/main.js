const novaPromise = () => new Promise((resolve, reject) => {
    let valor  = Math.floor(Math.random() * 10) //Gerar um número aleatório entre 0 e 9
    setInterval(()=>{
        if(valor % 2 == 0) {
            resolve(`O valor ${valor} é par...`) // sucesso
        } else {
            reject(`O valor ${valor} é ímpar...`)//fracasso
        }
    }, 2000)
})

async function executarPromise() {
    try {
        const response = await novaPromise()
        console.log(response)
    }catch (error) {
        console.log(error)
    }
}

executarPromise()

