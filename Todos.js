import ToDo from "./Todo.js";
import Input from "./TodoInput.js";
export default class ToDos {
  //privát lista (adattag)
  #lista = [];
  //inicalizálja az adattagokat és metódusokat
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
  //meg hívja a custem eventet és a listából kitöröl egy elemet
  removeEvent() {
    window.addEventListener("delete", (event) => {
      this.#lista.splice(event.detail, 1);
      this.viewTodos();
    });
  }
  //meghívja a custem eventet és hozzáad egy elemet a listáhóz
  addEvent() {
    window.addEventListener("add", (event) => {
      let obj = { todoText: event.detail, state: false };
      this.#lista.push(obj);
      this.viewTodos();
    });
  }
   //meghívja a custem eventet és a gomb megnyomása után hozzá adja az elemet a listáhóz
  okEvent() {
    window.addEventListener("done", (event) => {
        
      this.#lista[event.detail].state = true;
      this.viewTodos();
      console.log(this.#lista)
    });
  }//végig megy  listán éa a pElembe létre hoz minden elemhez egy külön pédányt
  viewTodos() {
    this.pElem.innerHTML = "";
    for (let index = 0; index < this.#lista.length; index++) {
      const element = this.#lista[index];
      new ToDo(element, index, this.pElem);
    }
  }
  //létre hoz egy új elemet
  viewInput() {
    new Input(this.ipElem);
  }
}
