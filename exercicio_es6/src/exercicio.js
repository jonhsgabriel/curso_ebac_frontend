const alunos = [
    { nome: "Jonas", nota: 2},
    { nome: "João", nota: 8 },
    { nome: "Lucas", nota: 4},
    { nome: "Maria", nota: 7.5 },
    { nome: "Pedro", nota: 9 },
    { nome: "Ana", nota: 3 },
    { nome: "Carlos", nota: 8.5 },
    { nome: "Daniel", nota: 6},
];

function exibeAlunos(alunos) {
    console.log('ALUNOS:');
    for(let i = 0; i < alunos.length; i++) {
        console.log(alunos[i].nome);
    }
    console.log('');
    console.log('ALUNOS APROVADOS:');
    for(let i = 0; i < alunos.length; i++) {
        if(alunos[i].nota >= 6) {

            console.log(`Aprovado(a): ${alunos[i].nome}`);
        }
    }
}

exibeAlunos(alunos);