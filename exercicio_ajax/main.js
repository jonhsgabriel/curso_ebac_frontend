document.addEventListener('DOMContentLoaded', function() {
    const nome = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#followers');
    const seguindo = document.querySelector('#following');
    const linkGit = document.querySelector('#link');

    fetch('https://api.github.com/users/jonhsgabriel')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            nome.innerText = json.name;
            userName.innerText = json.login;
            avatar.src = json.avatar_url;
            repositorio.innerText = json.public_repos;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            linkGit.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Ocorreu um erro no recebimento da resposta");
        }) 
})