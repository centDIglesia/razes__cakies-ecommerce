import "../styles/components/header.css";
import "../styles/components/footer.css";
import "../styles/components/order.css";
import "../styles/utils.css";
import "../styles/modern-noramalize.css";
import "../styles/style.css";

import { getProvinces, getCities, getRegions } from "./dropdownItem";

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  getCities();
  getProvinces();
  getRegions();
});
