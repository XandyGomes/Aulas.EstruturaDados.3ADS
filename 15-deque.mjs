import Deque from "./lib/Deque.mjs";

let listacompras = new Deque();

console.log(`A lista de compras está vazia? 
    ${listacompras.isEmpty ? "Sim" : "Não"}`
   );

//Alimentícios -> início
console.log("### Lista de Compras ###");
listacompras.insertFront("Arroz");
listacompras.insertFront("Feijão");
listacompras.insertFront("Carne");
listacompras.insertFront("Macarrão");
console.log(listacompras.print());

//Higiene/Limpeza -> final
listacompras.insertBack("Sabonete");
listacompras.insertBack("Detergente");
listacompras.insertBack("Shampoo");
listacompras.insertBack("Desinfetante");
console.log(listacompras.print());

listacompras.insertFront("Café");

listacompras.insertBack("Sabão em pó");

console.log(listacompras.print());

let removido = listacompras.removeBack();
console.log("Item removido do final: " + removido);
console.log(listacompras.print());

removido = listacompras.removeFront();
console.log("Item removido do início: " + removido);
console.log(listacompras.print());

console.log("O primeiro item da lista é: " + listacompras.peekFront());
console.log("O último item da lista é: " + listacompras.peekBack());