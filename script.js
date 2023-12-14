function calcularICMS() {
  let precoCusto = document.getElementById('precoCusto').value;
  let taxaICMS = document.getElementById('taxaICMS').value;
  let icms = precoCusto * (taxaICMS / 100);
  let precoFinal = parseFloat(precoCusto) + parseFloat(icms);
  document.getElementById('resultadoICMS').innerText = "O preço final, com ICMS, é " + precoFinal;
}

function verificarMultiplos() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let saoMultiplos = num1 % num2 == 0;
  if (saoMultiplos) {
    document.getElementById('resultadoMultiplos').innerText = num1 + " é múltiplo de " + num2;
  } else {
    document.getElementById('resultadoMultiplos').innerText = num1 + " não é múltiplo de " + num2;
  }
}

function calcularIMC() {
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value;
  let imc = peso / (altura * altura);
  document.getElementById('resultadoIMC').innerText = "Seu IMC é " + imc.toFixed(2);
}