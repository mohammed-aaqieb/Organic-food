const container = document.getElementById("products-container");

function displayProducts(items) {
    container.innerHTML = "";

    items.forEach((product) => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h4>₹${product.price}</h4>
                <button onclick='addToCart("${product.name}")'>Add to Cart</button>
            </div>
        `;
    });
}

displayProducts(products);

function filterProducts(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter((product) => {
            return product.category === category;
        });

        displayProducts(filteredProducts);
    }
}
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    cartCount.innerText = cart.length;
}

function addToCart(productName) {

    const product = products.find((item) =>
        item.name === productName
    );

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");
}

updateCartCount();