export class AddProductCommand {
  constructor(products = []) {
    this.products = products;
  }

  execute(newProduct) {
    this.products.push(newProduct);
  }

  undo() {
    this.products.pop();
  }
}