// Sample product data (replace this with your actual product data)
const products = [
    { name: "Men's Sneakers", price: 59.99, image: "men-sneakers.jpg" },
    { name: "Women's Boots", price: 79.99, image: "women-boots.jpg" },
    { name: "Kid's Running Shoes", price: 39.99, image: "kids-running-shoes.jpg" }
  ];
  
  // Function to display products
  function displayProducts() {
    const productsSection = document.getElementById('products');
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <button>Add to Cart</button>
      `;
      productsSection.appendChild(productCard);
    });
  }
  
  // Call the function to display products when the page loads
  window.onload = displayProducts;
  