function Resultado(){
const input1 = document.getElementById("peso")
    const peso = input1.value
const input2 = document.getElementById("altura")
    const altura = input2.value

 const imc = peso / Math.pow(altura, 2)

    const span = document.getElementById('res')
    span.innerText = imc.toFixed(1)
}
