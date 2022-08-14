function criarDivTexto( lista = [], nomeDoElemento ){
    const divTextos = document.getElementById( nomeDoElemento )
    for ( var element of lista ){
        const criaDiv = document.createElement( 'div' )
        divTextos.append( criaDiv )
        criaDiv.innerHTML = element
    }
}

criarDivTexto( ["teste","teste","teste","teste","teste"],'textos' )