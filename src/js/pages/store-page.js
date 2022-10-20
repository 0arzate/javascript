import '../components/app-input.js'

export class StorePage extends HTMLElement {
	static get is() {
		return 'store-page'
	}

	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	getTemplate() {
		const template = document.createElement('template')
		template.innerHTML = `
      <div>
        <app-input label="Precio del producto" placeholder="Ingresa un numero"></app-input>
      </div>
    `
		return template
	}

	render() {
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
	}

	connectedCallback() {
		this.render()
	}
}

customElements.define(StorePage.is, StorePage)
