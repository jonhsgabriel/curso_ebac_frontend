$(document).ready(function () {
    $('#form-tarefa').on('submit', function (e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
        novoItem.text(novaTarefa); 
        $('ul').append(novoItem); 
        $('#nome-tarefa').val('');
        novoItem.on('click', function () {
            novoItem.toggleClass('concluido');
        });
    });
});