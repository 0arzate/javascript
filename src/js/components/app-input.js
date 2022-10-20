export class AppInput extends HTMLElement {
	static get is() {
		return 'app-input'
	}

	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.label = this.getAttribute('label')
		this.placeholder = this.getAttribute('placeholder')
	}

	getTemplate() {
		const template = document.createElement('template')
		template.innerHTML = `
      <div>
        <label>${this.label}</label>
        <input type="text" placeholder="${this.placeholder}">
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

customElements.define(AppInput.is, AppInput)
