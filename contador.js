// Criando a variável para guardar o número atual
let contador = 0;

// Selecionando os elementos da tela através do DOM
const numeroTela = document.getElementById("numero");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const btnZerar = document.getElementById("btnZerar");

// Função para atualizar o número e mudar a cor (Bônus da aula)
function atualizarTela() {
    numeroTela.textContent = contador;
    
    if (contador > 0) {
        numeroTela.style.color = "green"; // Verde se for positivo
    } else if (contador < 0) {
        numeroTela.style.color = "red";   // Vermelho se for negativo
    } else {
        numeroTela.style.color = "black"; // Preto se for zero
    }
}

// Ouvindo o clique de cada botão
btnIncrementar.addEventListener("click", function() {
    contador++; // Soma 1
    atualizarTela();
});

btnDecrementar.addEventListener("click", function() {
    contador--; // Subtrai 1
    atualizarTela();
});

btnZerar.addEventListener("click", function() {
    contador = 0; // Reseta para zero
    atualizarTela();
});
