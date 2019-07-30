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
  // The `total()` function accepts no arguments, iterates through the `cart` array, and returns the current total value of the items in the cart.

  var myValue;

  // var cart = [];

  // return myValue;

  return myTotal;
}

function removeFromCart(item) {
  // If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
  
  // HINT: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find Array.prototype.splice() to be useful.

  // var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

  // var months = ['Jan', 'March', 'April', 'June'];
  // months.splice(1, 0, 'Feb');
  // // inserts at index 1
  // console.log(months);
  // // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']
  // 
  // months.splice(4, 1, 'May');
  // // replaces 1 element at index 4
  // console.log(months);
  // // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
  
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
