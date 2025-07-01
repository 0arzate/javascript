import { styles } from "./simple-card-styles";

class SimpleCard extends HTMLElement {
  static get is() {
    return 'simple-card'
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get template() {
    const template = document.createElement('template');
    const isLoading = this.hasAttribute('isLoading');
    const className = isLoading ? 'skeleton' : ''

    template.innerHTML = `
      ${styles}
      <main class="${className}">
        <p></p>
        <p></p>
        <p></p>
      </main>
    `

    return template;
  }

  render() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true))
  }
}

customElements.define(SimpleCard.is, SimpleCard)