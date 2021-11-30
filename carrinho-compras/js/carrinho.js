function getValorTotalCarrinho(){
    let total = 0;
    const itens = document.querySelectorAll(".item");
    for (let i = 0,len = itens.length; i < len;i++){
        const quantidade = itens[i].querySelector(".quantidade").value;
        if(quantidade < 0){
            itens[i].querySelector(".quantidade").value = '';
        } else {
            const preco = formatToNumber(itens[i].querySelector(".preco").innerText);
            const _total = formatMoney(total += quantidade * parseFloat(preco));                                                                                 
            let totalizador = document.querySelector(".totalizador");
            totalizador.innerText = '';
            totalizador.innerText = 'Total da Compra:'.concat(_total);
        }
    }
}

function formatMoney(string){
    return string.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
}

function formatToNumber(string){
    return string.split("R$").join('').replace(',','.');
}
