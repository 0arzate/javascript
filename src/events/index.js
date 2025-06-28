const button = document.querySelector('button');
const article = document.querySelector('article');
const section = document.querySelector('section');

button.addEventListener('click', () => {
  console.log('button');
});

article.addEventListener('click', () => {
  console.log('article');
});

section.addEventListener('click', () => {
  console.log('section');
  console.log('section fetcing data...');
});

const customElement = document.querySelector('custom-element');

customElement.addEventListener('click-custom-element', (ev) => {
  console.log('click-custom-element');
});

section.addEventListener('click-custom-element', (ev) => {
  console.log('section click-custom-element');
});