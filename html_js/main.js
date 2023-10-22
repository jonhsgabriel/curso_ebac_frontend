const form = document.getElementById('form-numero');
const valor_A = document.getElementById('numero-a');
const valor_B = document.getElementById('numero-b');
let formEValido = false;

function validaCampo(campoA,campoB){
    return parseFloat(campoA) < parseFloat(campoB)
};
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const mensagemSucesso = `O valor é válido porque : <b>${valor_A.value}</b> é menor que <b>${valor_B.value}</b>.`;
    formEValido = validaCampo(valor_A.value, valor_B.value);
    if (formEValido){
        const containerMenssagem = document.querySelector('.sucess-menssage');
        containerMenssagem.innerHTML = mensagemSucesso; 
        containerMenssagem.style.display = 'block';
        valor_A.value= '';
        valor_B.value= '';
    }else{
        let erroMessage = document.querySelector('.error-message');
        const mensagemSucesso = `O valor é inválido porque : <b>${valor_A.value}</b> é maior que <b>${valor_B.value}</b>.`;
        erroMessage.innerHTML = mensagemSucesso; 
        erroMessage.style.display = 'block';
        valor_A.value= '';
        valor_B.value= '';
    };
});




