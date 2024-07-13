const apiUrl = 'https://localhost:7078/api/Featured';

export default async function displayFeaturedProducts() {
  let featuredProductHTML = "";

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.log("Error in getting featured products.");
      return;
    }

    const data = await res.json();
    data.forEach((fProducts) => {
      featuredProductHTML += `
        <div class="featured__product-container" id="${fProducts.id}">
          <div class="featured__Images">
            <img class="large__image" src="data:image/jpeg;base64,${fProducts.firstImage}" alt="${fProducts.title}">
            <img src="data:image/jpeg;base64,${fProducts.secondImage}" alt="${fProducts.title}">
            <img src="data:image/jpeg;base64,${fProducts.thirdImage}" alt="${fProducts.title}">
          </div>

          <div class="featured__Info">
            <div class="featured__Info-description">
              <h2>${fProducts.title}</h2>
              <p>${fProducts.description}</p>
            </div>

            <div class="featured__Info-button">
              <a href="#" class="btn">Add to cart</a>
              <span class="line"></span>
              <p class="fproduct__price">&#8369 ${fProducts.price}</p>
            </div>
          </div>
        </div>
      `;
    });

    document.querySelector(".slide-container").innerHTML = featuredProductHTML;
  } catch (error) {
    console.log("Error:", error);
  }
}
