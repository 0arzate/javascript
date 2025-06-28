class CustomElement extends HTMLElement {
  static get is() {
    return 'custom-element';
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('click-custom-element', {
      bubbles: true,
      composed: true,
    }))
  }

  addEventListeners() {
    const button = this.shadowRoot.querySelector('button');
    button.addEventListener('click', (ev) => this.handleClick(ev));
  }

  get template() {
    const template = document.createElement('template');

    template.innerHTML = `
      <main>
        <p>Emitir evento personalizado</p>
        <button>Burbujear evento</button>
        <section>
          <button>Evento hijo</button>
        </section>
      </main>
    `

    return template;
  }

  render() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define(CustomElement.is, CustomElement);