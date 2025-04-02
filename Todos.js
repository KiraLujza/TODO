import ToDo from "./Todo.js";
import Input from "./TodoInput.js";
export default class ToDos {
  #lista = [];
  constructor(pElem, ipElem, lista) {
    this.#lista = lista;
    this.pElem = pElem;
    this.ipElem = ipElem;
    this.viewTodos();
    this.viewInput();
    this.removeEvent();
    this.addEvent();
    this.okEvent();
  }

  removeEvent() {
    window.addEventListener("delete", (event) => {
      this.#lista.splice(event.detail, 1);
      this.viewTodos();
    });
  }
  addEvent() {
    window.addEventListener("add", (event) => {
      let obj = { todoText: event.detail, state: false };
      this.#lista.push(obj);
      this.viewTodos();
    });
  }

  okEvent() {
    window.addEventListener("done", (event) => {
        
      this.#lista[event.detail].state = true;
      this.viewTodos();
      console.log(this.#lista)
    });
  }

  viewTodos() {
    this.pElem.innerHTML = "";
    for (let index = 0; index < this.#lista.length; index++) {
      const element = this.#lista[index];
      new ToDo(element, index, this.pElem);
    }
  }

  viewInput() {
    new Input(this.ipElem);
  }
}
