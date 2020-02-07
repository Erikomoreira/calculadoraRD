let visor = document.getElementById('visor');
let ce = document.getElementById('ce');
let botoes = document.querySelectorAll('.clicado')

const atualizarVisor = (param) => {
    visor.innerHTML  += param;
}

const limparVisor = () => {
    visor.textContent = "";
}

const calcular = () => {
    const resultado = eval(visor.textContent);
    visor.textContent = resultado;
}

const acaoBtn = (event) => {

    let valor = event.target.textContent;
    valor = valor.replace("X", "*");
    valor == "=" ? calcular() : atualizarVisor(valor)

}

botoes.forEach(btn => btn.addEventListener("click", acaoBtn)); 
ce.addEventListener("click", limparVisor);


