/*const robotron = document.querySelector('#robotron')

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(){
    console.log('oi')
}*/

const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')

const controle = document.querySelectorAll('[data-controle]')

controle.forEach ( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        //console.log()
    })
})


function manipulaDados(operacao, controle){

    const peca = controle.querySelector('[data-contador]')

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value++
    }
}