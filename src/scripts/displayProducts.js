// import { allproducts } from "../Data/all-Products";

const apiUrl = 'https://localhost:7078/api/Product';

export function displayAllProducts() {
  let allProductHTML = "";

  // Assuming 'allproducts' is an array of product objects
  allproducts.forEach((product) => {
    allProductHTML += `
      <div class="product__card">
        <img src="${product.image}" alt="${product.id}" />
        <div class="product-card__description">
          <h3 class="product__name">${product.productName}</h3>
          <span class="product__price">$ ${product.price}</span>
          <p>${product.description}</p>
        </div>
        <div class="product-card_actions">
          <a href="#" class="product__customize-btn btn" data-product-id="${product.id}">Customize it</a>
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

export function showaddtoCartForm() {
  const customizeBtns = document.querySelectorAll(".product__customize-btn");
  const addToCartForm = document.querySelector(".add-to-cart__container");

  customizeBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default anchor action
      const productId = parseInt(btn.getAttribute("data-product-id"), 10); // Convert to number
      console.log("Clicked customize button with product ID:", productId);
      const product = allproducts.find((p) => p.id === productId);
      console.log("Found product:", product);
      if (product) {
        addToCartForm.style.display = "flex"; // Show the form
        document.body.style.overflow = "hidden";
        addToCartForm.innerHTML = `
     <form class="add-to-cart__form" action="">
          <i class="close-add-to-cart-form ri-close-circle-fill"></i>
          <div class="add-to-cart-left__form">
            <div class="product__display-image">
              <img
                src="${product.image}"
                class="add-to-cart__formImg"
                alt=""
              />
  
              <span class="product__form-rating">
                <i class="star ri-star-fill"></i> ${product.ratings}
              </span>
            </div>
            <div class="produts__form-info-container">
              <div class="produts__form-info">
                <h2 class="product__form-name">${product.productName}</h2>
                <span class="product__form-price">₱ ${product.price}</span>
              </div>
  
              <p class="product__form-description">
              ${product.description}
              </p>
              <div class="dedication__input">
                <label for="product__form-Dedication">Dedication</label>
                <textarea
                  class="Dedication"
                  id="product__form-Dedication"
                  name="dedication"
                ></textarea>
  
                <label for="product__form-Note">Note</label>
                <textarea
                  class="Note"
                  id="product__form-Note"
                  name="Note"
                ></textarea>
              </div>
            </div>
          </div>
  
          <div class="add-to-cart-right__form">
            <h3 class="ref__ingae-title">Customize</h3>
            <div class="reference__image">
              <img src="/images/default-image.svg" alt="" id="ref-image" />
  
              <label class="add-refbtn" for="input__reference">
                Add refence image</label
              >
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                id="input__reference"
              />
            </div>
  
            <h3>Cake setting</h3>
  
            <div class="cake__setting">
              <div class="cake__setting-layer">
                <div class="cake__setting-layer-select">
               <label for="setting-layer">Cake layer</label>
                  <select id="setting-layer" name="setting-layer">
        <option value="0">1</option>
        <option value="75">2</option>
        <option value="100">3</option>
        <option value="150">4</option>
      </select>
                </div>
                <span class="setting-layer-price">+ ₱0</span>
              </div>
  
              <div class="cake__setting-layer">
                <div class="cake__setting-layer-select">
                  <label for="setting-flavor">Cake Flavor</label>
                  <select id="setting-flavor" name="setting-flavor">
                    <option value=Chocolate moist">Chocolate moist</option>
                    <option value="Red velvet moist">Red velvet moist</option>
                    <option value="Vanilla chiffon">Vanilla chiffon</option>
                    <option value="Strawberry chiffon">Strawberry chiffon</option>
                    <option value="Mocha chiffon">Mocha chiffon</option>
                  </select>
                </div>
              </div>
            </div>
  
            <h3>Decoration</h3>
  
            <div class="cake__setting">
              <div class="cake__setting-layer">
                <div class="cake__setting-layer-select">
                  <label for="setting__top">Top Decoration</label>
                  <select id="setting-top" name="setting-top">
                      <option value="15">Gold Number Candle </option>
        <option value="5">Wooden Fork</option>
        <option value="35">Sparkle Printed</option>
        <option value="25">Butterfly Topper</option>
        <option value="8">Long Candle (Metallic/Pastel)</option>
                  </select>
                </div>
                <span class="setting-top-price">+ ₱15</span>
              </div>
  
              <div class="cake__setting-layer">
                <div class="cake__setting-layer-select">
                  <label for="setting-side">Side Decoration</label>
                  <select id="setting-side" name="setting-side">
                   <option value="20">Chocolate Mousse Filling</option>
        <option value="30">Choco Mousse + Choco Chips Filling </option>
        <option value="40">Chocolate Ganache Filling</option>
        <option value="20">Strawberry Cream Filling</option>
                  </select>
                </div>
                  <span class="setting-side-price">+ ₱20</span>
              </div>
  
              <div class="cake__setting-layer">
                <div class="cake__setting-layer-select">
                  <label for="setting-color">Color Pallete</label>
                  <input id="setting-color" type="text" />
                </div>
              </div>
  
              <div class="cake__setting-layer">
                <div class="cake__setting-layer-select">
                  <label for="setting-theme">Theme</label>
                  <input id="setting-theme" type="text" />
                </div>
              </div>
  
              <div class="cake__form-totalPrice">
                <div class="cake__form-quantity">
                  <label for="quantity">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="100"
                    step="1"
                    value="1"
                  />
                </div>
  
                <p class="cake__sub-total">
                  Subtotal : <span class="cake__total-Amount">P 235.00</span>
                </p>
              </div>
  
              <a href="" class="form__Add-to-cartbutton btn">
                Add to cart
                <i class="ri-shopping-basket-2-fill cart__icon"></i>
              </a>
            </div>
          </div>
        </form>
      `;

        // Attach the event listener to the close button after setting innerHTML
        const closeBtn = addToCartForm.querySelector(".close-add-to-cart-form");
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            addToCartForm.style.display = "none"; // Hide the form
            document.body.style.overflow = "auto"; // Allow scrolling on body
          });
        }
      }
    });
  });
}

export function updatePrice(elementId, priceClass) {
  var selectedElement = document.getElementById(elementId);
  var priceDisplay = document.querySelector(priceClass);
  var selectedValue = selectedElement.value;
  priceDisplay.textContent = '+ ₱' + selectedValue;
}

// Usage:
// updatePrice('setting-layer', '.setting-layer-price');
// updatePrice('setting-top', '.setting-top-price');
// updatePrice('setting-side', '.setting-side-price');
