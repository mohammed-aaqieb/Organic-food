// const cartContainer = document.getElementById("cart-products");
// const cart = JSON.parse(localStorage.getItem("cart")) || [];
// const cartCount = document.getElementById("cart-count");

// cartCount.innerText = cart.length;

// cartContainer.innerHTML = "";

// const groupedCart = {};

// cart.forEach((product) => {
//     if (groupedCart[product.name]) {
//         groupedCart[product.name].quantity++;
//     } else {
//         groupedCart[product.name] = {
//             ...product,
//             quantity: 1
//         };
//     }
// });

// let grandTotal = 0;

// Object.values(groupedCart).forEach((product) => {
//     const itemTotal = product.price * product.quantity;
//     grandTotal += itemTotal;

//     cartContainer.innerHTML += `
//         <div class="cart-card">
//             <img src="${product.image}" alt="${product.name}">

//             <div>
//                 <h3>${product.name}</h3>
//                 <p>${product.description}</p>

//                 <p><b>One item price:</b> ₹${product.price}</p>
//                 <p><b>Quantity:</b> ${product.quantity}</p>
//                 <h4>Total: ₹${itemTotal}</h4>
//                 <button onclick="removeItem('${product.name}')">
//                       ❌ Remove
//                 </button>
//             </div>
//         </div>
//     `;
// });

// cartContainer.innerHTML += `
//     <div class="cart-total">
//         <h2>Grand Total: ₹${grandTotal}</h2>
//     </div>
// `;




// function removeItem(productName) {

//     const itemIndex = cart.findIndex((item) =>
//         item.name === productName
//     );

//     if (itemIndex !== -1) {

//         cart.splice(itemIndex, 1);

//         localStorage.setItem("cart", JSON.stringify(cart));

//         location.reload();
//     }
// }




const cartContainer = document.getElementById("cart-products");

const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


if (cartCount) {
    cartCount.innerText = cart.length;
}


cartContainer.innerHTML = "";


const groupedCart = {};

let grandTotal = 0;


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

                <button onclick="removeItem('${product.name}')">
                    Remove 1 Item
                </button>

            </div>

        </div>

    `;
});


cartContainer.innerHTML += `

    <div class="cart-total">

        <h2>Grand Total: ₹${grandTotal}</h2>

    </div>

`;


function removeItem(productName) {

    const itemIndex = cart.findIndex((item) =>
        item.name === productName
    );

    if (itemIndex !== -1) {

        cart.splice(itemIndex, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();
    }
}