// exibe o texto da frase no console.
const paragrafo2 = $(".paragrafo2").text();
console.log(paragrafo2);

// exibe a quantidade de palavras da frase no console.
let quantidade  = paragrafo2.split(" ").length;
console.log(quantidade);

let tamanho = $(".tamanho");
tamanho.text(quantidade);


