function loadNavbar() {
  let navbar = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="index.html">ShopEZ</a>

      <div>
        <a href="index.html" class="btn btn-outline-light me-2">Products</a>
        <a href="cart.html" class="btn btn-warning">Cart 🛒</a>
      </div>
    </div>
  </nav>
  `;

  document.getElementById("navbar").innerHTML = navbar;
}