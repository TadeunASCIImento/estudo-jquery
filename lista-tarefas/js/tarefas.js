// Cria uma nova tarefa na lista
function createTask(){
    $('#tarefa').off('keydown').keydown((event) => {
        if (event.which === 13){
            if($('#tarefa').val() !== ''){
              const tarefa    =  $('#tarefa').val();
              const row       =  $('<tr />').addClass('row-tarefa');
              const dataTask  =  $('<td />').text(tarefa);
              const link      =  $('<a />' , {href:"#"});
              const dataIcone =  $('<td />').append(link);
              const imgIcone  =  $('<img />').attr({src:'img/trash_icon.png'});
              link.append(imgIcone);
              $('.tbody').append(row.append(dataTask).append(dataIcone));          
            }
        }
    }); 
}
createTask();
