document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.error('Error fetching products:', error));
});

// Function to display products on the page
function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    const template = document.getElementById('product-template');

    products.forEach(product => {
        // Clone the template
        const clone = document.importNode(template.content, true);
        clone.querySelector('.product-title').textContent = product.title;
        clone.querySelector('.product-image').src = product.image;
        clone.querySelector('.product-image').alt = product.title;
        clone.querySelector('.product-price').innerHTML = `<strong>Price:</strong> $${product.price}`;
        clone.querySelector('.product-description').textContent = product.description;

        // Append the populated template to the container
        productsContainer.appendChild(clone);
    });
}
