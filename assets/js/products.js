// const container = document.getElementById("products-container");

// function displayProducts(items) {
//     container.innerHTML = "";

//     items.forEach((product, index) => {
//         container.innerHTML += `
//             <div class="product-card">
//                 <img src="${product.image}" alt="${product.name}">
//                 <h3>${product.name}</h3>
//                 <p>${product.description}</p>
//                 <h4>₹${product.price}</h4>


// <button onclick='addToCart("${product.name}")'>
//     Add To Cart
// </button>
//             </div>
//         `;
//     });
// }

// displayProducts(products);

// function filterProducts(category) {
//     if (category === "all") {
//         displayProducts(products);
//     } else {
//         const filteredProducts = products.filter((product) => {
//             return product.category === category;
//         });

//         displayProducts(filteredProducts);
//     }
// }
// const cartCount = document.getElementById("cart-count");

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// function updateCartCount() {
//     cartCount.innerText = cart.length;
// }

// function addToCart(productName) {
//     const product = products.find((item) =>
//         item.name === productName
//     );

//     cart.push(product);

// }

// localStorage.setItem("cart", JSON.stringify(cart));

// updateCartCount();


const container = document.getElementById("products-container");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// function addToCart(productName) {
//     const product = products.find((item) => item.name === productName);

//     if (!product) {
//         console.log("Product not found");
//         return;
//     }

//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     updateCartCount();
// }
function addToCart(productName) {

    const product = products.find((item) =>
        item.name === productName
    );

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    const message = document.getElementById("cart-message");

    message.classList.add("show");

    setTimeout(() => {

        message.classList.remove("show");

    }, 2000);
}

function displayProducts(items) {
    container.innerHTML = "";

    items.forEach((product) => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h4>₹${product.price}</h4>

                <button onclick='addToCart("${product.name}")'>
                    Add To Cart
                </button>
            </div>
        `;
    });
}

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

displayProducts(products);
updateCartCount();