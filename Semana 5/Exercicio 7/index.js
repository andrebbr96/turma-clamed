let cardImagem = document.getElementById('cardImagem');
let cardNome = document.getElementById('cardNome');
let cardDescricao = document.getElementById('cardDescricao');

export default function imprimeDados(nome,link,descricao){
  console.log("ligma",nome,link,descricao)
  if(link){
    cardImagem.setAttribute("src", link); 
  }
  if(nome){
    cardNome.innerHTML = nome;
  }
  if(descricao){
    cardDescricao.innerHTML = descricao;
  }

}

