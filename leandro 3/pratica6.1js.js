// Criação do objeto com propriedades e métodos
const pessoa = {
    nome: "Walter",
    idade: 43,
    getNome: function() {
        return this.nome;
    },
    setNome: function(novoNome) {
        this.nome = novoNome;
    }
};

// 1. Exibe a mensagem com o nome inicial ("Walter")
confirm(pessoa.getNome() + " gosta de vermelho");

// 2. Altera a propriedade 'nome' utilizando o método setNome
pessoa.setNome("Jesse");

// 3. Exibe novamente com o nome modificado ("Jesse")
confirm(pessoa.getNome() + " gosta de vermelho");
