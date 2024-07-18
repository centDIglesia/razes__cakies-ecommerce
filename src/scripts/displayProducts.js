import { allproducts } from "../Data/all-Products";

export default function displayAllProducts() {
    let allProductHTML = "";
  
    allproducts.forEach((product) => {
        allProductHTML += `
        <div class="product__card">
            <img
              src="${product.image}"
              alt="${product.productName}"
            />

            <div class="product-card__description">
              <h3 class="product__name">${product.productName}</h3>

              <span class="product__price">$ ${product.price}</span>
              <p>${product.description}</p>
            </div>

            <div class="product-card_actions">
              <a href="#" class="product__customize-btn btn">Customize it</a>
              <i class="ri-shopping-basket-2-fill"></i>
            </div>

            <span class="product__ratings">
                <i class="ri-star-fill"></i> 
              ${product.ratings}
            </span>
          </div>
      `;
    });
  
    document.querySelector(".products__list-grid").innerHTML = allProductHTML;
}

