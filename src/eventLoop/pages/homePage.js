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
    this.addEventListeners();
  }

  addEventListeners() {
    const button = this.shadowRoot.querySelector('button');
    button.addEventListener('click', (ev) => this.renderCharacters(ev));
  }

  renderCharacters(ev) {
    const ul = this.shadowRoot.querySelector('ul');
    ['luke', 'leia', 'han'].forEach((character) => {
      setTimeout(() => {
        for(let i = 0; i <= 1000000000; i++) {
          if(i === 1000000000) {
            const li = document.createElement('li');
            li.textContent = character;
            ul.appendChild(li);
          }
        }
      }, 0);
    })
  }

  get template() {
    const template = document.createElement('template');

    template.innerHTML = `
      <main>
        <h1>Personajes</h1>

        <button>
          mostrat personajes
        </button>

        <section>
          <ul>
          </ul>
        </section>
      </main>
    `

    return template;
  }

  render() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define(HomePage.is, HomePage);