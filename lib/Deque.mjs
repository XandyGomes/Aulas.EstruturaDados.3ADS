export default class Deque {
  #data; // vetor privado

  constructor() {
    this.#data = []; // vetor vazio
  }

  // Inserção no início
  insertFront(val) {
    this.#data.unshift(val);
  }

  // Inserção no final
  insertBack(val) {
    this.#data.push(val);
  }

  // Remoção no início
  removeFront() {
    return this.#data.shift();
  }

  // Remoção no final
  removeBack() {
    return this.#data.pop();
  }

  // Consulta o início
  peekFront() {
    return this.#data[0];
  }

  // Consulta o final
  peekBack() {
    return this.#data[this.#data.length - 1];
  }

  // consulta se está vazio
  get isEmpty() {
    return this.#data.length === 0;
  }

  //imprime o deque(efeitos de depuração)
  print() {
    let output = "[ ";
    for (let i = 0; i < this.#data.length; i++) {
      if (output !== "[ ") output += ", ";
      output += `(${i}):${this.#data[i]}`;
    }
    return output + " ]";
  }
}
