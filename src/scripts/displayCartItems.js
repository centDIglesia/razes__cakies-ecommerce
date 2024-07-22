import { cart} from "../Data/cart";

export function generateCartHTML(cart) {
  let cartProductHTML = `
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Action</th>
      </tr>`;

  console.log(cart);
  // const uniqueProductIds = new Set();

  cart.forEach((cartProduct) => {
    // if (!uniqueProductIds.has(cartProduct.productId)) {
    //   uniqueProductIds.add(cartProduct.productId);
      {

      cartProductHTML += `
          <tr>
            <td>
              <div class="order__name-column">
                <img
                  class="order__image"
                  src="data:image/jpeg;base64,${cartProduct.productImageSrc}"
                  alt=""
                />
                <div>
                  <p class="order__name">${cartProduct.productname}</p>
                  <span class="order__price">P ${cartProduct.subtotal}</span>
                </div>
              </div>
            </td>
            <td>
              <input
                type="number"
                class="order-quantity"
                data-product-id="${cartProduct.productId}"
                name="quantity"
                min="1"
                max="10"
                step="1"
                value="${cartProduct.quantity}"
              />
            </td>
            <td>
              <span class="order__total" data-product-id="${cartProduct.productId}">P ${cartProduct.subtotal}</span>
            </td>
            <td>
              <i class="ri-file-info-fill details__productbtn" data-id="${cartProduct.productId}"></i>
              <i class="ri-delete-bin-2-fill delete__productbtn" data-id="${cartProduct.productId}"></i>
            </td>
          </tr>`;
    }
  });

  document.querySelector(".order__table").innerHTML = cartProductHTML;
    // const deleteButtons = document.querySelectorAll('.delete__productbtn');

    // deleteButtons.forEach(button => {
    //   button.addEventListener('click', function () {
    //     const productId = this.getAttribute('data-productid');
    //     console.log(productId);
    //     deleteFromCart(productId);
    //   });
    // });

  updatesubtotalBaseonQuantity(cart);
}

function updatesubtotalBaseonQuantity(cart) {
  document.querySelectorAll(".order-quantity").forEach((input) => {
    input.addEventListener("change", (event) => {
      const productId = event.target.dataset.productId;
      const product = cart.find((p) => p.productId == productId);
      if (product) {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity >= 1 && newQuantity <= 10) {
          const newSubtotal = newQuantity * product.price;
          document.querySelector(
            `.order__total[data-product-id="${productId}"]`
          ).textContent = `P ${newSubtotal.toFixed(2)}`;
          product.quantity = newQuantity;
          product.subtotal = newSubtotal;

          localStorage.setItem("cart", JSON.stringify(cart));



          updateOrderSummary(cart);
        } else {
          event.target.value = product.quantity;

        }
      }
    });
  });
}



function updateOrderSummary(cart) {
  let subtotal = 0;
  let deliveryFee = 0;
  let total = 0;

  // Calculate subtotal
  cart.forEach((item) => {
    subtotal += item.subtotal;
  });

  // Get the delivery fee from the selected delivery option
  deliveryFee = parseInt(
    document.getElementById("delivery__options").value,
    10
  );

  // Calculate the total
  total = subtotal + deliveryFee;

  // Update the Subtotal, Delivery Fee, and Total in the order summary
  document.querySelector(
    ".order__summary-subTotal"
  ).textContent = `P ${subtotal.toFixed(2)}`;
  document.querySelector(
    ".order__summary-deliveryFee"
  ).textContent = `P ${deliveryFee.toFixed(2)}`;
  document.querySelector(
    ".order__summary-total"
  ).textContent = `P ${total.toFixed(2)}`;

  const summary = {
    subtotal: subtotal.toFixed(2),
    deliveryFee: deliveryFee.toFixed(2),
    total: total.toFixed(2),
  };

  localStorage.setItem("orderSummary", JSON.stringify(summary));
}

// Add event listener to the delivery options select element
document.getElementById("delivery__options").addEventListener("change", () => {
  updateOrderSummary(cart);
});

// Call updateOrderSummary on page load
document.addEventListener("DOMContentLoaded", () => {
  updateOrderSummary(cart);
});

export function loadOrderSummary() {
  const storedSummary = localStorage.getItem("orderSummary");
  if (storedSummary) {
    const summary = JSON.parse(storedSummary);

    // Update the Subtotal, Delivery Fee, and Total in the order summary
    document.querySelector(
      ".order__summary-subTotal"
    ).textContent = `P ${summary.subtotal}`;
    document.querySelector(
      ".order__summary-deliveryFee"
    ).textContent = `P ${summary.deliveryFee}`;
    document.querySelector(
      ".order__summary-total"
    ).textContent = `P ${summary.total}`;
  }
}
