let aluno = prompt( "digite seu nome" )
let notas = []
let nota
let i = 1
let media
let somaNotas = 0
let statusAluno


while( i <= 4 ){
    nota = prompt( "Insira a " + i + " nota" )
    notas.push( nota )
    i++
}

for( i = 0; i < notas.length; i++ ){
    somaNotas += Number(notas[i])
}

media = somaNotas/notas.length

if( media < 7 ){
    statusAluno = " reprovado :("
}

else{
    statusAluno = " Aprovado ^-^"
}

alert( aluno + " sua media foi: " + media + "\nvocê foi " + statusAluno )
