import "../styles/modern-noramalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/footer.css";
import "../styles/components/cart.css";
import "../styles/utils.css";

import { cart, getCartFromLocalStorage } from "../src/Data/cart";
import { generateCartHTML, loadOrderSummary } from "../src/scripts/displayCartItems";

// Retrieve the customized form data from localStorage
document.addEventListener("DOMContentLoaded", () => {
  loadOrderSummary();

  const storedCart = getCartFromLocalStorage();

  if (storedCart && Array.isArray(storedCart)) {
    cart.push(...storedCart);
    generateCartHTML(cart);
  } else {
    console.error("Retrieved cart data is not an array:", storedCart);
  }
});