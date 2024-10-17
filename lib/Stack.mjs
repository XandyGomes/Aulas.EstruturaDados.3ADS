export default class Stack{
    //atributos
    #data

    constructor(){
        this.#data = []
    }   

    //métodos
    insert(val){
        this.#data.push(val)
    }

    remove(){
        return this.#data.pop()
    }

    peek(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0
    }

    print(){
        return JSON.stringify(this.#data)
    }

}