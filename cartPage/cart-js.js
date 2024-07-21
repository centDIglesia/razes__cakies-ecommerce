import "../styles/modern-noramalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/footer.css"
import "../styles/components/cart.css"
import "../styles/utils.css";

import { cart } from "../src/Data/cart";
import { generateCartHTML } from "../src/scripts/displayCartItems";

// Retrieve the customized form data from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const cartData = JSON.parse(storedCart);
      if (Array.isArray(cartData)) {
        cart.push(...cartData);
      } else {
        cart.push(cartData);
      }
      generateCartHTML(cart);
    }
  });


