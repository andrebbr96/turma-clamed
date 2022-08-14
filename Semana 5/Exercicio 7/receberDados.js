import imprimeDados from "./index.js";



let botao = document.getElementById('btn1');

botao.addEventListener('click', (event) =>{
    let nome = document.getElementById('nome-input').value
    let linkImg = document.getElementById('imagem-input').value
    let descricao = document.getElementById('descricao-input').value
    imprimeDados(nome,linkImg,descricao)
    event.preventDefault()
})