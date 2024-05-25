document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loaded");

  // Adiciona um evento de clique ao botão "Pagar"
  document.getElementById("pagar-button").addEventListener("click", function(event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();
    
    // Verifica se todos os campos estão preenchidos
    if (validarCampos()) {
      // Simular um processamento de pagamento (pode ser substituído pela sua lógica real)
      setTimeout(() => {
        mostrarNotificacaoPagamentoConcluido();
      }, 1000); // Simula um segundo de processamento

    } else {
      // Se algum campo estiver vazio, exibe uma mensagem de erro
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Por favor, preencha todos os campos do formulário.',
        confirmButtonText: 'OK'
      });
    }
  });
});

// Função para verificar se todos os campos do formulário estão preenchidos e o número do cartão é válido
function validarCampos() {
  var nome = document.getElementById('nome').value;
  var numeroCartao = document.getElementById('numero-cartao').value;
  var validade = document.getElementById('validade').value;
  var cvv = document.getElementById('cvv').value;
  var metodoPagamento = document.getElementById('metodo-pagamento').value;

  // Verifica se todos os campos estão preenchidos
  if (nome === '' || numeroCartao === '' || validade === '' || cvv === '' || metodoPagamento === '') {
    return false;
  }

  // Verifica se o número do cartão é válido (pode ser substituído por uma validação real)
  if (!isValidCreditCard(numeroCartao)) {
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Número de cartão de crédito inválido.',
      confirmButtonText: 'OK'
    });
    return false;
  }

  // Retorna verdadeiro se todos os campos estiverem preenchidos e o cartão for válido
  return true;
}

// Função para validar o número do cartão de crédito (algoritmo de Luhn)
function isValidCreditCard(number) {
  // Implemente aqui a lógica de validação do número do cartão de crédito (algoritmo de Luhn)
  // Retorne true se for válido, false caso contrário
  return true; // Implemente a lógica real de validação
}

// Função para exibir a notificação de pagamento concluído
function mostrarNotificacaoPagamentoConcluido() {
  Swal.fire({
    icon: 'success',
    title: 'Pagamento Concluído!',
    text: 'O pagamento foi realizado com sucesso.',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      // Redirecionar para a página de destino após o usuário clicar em "OK"
      redirecionarParaPaginaDest();
    }
  });
}

// Função para redirecionar para a página de destino e salvar os dados no armazenamento local
function redirecionarParaPaginaDest() {
  // Obter os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var numeroCartao = document.getElementById("numero-cartao").value;
  var validade = document.getElementById("validade").value;
  var cvv = document.getElementById("cvv").value;
  var metodoPagamento = document.getElementById("metodo-pagamento").value;

  // Armazenar os valores no armazenamento local
  localStorage.setItem("nomeReserva", nome);
  localStorage.setItem("numeroCartaoReserva", numeroCartao);
  localStorage.setItem("validadeReserva", validade);
  localStorage.setItem("cvvReserva", cvv);
  localStorage.setItem("metodoPagamentoReserva", metodoPagamento);

  // Redirecionar para a página de destino
  window.location.href = "paginaDest.html";
}
