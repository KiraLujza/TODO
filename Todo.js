export default class ToDo {
  #text;
  #index;
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
  view() {
    let html = `
        <p class="text" style="color:${this.#text.state?"green":"black"}">${this.#text.todoText}
        <button class="ready">✔</button>
        <button class="delete">❌</button>
        </p>
     `;
    this.pElem.insertAdjacentHTML("beforeend", html);
  }

  remove() {

    this.deleteElem.addEventListener("click", () => {
      const e = new CustomEvent("delete", { detail: this.#index });
      window.dispatchEvent(e);
      
    });
  }
 
  
  ok(){
    this,this.OKElem.addEventListener("click", () => {
      const e = new CustomEvent("done", { detail: this.#index})
      window.dispatchEvent(e)
    })
  }
}
