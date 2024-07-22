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



document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category__btn');
  const productsButtons = document.querySelectorAll('.product-range__card-cake');

  function addActiveClass(buttons, activeClass) {
    buttons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); 
        buttons.forEach(btn => btn.classList.remove(activeClass));

     
        this.classList.add(activeClass);

        // Call displayAllProducts to update the product list
        displayAllProducts();
      });
    });
  }

  addActiveClass(categoryButtons, 'category__btn-active');
  addActiveClass(productsButtons, 'product-range__card-cake-active');
});