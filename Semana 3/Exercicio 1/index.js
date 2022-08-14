const parImpar = function( numero ){
    if( numero % 2 == 0 ){
        alert( "É par" )
    }else{
        alert( "É impar" )
    }
}

let escolha = parseInt( prompt ( "Digite um número" ) )
parImpar( escolha )