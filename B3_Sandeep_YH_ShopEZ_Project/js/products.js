function loadProducts() {
  fetch("data/products.json")
    .then(response => response.json())
    .then(products => displayProducts(products));
}

function displayProducts(products) {
  let container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card h-100">

          <a href="product.html?name=${product.name}&price=${product.price}&image=${product.image}&desc=${product.description}">
            <img src="${product.image}" class="card-img-top" height="250">
          </a>

          <div class="card-body text-center d-flex flex-column">
            <h5>${product.name}</h5>
            <p>₹${product.price}</p>

            <button class="btn btn-primary mt-auto"
              onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    `;
  });
}