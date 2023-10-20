const app = document.querySelector('#app')

const products = [
  {
    name: 'eggs',
    checked: false,
    price: 20,
  },
  {
    name: 'apples',
    checked: false,
    price: 50,
  },
  {
    name: 'chicken',
    checked: false,
    price: 90,
  },
]

products.forEach(
  function (product) {
    console.log(this.age)
    app.innerHTML += `
    <div class="product">
      <input type="checkbox"/>
      <p>${product.name}: $${product.price}</p>
    </div>
  `
  },
  {
    age: 27,
  }
)
