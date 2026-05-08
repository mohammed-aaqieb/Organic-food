// // Products page script
// console.log('Products script loaded');
// const container = document.getElementById("products-container");

// products.forEach((product) => {
//     container.innerHTML += `
//     <div class="product-card">
//       <img src="${product.image}" alt="${product.name}">
//       <h3>${product.name}</h3>
//       <p>${product.description}</p>
//       <h4>${product.price}</h4>
//       <button>Add to cart</button>

//     </div>
//   `;
// });



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
                <button>Add to Cart</button>
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