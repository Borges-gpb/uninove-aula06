const form = document.getElementById("meuForm");

form.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
    const erro = document.getElementById("erro");

    // Limpa mensagens de erros antigas
    erro.textContent = "";

    // 1. Validação do Nome: Não pode estar em branco
    if (nome.trim() === "") {
        event.preventDefault();  // Impede o formulário de ser enviado
        erro.textContent = "O nome é obrigatório!";
        erro.style.color = "red";
        return; // Para o código aqui para mostrar uma mensagem por vez
    }

    // 2. Validação do Email: Tem que ter o símbolo '@'
    if (!email.includes("@")) {
        event.preventDefault(); 
        erro.textContent = "E-mail inválido! Deve conter '@'.";
        erro.style.color = "red";
        return;
    }

    // 3. Validação da Idade: Tem que ser maior que 0
    if (idade === "" || parseInt(idade) <= 0) {
        event.preventDefault(); 
        erro.textContent = "A idade deve ser maior que 0!";
        erro.style.color = "red";
        return;
    }

    // Se o código chegar até aqui, significa que deu tudo certo!
    event.preventDefault(); // Travamos o envio real para conseguir ver o sucesso na tela
    erro.textContent = "Formulário enviado com sucesso!";
    erro.style.color = "green";
    form.reset(); // Limpa os campos digitados
});
