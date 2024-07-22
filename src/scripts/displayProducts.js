// import { allproducts } from "../Data/all-Products";
import { cart, saveCartToLocalStorage } from "../Data/cart";
const apiUrl = 'https://localhost:7078/api/Product';

// localStorage.clear('cart');

//para automatic na macalculate yung subtotal
function calculateAndUpdateSubtotal() {
  const basePrice = parseFloat(
    document.querySelector(".product__form-price").textContent.replace("₱ ", "")
  );
  const layerPrice = parseFloat(
    document
      .querySelector(".setting-layer-price")
      .textContent.replace("+ ₱", "")
  );
  const topDecorationPrice = parseFloat(
    document.querySelector(".setting-top-price").textContent.replace("+ ₱", "")
  );
  const sideDecorationPrice = parseFloat(
    document.querySelector(".setting-side-price").textContent.replace("+ ₱", "")
  );
  const quantity = parseInt(document.getElementById("quantity").value, 10);
  const subtotal =
    (basePrice + layerPrice + topDecorationPrice + sideDecorationPrice) *
    quantity;
  document.querySelector(
    ".cake__total-Amount"
  ).textContent = `₱ ${subtotal.toFixed(2)}`;
}

function calculateAndUpdateSubtotalForDefaultForm() {
  const quantityInput = document.getElementById("quantity");
  const priceDisplay = document.querySelector(".product__form-price");
  const subtotalDisplay = document.getElementById("sub-total-amount");

  // Parse the price and quantity
  const price = parseFloat(priceDisplay.textContent.replace("₱ ", ""));
  const quantity = parseInt(quantityInput.value, 10);

  // Calculate the new subtotal
  const subtotal = price * quantity;

  // Update the subtotal in the form
  subtotalDisplay.textContent = `₱ ${subtotal.toFixed(2)}`;
}

//function for updating the cake setting and decoration additional price

export function updatePrice(elementId, priceClass) {
  var selectedElement = document.getElementById(elementId);
  var priceDisplay = document.querySelector(priceClass);
  var selectedValue = selectedElement.value;
  priceDisplay.textContent = "+ ₱" + selectedValue;

  // Recalculate the subtotal after the price update
  calculateAndUpdateSubtotal();
}

export async function displayAllProducts() {
  let allProductHTML = "";
  let allProducts = [];
  let filteredProducts = []; // Define filteredProducts here

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.log("Error in getting products.");
      return;
    }

    const data = await res.json();
    allProducts = data;

    // Assuming 'allproducts' is an array of product objects

    const activeCategoryElement = document.querySelector('.category__btn-active');
    const activeProductTypeElement = document.querySelector('.product-range__card-cake-active');

    if (!activeCategoryElement || !activeProductTypeElement) {
      console.log("Active category or product type not found.");
      return;
    }

    const activeCategory = activeCategoryElement.getAttribute('data-category');
    const activeProductType = activeProductTypeElement.getAttribute('data-product');

    console.log(" Category:", activeCategory);
    console.log(" Product :", activeProductType);

    if (activeCategory.toLowerCase() === 'all-occasions') {
      filteredProducts = allProducts.filter(product =>  product.type.toLowerCase() === activeProductType.toLowerCase() );
      
    } else {
      filteredProducts = allProducts.filter(product =>
        product.occasion.toLowerCase() === activeCategory.toLowerCase() &&
        product.type.toLowerCase() === activeProductType.toLowerCase()
      );
    }

    console.log("Filt Products:", filteredProducts);

    filteredProducts.forEach((product) => {
      allProductHTML += `
      <div class="product__card">
        <img src="data:image/jpeg;base64,${product.image}" alt="${product.id}" />
        <div class="product-card__description">
          <h3 class="product__name">${product.productName}</h3>
          <span class="product__price">₱ ${product.price}</span>
          <p>${product.description}</p>
        </div>
        <div class="product-card_actions">
          <a href="#" class="product__customize-btn btn" data-product-id="${product.id}">Customize it</a>
          <a href="#" class="default-addtocart-btn" data-product-id="${product.id}"><i class="ri-shopping-basket-2-fill"></i></a>
        </div>
        <span class="product__ratings">
          <i class="ri-star-fill"></i> 
          ${product.ratings}
        </span>
      </div>
    `;
    });
  } catch (error) {
    console.log(error);
  }

  document.querySelector(".products__list-grid").innerHTML = allProductHTML;
  showCustomizeForm(filteredProducts);
  showDefaultForm(filteredProducts); 
}

export function showCustomizeForm(allProducts) {
  const customizeBtns = document.querySelectorAll(".product__customize-btn");
  const addToCartForm = document.querySelector(".add-to-cart__container");

  customizeBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default anchor action
      const ProductId = parseInt(btn.getAttribute("data-product-id"), 10); // Convert to number

      const product = allProducts?.find((p) => p.id === ProductId);

      if (product) {
        addToCartForm.style.display = "flex"; // Show the form
        document.body.style.overflow = "hidden";

        addToCartForm.innerHTML = `
     <form class="add-to-cart__form" action="">
          <i class="close-add-to-cart-form ri-close-circle-fill"></i>
          <div class="add-to-cart-left__form">
            <div class="product__display-image">
              <img
                src="data:image/jpeg;base64,${product.image}"
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

        <option value="0">Default</option>
        <option value="150">Add 1 Layer</option>
        <option value="200">Add 2 Layers</option>
        <option value="250">Add 3 Layers</option>
      </select>
                </div>
                <span class="setting-layer-price">+ ₱0</span>
              </div>
  
              <div class="cake__setting-layer">
                <div class="cake__setting-layer-select">
                  <label for="setting-flavor">Cake Flavor</label>
                  <select id="setting-flavor" name="setting-flavor">
                      
                    <option value="Chocolate moist">Chocolate moist</option>
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
                   <option value="0">Default </option>
                      <option value="15">Gold Number Candle </option>
                      <option value="5">Wooden Fork</option>
                      <option value="35">Sparkle Printed</option>
                      <option value="25">Butterfly Topper</option>
                      <option value="8">Long Candle (Metallic/Pastel)</option>
                  </select>
                </div>
                <span class="setting-top-price">+ ₱0</span>
              </div>
  
              <div class="cake__setting-layer">
                <div class="cake__setting-layer-select">
                  <label for="setting-side">Side Decoration</label>
                  <select id="setting-side" name="setting-side">
                    <option value="0">Default </option>
                    <option value="20">Chocolate Mousse Filling</option>
                    <option value="30">Choco Mousse + Choco Chips Filling </option>
                    <option value="40">Chocolate Ganache Filling</option>
                    <option value="20">Strawberry Cream Filling</option>
                  </select>
                </div>
                  <span class="setting-side-price">+ ₱0</span>
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
                  Subtotal : <span class="cake__total-Amount" id="sub-total-amount">₱ ${product.price}</span>
                </p>
              </div>
  
              <a href="#" data-product-id="${product.id}" class="form__Add-to-cartbutton btn">
                Add to cart
                <i class="ri-shopping-basket-2-fill cart__icon"></i>
              </a>
            </div>
          </div>
        </form>
      `;

        //for dispalying reference image
        document
          .getElementById("input__reference")
          .addEventListener("change", function (event) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
              document.getElementById("ref-image").src = e.target.result;
            };

            reader.readAsDataURL(file);
          });

        //close the form
        const closeBtn = addToCartForm.querySelector(".close-add-to-cart-form");
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            addToCartForm.style.display = "none";
            document.body.style.overflow = "auto";
          });
        }

        //add to cart btn function
        addToCartForm
          .querySelectorAll(".form__Add-to-cartbutton")
          .forEach((button) => {
            button.addEventListener("click", () => {
              event.preventDefault();

              const CustomizeformData = {
                ProductType: product.type,
                ProductOccasion: product.occasion,
                productname: product.productName,
                productImageSrc: product.image,
                referenceImage: document.getElementById("ref-image").src,
                dedication: product.description,
                note: document.getElementById("product__form-Note").value,
                layer: document.getElementById("setting-layer").value,
                flavor: document.getElementById("setting-flavor").value,
                topDecoration: document.getElementById("setting-top").value,
                sideDecoration: document.getElementById("setting-side").value,
                colorPalette: document.getElementById("setting-color").value,
                theme: document.getElementById("setting-theme").value,
                quantity: document.getElementById("quantity").value,
                subtotal: parseFloat(
                  document
                    .getElementById("sub-total-amount")
                    .textContent.replace("₱ ", "")
                ),
                price: product.price,  // Ensure this line is present
                productId: button.dataset.productId,
              };

              // Check if the cart is already in local storage
              cart.push(CustomizeformData);

              // Save the updated cart to local storage
              // localStorage.setItem("cart", JSON.stringify(cart));
              saveCartToLocalStorage(cart);

              console.log("Updated cart:", cart);
              refreshProductDisplay();

              addToCartForm.style.display = "none";
              document.body.style.overflow = "auto";

            });
          });

        //for changing setting-layer price
        document
          .getElementById("setting-layer")
          .addEventListener("change", () =>
            updatePrice("setting-layer", ".setting-layer-price")
          );

        //for changing setting-top price
        document
          .getElementById("setting-top")
          .addEventListener("change", () =>
            updatePrice("setting-top", ".setting-top-price")
          );

        //for changing setting-side price
        document
          .getElementById("setting-side")
          .addEventListener("change", () =>
            updatePrice("setting-side", ".setting-side-price")
          );

        //for changing subtoatal base from quantity
        document
          .getElementById("quantity")
          .addEventListener("input", calculateAndUpdateSubtotal);

        // Call calculateAndUpdateSubtotal to set the initial value
        calculateAndUpdateSubtotal();
      }
    });
  });
}

export function refreshProductDisplay() {
  displayAllProducts(); // Refresh the product list

}
export function showDefaultForm(allProducts) {
  const defaultBtns = document.querySelectorAll(".default-addtocart-btn");
  const addToCartForm = document.querySelector(
    ".add-to-cart-default__container"
  );

  defaultBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default anchor action
      console.log("hi");

      const productId = parseInt(btn.getAttribute("data-product-id"), 10); //
      console.log(productId);

      const product = allProducts?.find((p) => p.id === productId);
      console.log("Found product:", product);
      if (!product) {
        console.error(`No product found with id: ${productId}`);
      }
      if (product) {
        addToCartForm.style.display = "flex"; // Show the form
        document.body.style.overflow = "hidden";

        addToCartForm.innerHTML = `
         <form class="add-to-cart__Dform" action="">
          <i class="close-add-to-cart-Dform ri-close-circle-fill"></i>
          <div class="add-to-cart-left__Dform">
            <div class="product__display-image">
              <img
                src="data:image/jpeg;base64,${product.image}"
                class="add-to-cart__DformImg"
                alt=""
              />
  
              <span class="product__form-rating">
                <i class="star ri-star-fill"></i> ${product.ratings}
              </span>
            </div>
            <div class="produts__Dform-info-container">
              <div class="produts__form-info">
                <h2 class="product__form-name">Cake</h2>
                <span class="product__form-price">₱ ${product.price}</span>
              </div>
  
              <p class="product__form-description">
             cakes for weveyry juann
              </p>
              <div class="Ddedication__input">
                <label for="product__form-Dedication">Dedication</label>
                <textarea
                  class="DDedication"
                  id="product__form-Dedication"
                  name="dedication"
                ></textarea>
  
                <label for="product__form-Note">Note</label>
                <textarea
                  class="DNote"
                  id="product__form-Note"
                  name="Note"
                ></textarea>
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
                  Subtotal : <span class="cake__total-Amount" id="sub-total-amount">₱ ${product.price}</span>
                </p>
              </div>
  
              <a href="#" data-product-id="${product.id}" class="form__Add-to-cartbutton btn">
                Add to cart
                <i class="ri-shopping-basket-2-fill cart__icon"></i>
              </a>
            </div>
            </div>
          </div>
  
     
        </form>

      `;

        //for dispalying reference image

        //close the form
        const closeBtn = addToCartForm.querySelector(
          ".close-add-to-cart-Dform"
        );
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            addToCartForm.style.display = "none";
            document.body.style.overflow = "auto";
          });
        }

        //add to cart btn function
        addToCartForm
          .querySelectorAll(".form__Add-to-cartbutton")
          .forEach((button) => {
            button.addEventListener("click", () => {
              event.preventDefault();

              const CustomizeformData = {
                ProductType: product.type,
                ProductOccasion: "Default",
                productname: product.productName,
                productImageSrc: product.image,
                referenceImage: "Default",
                dedication: product.description,
                note: document.getElementById("product__form-Note").value,
                layer: "Default",
                flavor: "Default",
                topDecoration: "Default",
                sideDecoration: "Default",
                colorPalette: "Default",
                theme: "Default",
                quantity: document.getElementById("quantity").value,
                subtotal: parseFloat(
                  document
                    .getElementById("sub-total-amount")
                    .textContent.replace("₱ ", "")
                ),
                price: product.price,  // Ensure this line is present
                productId: button.dataset.productId,
              };

              // Check if the cart is already in local storage
              cart.push(CustomizeformData);

              // Save the updated cart to local storage
              // localStorage.setItem("cart", JSON.stringify(cart));
              saveCartToLocalStorage(cart);

              console.log("Updated cart:", cart);
              refreshProductDisplay();

              addToCartForm.style.display = "none";
              document.body.style.overflow = "auto";

            });
          });

        document
          .getElementById("quantity")
          .addEventListener("change", updateSubtotal);

        calculateAndUpdateSubtotalForDefaultForm();
      }
    });
  });
}
