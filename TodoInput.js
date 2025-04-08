export default class Input {
  //inicalizálja a metódusokat és adattagokat
  constructor(pElem) {
    this.pElem = pElem;
    this.view();
    this.textElem = document.querySelector("#inp");
    this.OkElem = document.querySelector("#OK");
    this.OkeventListener();
  }
  //a pElembe létrehoz egy input elemet
  view() {
    let html = `<input type="text" id="inp" placeholder="add todo">
        <button id="OK">OK</button>`;
    this.pElem.insertAdjacentHTML("beforeend", html);
  }
  //custem event létrehozása ami kattintás alapon működik
  OkeventListener() {
    this.OkElem.addEventListener("click", () => {
      const e = new CustomEvent("add", { detail: this.textElem.value });
      window.dispatchEvent(e);
    });
  }
}
