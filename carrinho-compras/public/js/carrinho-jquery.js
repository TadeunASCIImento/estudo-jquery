$(document).ready(() => {
    onloadPage();
});

function getPurchaseTotalValue(){
    let total = 0;
    [ ...$(".item") ].forEach(item => {
        const $quantidade = $('.quantidade', item);
        if ($quantidade.val() < 0){
            $quantidade.val('');
        } else {
            const $totalizador = $(".totalizador");
            total += $quantidade.val() * number($('.preco',item).text());
            $totalizador.text('Total da Compra:'.concat(money(total, 'BRL')));                                                                                 
        }
    });
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
function money(value, currency){
    return value.toLocaleString(currency,{style:'currency', currency: currency});
}

function number(string){
    return string.split("R$").join('').replace(',','.');
}

function onloadPage(){
    $('.quantidade').change(() => getPurchaseTotalValue());
}

