import { AddProductCommand } from "./add-product-command.js";
import { ClearCardCommand } from "./clear-card-command.js";
import { CommandExecuter } from "./command-executer.js";

const shoppingCart = [];

const commandExecuter = CommandExecuter();
const addProductCommand = new AddProductCommand(shoppingCart);
const clearCardCommand = new ClearCardCommand(shoppingCart);

const buttonAddProduct = document.getElementById("add-product");
const buttonClearCard = document.getElementById("clear-shopping-car");
const buttonRemoveProduct = document.getElementById("remove-product");

const productsCounter = document.getElementById("shopping-cart-counter");

buttonAddProduct.addEventListener("click", () => {
  commandExecuter.executeCommand(addProductCommand, ["product"]);
  productsCounter.innerText = shoppingCart.length;
});