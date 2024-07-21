import "../styles/modern-noramalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/product.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

import {
  displayAllProducts,
  showCustomizeForm,
  showDefaultForm,
} from "../src/scripts/displayProducts";

import showMobileNav from "../src/scripts/displayNavBar";
document.addEventListener("DOMContentLoaded", () => {
  displayAllProducts();
  showDefaultForm();
  showCustomizeForm();
  showMobileNav();
});
