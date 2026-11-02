// ObjetoContato para a Versão 1
const contatoV1 = {
    nome: "",
    telefone: "",
    setNome: function(n) { this.nome = n; },
    setFone: function(f) { this.telefone = f; },
    getNome: function() { return this.nome; },
    getFone: function() { return this.telefone; }
};

// Função chamada pelo evento inline do botão Salvar
function salvarV1() {
    const n = document.getElementById("nomeV1").value;
    const f = document.getElementById("foneV1").value;
    
    contatoV1.setNome(n);
    contatoV1.setFone(f);
    
    // Altera a tela reescrevendo a string de HTML interno
    document.getElementById("resposta").innerHTML = "<p>Contato salvo (V1)</p>";
}

// Função chamada pelo evento inline do botão Mostrar
function mostrarV1() {
    document.getElementById("resposta").innerHTML = 
        "<p>Nome: " + contatoV1.getNome() + " Telefone: " + contatoV1.getFone() + "</p>";
}


