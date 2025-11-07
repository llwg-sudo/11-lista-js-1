/**** Escreva o código abaixo 👇******/

//Questão 1: Soma simples
function somar(a,b) {
  return a + b;
}

//Questão 2: Multiplicação simples
function multiplicar(c, d) {
  return c * d;
}

//Questão 3: Subtração simples
function subtrair(e, f) {
  return e - f;
}

//Questão 7: Área de um retângulo
function calcularAreaRetangulo(largura, altura) {
  area = multiplicar(largura, altura);
  return area;
}

//Questão 8: Par ou ímpar
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
