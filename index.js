var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // The methods, especially viewCart() require careful planning and a sharp eye.
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
  // HINT: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find Array.prototype.splice() to be useful.
  // If the cart does not contain a matching item, the function should return That item is not in your cart.
}

function placeOrder(cardNumber) {
  // cardNumber
  // total

  // If a card number is received, the function should empty the cart array
  // return Your total cost is $71, which will be charged to the card 83296759.
  // (where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder())
  var myString = "Your total cost is $71, which will be charged to the card " + cardNumber +".";

  // If no argument is received, the function should print out
  var myString = "Sorry, we don't have a credit card on file for you..";
}
