import { navigate } from "../../index.js";

class HomePage extends HTMLElement {
  static get is() {
    return 'home-page';
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.updatePageTitle();
    this.addEventListeners();
  }

  addEventListeners() {
    const button = this.shadowRoot.querySelector('button');

    button.addEventListener('click', (ev) => navigate(ev.target.id));
  }

  updatePageTitle() {
    const title = document.querySelector('title')

    title.textContent = 'Home'
  }

  get template() {
    const template = document.createElement('template');

    template.innerHTML = `
      <main>
        <h1>Home page</h1>

        <button id="skeleton">skeleton page</button>
      </main>
    `

    return template;
  }

  render() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define(HomePage.is, HomePage);