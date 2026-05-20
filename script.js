






const Button = document.querySelector(".sortear-button")
const fecharBtn = document.querySelector(".fecharBtn")

function sortearNumber() {
    const inputMin = document.querySelector(".input-min")
    const inputMax = document.querySelector(".input-max")
    const min = parseInt(inputMin.value)
    const max = parseInt(inputMax.value)
    const numeroSorteado = document.querySelector(".Numero-Sorteado")

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira numeros validos.")
    }
    else if (min > max) {
        alert("O primeiro valor deve ser menor ou igual ao segundo valor.")
    }
    else {
        const randomNumber = Math.floor(Math.random() * (max-min + 1)) + min
        const overlay = document.querySelector(".modal-overlay")
        overlay.style.visibility = 'visible';
        numeroSorteado.innerHTML = randomNumber
    }

    function fecharModal() {
    
        const overlay = document.querySelector(".modal-overlay")
        overlay.style.visibility = 'hidden';

}
    fecharBtn.addEventListener("click", fecharModal)

}

Button.addEventListener("click", sortearNumber)   


