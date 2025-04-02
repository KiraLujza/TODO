export default class Input {
  constructor(pElem) {
    this.pElem = pElem;
    this.view();
    this.textElem = document.querySelector("#inp");
    this.OkElem = document.querySelector("#OK");
    this.OkeventListener();
  }

  view() {
    let html = `<input type="text" id="inp" placeholder="add todo">
        <button id="OK">OK</button>`;
    this.pElem.insertAdjacentHTML("beforeend", html);
  }

  OkeventListener() {
    this.OkElem.addEventListener("click", () => {
      const e = new CustomEvent("add", { detail: this.textElem.value });
      window.dispatchEvent(e);
    });
  }
}
