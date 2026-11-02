
// Completando os espaços em branco:

// Os métodos usam this para acessar e modificar a matrícula do próprio objeto.

const pessoa = {
    matricula: 123,
    getMatricula: function() {
        return this.matricula; // Retorna o valor da propriedade do objeto
    },
    setMatricula: function(mat) {
        this.matricula = mat; // Altera o valor da propriedade com o parâmetro recebido
    }
};
