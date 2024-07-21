export function generateCartHTML(cart) {
  let cartProductHTML = `
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Action</th>
      </tr>`;

  cart.forEach((cartProducts) => {
    cartProductHTML += `
          <tr>
            <td>
              <div class="order__name-column">
                <img
                  class="order__image"
                  src="${cartProducts.productImageSrc}"
                  alt=""
                />
                <div>
                  <p class="order__name">${cartProducts.productname}</p>
                  <span class="order__price">P ${cartProducts.subtotal}</span>
                </div>
              </div>
            </td>
            <td>
              <input
                type="number"
                class="order-quantity"
                data-product-id="${cartProducts.productId}"  // Ensure this line is present
                name="quantity"
                min="1"
                max="10"
                step="1"
                value="${cartProducts.quantity}"
              />
            </td>
            <td>
              <span class="order__total" data-product-id="${cartProducts.productId}">P ${cartProducts.subtotal}</span>
            </td>
            <td>
              <i class="ri-file-info-fill details__productbtn" data-id="${cartProducts.productId}"></i>
              <i class="ri-delete-bin-2-fill delete__productbtn" data-id="${cartProducts.productId}"></i>
            </td>
          </tr>`;
  });

  document.querySelector(".order__table").innerHTML = cartProductHTML;

  updatesubtotalBaseonQuantity(cart);
}

function updatesubtotalBaseonQuantity(cart) {
  document.querySelectorAll(".order-quantity").forEach((input) => {
    input.addEventListener("change", (event) => {
      const productId = event.target.dataset.productId;
      const product = cart.find((p) => p.productId == productId); // Ensure correct property name is used
      if (product) {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity >= 1 && newQuantity <= 10) {
          const newSubtotal = newQuantity * product.price; // Ensure product.price is used correctly
          document.querySelector(
            `.order__total[data-product-id="${productId}"]`
          ).textContent = `P ${newSubtotal.toFixed(2)}`;
          product.quantity = newQuantity;
          product.subtotal = newSubtotal;

          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          event.target.value = product.quantity; // Reset to previous valid quantity if out of bounds
        }
      }
    });
  });
}
