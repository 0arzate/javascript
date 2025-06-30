class SkeletonPage extends HTMLElement {
  static get is() {
    return 'skeleton-page'
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get templete() {
    const template = document.createElement('template')

    template.innerHTML = `
      <main>
        <h1>Skeleton page</h1>
      </main>
    `

    return template;
  }

  render() {
    this.shadowRoot.appendChild(this.templete.content.cloneNode(true));
  }
}

customElements.define(SkeletonPage.is, SkeletonPage);