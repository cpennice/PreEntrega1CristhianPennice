let totalValue = 0;
let numberOfItems = prompt("How many items do you want to add to your cart?");
for (let i = 0; i < numberOfItems; i++) {
  let itemName = prompt("Enter the name of item " + (i + 1) + ":");
  let itemPrice = parseFloat(prompt("Enter the price of " + itemName + ":"));
  let itemQuantity = parseInt(
    prompt("Enter the quantity of " + itemName + ":")
  );
  if (itemQuantity > 0) {
    totalValue += itemPrice * itemQuantity;
  }
}
alert("The total value of items in your cart is $" + totalValue);
