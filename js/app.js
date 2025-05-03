let total = 0;

function adicionar() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let produto = document.getElementById("produto").value;
  let valorProduto = parseFloat(produto.split("R$")[1]);
  let nomeProduto = produto.split(" - R$")[0];

  const novoProduto = document.createElement("section");
  novoProduto.classList.add("carrinho__produtos__produto");
  novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`;

  document.getElementById("lista-produtos").appendChild(novoProduto);

  total += quantidade * valorProduto;
  calcular();
  atualizarBotaoLimpar();

  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
}

function calcular() {
  let valorTotal = document.getElementById("valor-total");
  valorTotal.textContent = `R$${total}`;
}

function limpar() {
  if (total > 0) {
    const listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = "";
    total = 0;
    calcular();
    atualizarBotaoLimpar();
  } else {
    alert("O carrinho já está vazio.");
  }
}

function atualizarBotaoLimpar() {
  const botaoLimpar = document.getElementById("btn-limpar");
  botaoLimpar.disabled = total <= 0;
}
