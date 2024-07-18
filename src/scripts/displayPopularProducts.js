// import { popularProductsData } from "../Data/popular-productData";

const apiUrl = 'https://localhost:7078/api/Product/popular';

export default async function displayPopularProducts() {
  let PopularProductHTML = "";

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.log("Error in getting popular products.");
      return;
    }

    const data = await res.json();
    // console.log(data);
    
    // Modify the action here => href
    data.forEach((product) => {
      PopularProductHTML += `
        <div class="Popular__products__card ${product.id}">
          <img src="data:image/jpeg;base64,${product.image}" alt="${product.image}" />

          <div class="products__card">
            <div class="popular__info">
              <div class="popular__name">
                <p class="popular__product-name">${product.productName}</p>
                <span class="popular__description">
                  ${product.description}
                </span>
              </div>
              <span class="popular__ratings">
                <i class="ratings ri-star-fill"></i>${product.ratings}</span>
            </div>

            <div class="popular__buttons">
              <span class="popular__price">${product.price}</span>
              <span class="line"></span>
              <a href="" class="popular__btn btn">Add to cart</a>
            </div>
          </div>
        </div>
      `;
    });
  }
  catch (error) {
    console.log(error);
  }

  document.querySelector(".Popular__products__card-container").innerHTML = PopularProductHTML;
}
