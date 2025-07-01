import './pages/home-page/home-page.js'
import './pages/skeleton-page/skeleton-page.js'

const app = document.querySelector('#app')

app.appendChild(document.createElement('home-page'))

function renderPage () {
  let routeName = window.location.pathname.replace('/', '')
  console.log('routeName', routeName)
  if (routeName.includes('index.html') || routeName === '') {
    routeName = 'home'
  }

  app.innerHTML = ''
  app.appendChild(document.createElement(`${routeName}-page`))
}

export function navigate (pageName) {
  window.history.pushState({}, '', `/${pageName}`)
  renderPage()
}

window.addEventListener('popstate', renderPage)
window.addEventListener('load', renderPage)
