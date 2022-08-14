class Serie{
  nome;
  anolancamento;
  qttemporada;


  constructor(nome, anoLancamento, qtTemporada){
    this.nome = nome;
    this.anolancamento = anoLancamento;
    this.qttemporada = qtTemporada;
  } 
}

let maisAntiga;
let nomeAntigo
for(let i = 0; i <= 3; i++ ){

 let nome = prompt("Digite o nome da serie: ");
 let anolancamento = parseInt(prompt("Digite o ano de lançamento: "));
 let qttemporada = parseInt(prompt("Digite a quantidade de temporadas: "));
 
 const serie = new Serie(nome, anolancamento, qttemporada);
 if(i == 0){
  maisAntiga = serie.anolancamento
 }else if(serie.anolancamento < maisAntiga){
  maisAntiga = serie.anolancamento;
  nomeAntigo = serie.nome
 }

}

let tagH1 = document.getElementById("h1");
tagH1.innerHTML = nomeAntigo;

