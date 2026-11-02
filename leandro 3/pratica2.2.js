// Seleciona o elemento container
const container = document.getElementById('container');

// 1. Cria uma <div> com o texto
const novaDiv = document.createElement('div');
novaDiv.textContent = 'Este é um novo elemento';

// 2. Adiciona a classe 'classe-exemplo' e a cor azul
novaDiv.classList.add('classe-exemplo');
novaDiv.style.color = 'blue';

// 3. Insere a <div> no container
container.appendChild(novaDiv);

// 4. Localiza com querySelector e remove com removeChild ao clicar no botão
const botaoRemover = document.getElementById('remover');
botaoRemover.addEventListener('click', () => {
    const elementoParaRemover = container.querySelector('.classe-exemplo');
    if (elementoParaRemover) {
        container.removeChild(elementoParaRemover);
        botaoRemover.disabled = true;
        botaoRemover.textContent = 'Elemento removido';
    }
});
