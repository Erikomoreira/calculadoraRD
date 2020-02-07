
let visor = document.getElementById('visor'); /* Pegar o visor */
let ce = document.getElementById('ce'); /* Pegar o botão de limpar o visor */
let botoes = document.querySelectorAll('.clicado') /* Pegar todos os botoões */
 //atualizar o visor 
const atualizarVisor = (param) => {
    visor.innerHTML  += param;
}
/* Limpa o visor */
const limparVisor = () => {
    visor.textContent = "";
}
// faz o calculo
const calcular = () => {
    const resultado = eval(visor.textContent);
    visor.textContent = resultado;
}

// faz ação do botão clicado
const acaoBtn = (event) => {

    let valor = event.target.textContent;
    valor = valor.replace("X", "*");
    valor == "=" ? calcular() : atualizarVisor(valor)

}
//add os eventos nos botões
botoes.forEach(btn => btn.addEventListener("click", acaoBtn)); 
ce.addEventListener("click", limparVisor);


