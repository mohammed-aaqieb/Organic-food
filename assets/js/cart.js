const cartContainer = document.getElementById("cart-products");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");

cartCount.innerText = cart.length;

cartContainer.innerHTML = "";

const groupedCart = {};

cart.forEach((product) => {
    if (groupedCart[product.name]) {
        groupedCart[product.name].quantity++;
    } else {
        groupedCart[product.name] = {
            ...product,
            quantity: 1
        };
    }
});

let grandTotal = 0;

Object.values(groupedCart).forEach((product) => {
    const itemTotal = product.price * product.quantity;
    grandTotal += itemTotal;

    cartContainer.innerHTML += `
        <div class="cart-card">
            <img src="${product.image}" alt="${product.name}">

            <div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>

                <p><b>One item price:</b> ₹${product.price}</p>
                <p><b>Quantity:</b> ${product.quantity}</p>
                <h4>Total: ₹${itemTotal}</h4>
            </div>
        </div>
    `;
});

cartContainer.innerHTML += `
    <div class="cart-total">
        <h2>Grand Total: ₹${grandTotal}</h2>
    </div>
`;