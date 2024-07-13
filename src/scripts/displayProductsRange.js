import { rangesProductsData } from "../Data/range-prodsData";

export default function displayRangeProducts() {
  let PopularProductHTML = "";

  rangesProductsData.forEach((Products) => {
    PopularProductHTML += `
          <div class="product-range__card-cake">
            <h4>${Products.Flavors}</h4>
            <p class="card-cake__description">${Products.Designs}</p>

            <div class="card-cake">
              <div class="card-cake__icon">
                <img class="" src="${Products.icon}" alt="" />
              </div>
              <p>${Products.Type}</p>
            </div>

          </div>
        `;
  });
  document.querySelector(".product-range__card").innerHTML = PopularProductHTML;
}
