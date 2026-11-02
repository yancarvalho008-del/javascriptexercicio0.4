// Definição da função construtora com propriedades e método internos
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.saudacao = function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
}

// Criando instâncias usando a palavra-chave 'new'
const pessoa1 = new Pessoa("Ana", 30);
const pessoa2 = new Pessoa("João", 25);

// Invocando os métodos de cada instância
pessoa1.saudacao(); // Saída: Olá, meu nome é Ana e tenho 30 anos.
pessoa2.saudacao(); // Saída: Olá, meu nome é João e tenho 25 anos.
