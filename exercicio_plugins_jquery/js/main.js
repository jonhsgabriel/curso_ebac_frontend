$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome:'Por favor digite seu nome',
            telefone:'Por favor digite seu telefone',
            cpf:'Por favor digite seu CPF',
            cep:'Por favor digite seu CEP'
        },
        submitHandler: function(form){
            if (form.nome.value && form.email.value && form.telefone.value && form.cep.value && form.cpf.value) {
                form.submit();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        }
    })
})