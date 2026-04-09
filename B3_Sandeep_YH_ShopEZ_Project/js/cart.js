function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Convert price to number (important)
  price = Number(price);

  // Check if item already exists
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}


// ✅ OPTIONAL: remove item
function removeFromCart(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter(item => item.name !== name);

  localStorage.setItem("cart", JSON.stringify(cart));

  location.reload(); // refresh cart page
}


// ✅ OPTIONAL: decrease quantity
function decreaseQty(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let item = cart.find(i => i.name === name);

  if (item) {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter(i => i.name !== name);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  location.reload();
}