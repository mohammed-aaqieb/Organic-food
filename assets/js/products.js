// Products page script
console.log('Products script loaded');
const container = document.getElementById("products-container");

products.forEach((product) => {
    container.innerHTML += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <h4>${product.price}</h4>
      <button>Buy Now</button>
    </div>
  `;
});