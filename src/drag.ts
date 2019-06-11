
export default class DragClass {
  el: HTMLElement;
  elBody: HTMLElement;
  constructor(el:HTMLElement = document.querySelector('#menu'), elBody: HTMLElement = document.querySelector('body')) {
    this.el = el;
    this.elBody = elBody;
  }

  get getEl(): HTMLElement {
    return this.el;
  }

  get getElBody(): HTMLElement {
    return this.elBody;
  }
}
