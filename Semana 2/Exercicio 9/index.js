let escolha
let produto
let produtoMaior = ''
let quantidade
let maiorQuantidade = 0

while( escolha != 6 ) {
    escolha = parseInt( prompt ( "Escolha uma das opções disponíveis\n" +
    "( 1 ) - Hortifruti\n" +
    "( 2 ) - Laticínios\n" +
    "( 3 ) - Carnes\n" +
    "( 4 ) - Peixes\n" +
    "( 5 ) - Aves\n" +
    "( 6 ) - Fechar pedido" ))

    switch( escolha ){
        case 1:
            produto = "Hortifruti"
            quantidade = parseInt( prompt ( "Qual a quantidade?" ))
            break;
        case 2:
            produto = "Laticínios"
            quantidade = parseInt( prompt ( "Qual a quantidade?" ))
            break;
        case 3:
            produto = "Carnes"
            quantidade = parseInt( prompt ( "Qual a quantidade?" ))
            break;
        case 4:
            produto = "Peixes"
            quantidade = parseInt( prompt ( "Qual a quantidade?" ))
            break;
        case 5:
            produto = "Aves"
            quantidade = parseInt( prompt ( "Qual a quantidade?" ))
            break;
        case 6:
            break;
        default:
            alert( "Opção invalida!" )
            break;
    }

    if( quantidade > maiorQuantidade ){
        maiorQuantidade = quantidade
        produtoMaior = produto          
    } 
    

}

alert( "Produto comprado em maior quantidade: " + produtoMaior )