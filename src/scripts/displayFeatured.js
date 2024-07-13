import { featuredProductsData } from "../Data/featured-products";

export default function displayFeaturedProducts() {
  let featuredProductHTML = "";

  featuredProductsData.forEach((fProducts) => {
    featuredProductHTML += `
      <div class="featured__product-container" id="${fProducts.id}">
  <div class="featured__Images">
    <img class="large__image" src="${fProducts.firstImage}" alt="${fProducts.title}">
    <img src="${fProducts.secondImage}" alt="${fProducts.title}">
    <img src="${fProducts.thirdImage}" alt="${fProducts.title}">
  </div>

  <div class="featured__Info">
    <div class="featured__Info-description">
      <h2>${fProducts.title}</h2>
      <p>${fProducts.description}</p>
    </div>

    <div class="featured__Info-button">

      <a href="#" class="btn">
        Add to cart
  
      </a>
      <span class="line"></span>

      <p class="fproduct__price">	&#8369 ${fProducts.price}</p>
    </div>
  </div>
</div>

      `;
  });

  document.querySelector(".slide-container").innerHTML = featuredProductHTML;
}
