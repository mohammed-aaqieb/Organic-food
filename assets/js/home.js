const featuredContainer = document.getElementById("featuredProducts");



const featuredProducts =
products.filter((product) =>

    product.name === "Organic Apple" ||

    product.name === "Organic Strawberry" ||

    product.name === "Organic Watermelon" ||

    product.name === "Organic Tomato" ||

    product.name === "Organic Onion" ||

    product.name === "Organic Cucumber"
);



featuredProducts.forEach((product) => {

    featuredContainer.innerHTML += `

        <div class="featured-card">

            <img src="${product.image}"
                 alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <h4>₹${product.price}</h4>

            <a href="products.html"
               class="product-btn">

               Buy Now

            </a>

        </div>

    `;
});