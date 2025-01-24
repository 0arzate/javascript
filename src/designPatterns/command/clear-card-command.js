export class ClearCardCommand {
  constructor(products = []) {
    this.products = products;
    this.previosProducts = [];
  }

  execute() {
    this.previosProducts = this.products;
    this.prpducts = [];
  }

  undo() {
    this.products = this.previosProducts;
  }
}