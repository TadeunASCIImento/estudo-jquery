function getValorTotalCarrinho(){
    let total = 0;
    [ ...$(".item") ].forEach(item => {
        if ($('.quantidade',item).val() < 0){
            $('.quantidade', item).val('');
        } else {
            $(".totalizador").val('');
            total += $('.quantidade',item).val() * convert($('.preco',item).text());
            $('.totalizador').text('Total da Compra:'.concat(money(total, 'BRL')));                                                                                 
        }
    });
}

function money(value, currency){
    return value.toLocaleString(currency,{style:'currency', currency: currency});
}

function convert(string){
    return string.split("R$").join('').replace(',','.');
}

function onLoadPage(){
    const quantidades = document.querySelectorAll('.quantidade');
    quantidades.forEach(e => {
        e.onchange = getValorTotalCarrinho;
    });
}
window.onload = onLoadPage;