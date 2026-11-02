// 1. A classe Animal
class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }

  emitirSom() {
    console.log(`O ${this.tipo} faz um som.`);
  }
}

// 2. A classe Gato que herda de Animal
class Gato extends Animal {
  constructor(nome) {
    super('gato'); // Chama o construtor da classe pai passando 'gato'
    this.nome = nome;
  }

  miar() {
    console.log(`${this.nome} está miando.`);
  }
}

// 3. Instanciação e chamada dos métodos
const meuGato = new Gato('Bolinha');

meuGato.emitirSom(); // Saída: O gato faz um som.
meuGato.miar();      // Saída: Bolinha está miando.


O gato faz um som.
Bolinha está miando.
