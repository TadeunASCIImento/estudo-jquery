$(document).ready(() => {
    onloadPage();
});

function getPurchaseTotalValue(){
    let total = 0;
    [...$(".item")].forEach(item => {
        if ($('.quantidade',item).val() < 0){
            $('.quantidade', item).val('');
        } else {
            $(".totalizador").val('');
            total += $('.quantidade',item).val() * number($('.preco',item).text());
            $('.totalizador').text('Total da Compra:'.concat(money(total, 'BRL')));                                                                                 
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