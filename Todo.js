export default class ToDo {
  //privát String(adattag)
  #text;
  //privat int(adattag)
  #index;
   //inicalizálja az adattagokat és metódusokat
  constructor(text, index, pElem) {
    this.#index = index;
    this.#text = text;
    this.pElem = pElem;
    this.view();
    this.textElem = document.querySelector(".text:last-child");
    this.OKElem = this.textElem.querySelector(".ready");
    console.log(this.OKElem);
    this.deleteElem = this.textElem.querySelector(".delete:last-child")
    this.remove();
    this.ok()
  }
  //a pElemben létre hozza gombokat és azt szinezi
  view() {
    let html = `
        <p class="text" style="color:${this.#text.state?"green":"black"}">${this.#text.todoText}
        <button class="ready">✔</button>
        <button class="delete">❌</button>
        </p>
     `;
    this.pElem.insertAdjacentHTML("beforeend", html);
  }
  //létre hozza a "delete" custem eventet
  remove() {

    this.deleteElem.addEventListener("click", () => {
      const e = new CustomEvent("delete", { detail: this.#index });
      window.dispatchEvent(e);
      
    });
  }
 
  //létre hozza az "ok" custem eventet
  ok(){
    this,this.OKElem.addEventListener("click", () => {
      const e = new CustomEvent("done", { detail: this.#index})
      window.dispatchEvent(e)
    })
  }
}
