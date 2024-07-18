// import { allproducts } from "../Data/all-Products";

const apiUrl = 'https://localhost:7078/api/Product';

export default async function displayAllProducts() {
    let allProductHTML = "";

    try {
      const res = await fetch(apiUrl);
  
      if (!res.ok) {
        console.log("Error in getting products.");
        return;
      }
  
      const data = await res.json();

      data.forEach((product) => {
        allProductHTML += `
        <div class="product__card">
            <img
              src="data:image/jpeg;base64,${product.image}"
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
    }
    catch(error)
    {
      console.log(error);
    }
  
    document.querySelector(".products__list-grid").innerHTML = allProductHTML;
}

