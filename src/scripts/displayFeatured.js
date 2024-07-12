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
        View Products
        <i class="ri-arrow-right-line arrow"></i>
      </a>
      <span class="line"></span>

      <p>${fProducts.price}</p>
    </div>
  </div>
</div>

      `;
  });

  document.querySelector(".slide-container").innerHTML = featuredProductHTML;
}
