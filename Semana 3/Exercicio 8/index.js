
function add(){
    const textoDigitado = document.getElementById("dado-inserido")
    const tela = document.getElementById("mostra-input")
    tela.innerHTML = (textoDigitado.value)
}

function save(){
    const textoDigitado = document.getElementById("dado-inserido")
    localStorage.setItem("texto", JSON.stringify(textoDigitado.value))
}

function show(){
  const textoArmazenado = JSON.parse(localStorage.getItem("texto"))
  const tela = document.getElementById("mostra-input")
  tela.innerHTML = (textoArmazenado)
}
