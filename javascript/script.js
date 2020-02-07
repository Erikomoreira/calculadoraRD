
let visor = document.getElementById('visor'); /* Pegar o visor */
let ce = document.getElementById('ce'); /* Pegar o botão de limpar o visor */
let botoes = document.querySelectorAll('.clicado') /* Pegar todos os botoões */

const atualizarVisor = (param) => {
    visor.innerHTML  += param;
}
/* Limpa o visor */
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


