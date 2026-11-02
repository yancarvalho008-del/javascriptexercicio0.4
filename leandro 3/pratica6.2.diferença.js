// Objeto Contato para a Versão 2
const contatoV2 = {
    nome: "",
    telefone: "",
    setNome: function(n) { this.nome = n; },
    setFone: function(f) { this.telefone = f; },
    getNome: function() { return this.nome; },
    getFone: function() { return this.telefone; }
};

// Captura de elementos do DOM por ID
const btnSalvar = document.getElementById("salvar");
const btnMostrar = document.getElementById("mostrar");
const divRespostaV2 = document.getElementById("respostaV2");
const divContato = document.getElementById("contato");

// Ouvinte de evento para a ação de Salvar
btnSalvar.addEventListener("click", function() {
    const n = document.getElementById("nomeV2").value;
    const f = document.getElementById("foneV2").value;
    
    contatoV2.setNome(n);
    contatoV2.setFone(f);
    
    // Criação dinâmica de nós na árvore do DOM
    const pSalvo = document.createElement("p");
    pSalvo.innerText = "Contato salvo";
    
    // Adiciona o nó filho sem destruir o conteúdo anterior do pai
    divRespostaV2.appendChild(pSalvo);
});

// Ouvinte de evento para a ação de Mostrar
btnMostrar.addEventListener("click", function() {
    // Criação do nó de texto estruturado
    const pInfo = document.createElement("p");
    pInfo.innerText = "Nome: " + contatoV2.getNome() + " Telefone: " + contatoV2.getFone();
    
    // Injeta o novo parágrafo mantendo o histórico de contatos na tela
    divContato.appendChild(pInfo);
});
