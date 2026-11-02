// Função construtora apenas com os atributos fundamentais
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Compartilhando o método de forma única na memória através do protótipo
Pessoa.prototype.saudacao = function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

// Criando instâncias
const pessoa1 = new Pessoa("Ana", 30);
const pessoa2 = new Pessoa("João", 25);

// Invocando os métodos
pessoa1.saudacao(); // Saída: Olá, meu nome é Ana e tenho 30 anos.
pessoa2.saudacao(); // Saída: Olá, meu nome é João e tenho 25 anos.

sim,a saida é a mesma.