import "../styles/components/header.css";
import "../styles/components/footer.css";
import "../styles/components/order.css";
import "../styles/utils.css";
import "../styles/modern-noramalize.css";
import "../styles/components/mobile-nav.css"
import "../styles/style.css";

import { getProvinces, getCities, getRegions } from "./dropdownItem";
import showMobileNav from "../src/scripts/displayNavBar";

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  getCities();
  getProvinces();
  getRegions();
  showMobileNav();
});


document.querySelector('.proceed__payment-btn').addEventListener('click', function() {
  showAddedToCartMessagee();
});

function showAddedToCartMessagee() {
  const successMessage = document.querySelector('.added-successfullyy');
  
  if (successMessage) {
    successMessage.classList.add('added-succesfullyy');
    
    setTimeout(() => {
      successMessage.classList.remove('added-successfully-show');
    }, 1000);
  }
}


