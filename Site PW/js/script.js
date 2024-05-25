document.addEventListener("DOMContentLoaded", function () {
  // Variável para armazenar o número de inscrição
  let numeroInscricao = null;

  // Selecionar o botão "Login"
  const loginButton = document.querySelector("#login-button");

  // Adicionar evento de clique ao botão "Login"
  loginButton.addEventListener("click", () => {
    // Redirecionar para a página de login (login.html)
    window.location.href = "login.html";
  });

  // Selecionar o botão de cadastro
  const cadastroButton = document.querySelector("#Cadastro-button");

  // Adicionar evento de clique ao botão de cadastro
  cadastroButton.addEventListener("click", function () {
    // Redireciona para a página de registro (register.html)
    window.location.href = "register.html";
  });

  // Seleciona o botão "Alugar"
  const botoesAlugar = document.querySelectorAll(".alugar-button");

  // Adiciona um evento de clique para cada botão "Alugar"
  botoesAlugar.forEach(function (botao) {
    botao.addEventListener("click", function () {
      // Abre o modal de reserva
      document.getElementById("modal-reserva").style.display = "block";

      // Se o número de inscrição ainda não foi gerado, gere-o agora
      if (numeroInscricao === null) {
        // Gerar um número de inscrição aleatório com 4 dígitos
        numeroInscricao = Math.floor(Math.random() * 9000) + 1000;
      }

      // Exibir o número de inscrição no modal
      document.getElementById("numero-inscricao").textContent = "Número de Inscrição: " + numeroInscricao;
    });
  });

  // Fecha o modal quando o botão de fechar é clicado
  const fecharModal = document.querySelectorAll(".fechar-modal");
  fecharModal.forEach(function (fechar) {
    fechar.addEventListener("click", function () {
      document.getElementById("modal-reserva").style.display = "none";
    });
  });

  // Envia o formulário de reserva
  const formReserva = document.getElementById("form-reserva");
  formReserva.addEventListener("submit", function (event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados da reserva e adicionar o veículo ao carrinho
    // Por exemplo, você pode enviar os dados para um servidor ou adicionar os detalhes da reserva em uma lista no próprio HTML
    // Depois de processar a reserva, você pode redirecionar para a página de reservas
    // Redireciona para a página de reservas (substitua 'reservas.html' pelo URL correto)
    window.location.href = "reservas.html";
  });

  // Função para abrir o modal de detalhes do carro
  function abrirModalCarro() {
    var modalCarro = document.getElementById("modal-carro");
    modalCarro.style.display = "block";
  }

  // Função para buscar as informações do carro com base no ID
  function obterDetalhesCarro(id) {
    // Aqui você pode implementar a lógica para buscar as informações do carro com base no ID
    // Por enquanto, retornamos informações fictícias para demonstração
    return {
      imagem: "caminho/para/imagem.jpg",
      titulo: "Carro Modelo X",
      descricao: "Descrição do carro Modelo X.",
      preco: "$100/dia",
    };
  }

  // Função para reservar viagem
  function reservarViagem(
    nome,
    hotel,
    nota,
    limpeza,
    qualidade,
    referencia
  ) {
    // Armazena os detalhes da viagem em variáveis JavaScript
    sessionStorage.setItem("nomeViagem", nome);
    sessionStorage.setItem("hotelViagem", hotel);
    sessionStorage.setItem("notaViagem", nota);
    sessionStorage.setItem("limpezaViagem", limpeza);
    sessionStorage.setItem("qualidadeViagem", qualidade);
    sessionStorage.setItem("referenciaViagem", referencia);

    // Redireciona para a página de reservas
    window.location.href = "reservas.html";
  }

  // Preencher o modal de reserva com as informações necessárias
  const modalReserva = document.getElementById("modal-reserva");

  // Adicionar evento de clique ao botão de fechar do modal
  modalReserva.addEventListener("click", function () {
    modalReserva.style.display = "none";
  });

  // Impedir que o clique dentro do modal feche o modal
  const modalContent = document.querySelector(".modal-content");
  modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Adicionar informações ao modal de reserva
  const modalTransporte = document.getElementById("opcao-transporte");
  const modalClasseViagem = document.getElementById("classe-viagem");
  const modalDescricao = document.getElementById("descricao-modal");

  // Aqui você pode substituir esses valores pelos valores reais
  modalTransporte.textContent = "Opção de Transporte: Avião";
  modalClasseViagem.textContent = "Classe de Viagem: Alta";
  modalDescricao.textContent = "Preço: $500, Nome do Local: Exemplo";
});

// Lista de URLs das imagens
const imageUrls = [
  "pexels-pixabay-39691.jpg",
  "images/headerImg.jpg",
  "images/headerImg2.jpg",
  // "images/aeroporto foto.jpg"
];

// Lista de imagens do cabeçalho
const headerImages = document.querySelectorAll('.header-images img');
let currentImageIndex = 0;

// Função para mostrar a próxima imagem
function showNextImage() {
  // Oculta todas as imagens
  headerImages.forEach(image => {
    image.style.display = 'none';
  });

  // Mostra a próxima imagem
  headerImages[currentImageIndex].style.display = 'block';

  // Atualiza o índice da próxima imagem
  currentImageIndex = (currentImageIndex + 1) % headerImages.length;
}

// Mostra a próxima imagem a cada 5 segundos
setInterval(showNextImage, 5000);

// Função para rolar suavemente até o elemento alvo
function scrollToTarget(target) {
  target.scrollIntoView({ behavior: 'smooth' });
}

// Função para lidar com o clique no botão de Procurar
document.querySelector('.search-button').addEventListener('click', function () {
  // Obtém o texto de pesquisa
  var searchText = document.querySelector('.search-input').value.toLowerCase();

  // Obtém todos os itens de cartão
  var cardItems = document.querySelectorAll('.card-item');

  // Itera sobre cada item de cartão
  cardItems.forEach(function (item) {
    // Obtém o texto do título do item
    var title = item.querySelector('h3').textContent.toLowerCase();

    // Verifica se o texto de pesquisa corresponde ao título do item
    if (title.includes(searchText)) {
      // Rola suavemente até o item correspondente
      scrollToTarget(item);
    }
  });
});