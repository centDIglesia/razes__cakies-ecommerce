import { popularProductsData } from "../Data/popular-productData";

export default function displayPopularProducts() {
  let PopularProductHTML = "";

  popularProductsData.forEach((product) => {
    PopularProductHTML += `
      <div class="Popular__products__card ${product.id}">
        <img src="${product.card.image.src}" alt="${product.card.image.alt}" />
  
        <div class="products__card">
          <div class="popular__info">
            <div class="popular__name">
              <p class="popular__product-name">${product.card.product.name}</p>
              <span class="popular__description">
                ${product.card.product.description}
              </span>
            </div>
            <span class="popular__ratings">
              <i class="ratings ${product.card.product.ratings.icon}"></i>${product.card.product.ratings.value}</span>
          </div>
  
          <div class="popular__buttons">
            <span class="popular__price">${product.card.actions.price}</span>
            <span class="line"></span>
            <a href="${product.card.actions.button.href}" class="popular__btn btn">${product.card.actions.button.text}</a>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector(".Popular__products__card-container").innerHTML = PopularProductHTML;
}
