function Automovel(nome,marca,cor,velocidade) {
    let _nome = nome;
    this.marca = marca;
    this.cor = cor;
    this.velocidade = velocidade;

    this.getNome = function() {
        return _nome;
    }

    this.setNome = function(novo_nome) {
        _nome = novo_nome;
    }

    this.acelera = function() {
        const acelerou = velocidade + 1;
        console.log("Acelerou " + acelerou + "kms");  
    }
}

function Carro(nome,marca,cor,velocidade,qtd_portas) {
    Automovel.call(this,nome,marca,cor,velocidade);
    this.qtd_portas = qtd_portas;

    this.acelera = function() {
        const acelerou = velocidade + 10;
        console.log("Acelerou " + acelerou + "kms");  
    }
}

function Moto(nome,marca,cor,velocidade,cilindrada) {
    Automovel.call(this,nome,marca,cor,velocidade);
    this.velocidade = velocidade;

    if(cilindrada >= 600) {
        this.acelera = function() {
            const acelerou = velocidade + 80;
            console.log("Acelerou " + acelerou + "kms");  
        }
    } else {
        this.acelera = function() {
            const acelerou = velocidade + 50;
            console.log("Acelerou " + acelerou + "kms");  
        }
    }
}

const automovel1 = new Automovel("RX7","mazda","vermelho",10);
const carro1 = new Carro("Celta", "Chevrolet", "azul", 50, 4);
const moto1 = new Moto("Hornet" , "Honda", "dourado", 120 , 200);









