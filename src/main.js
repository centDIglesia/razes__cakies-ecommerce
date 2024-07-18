import "../styles/modern-noramalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/login.css";
import "../styles/components/featured.css";
import "../styles/components/product-range.css";
import "../styles/components/popular.css";
import "../styles/components/chart.css";
import "../styles/components/feedback.css"
import "../styles/components/footer.css"
import "../styles/utils.css";

import { setupSlider } from "./scripts/slider";
import displayFeaturedProducts from "./scripts/displayFeatured";
import displayPopularProducts from "./scripts/displayPopularProducts";


setupSlider();

document.addEventListener("DOMContentLoaded", () => {
  displayFeaturedProducts();
  displayPopularProducts();

//for viewing ful size chart
  const viewFullChartbutton= document.querySelector(".view__sizechart");
  const fullSizeChart = document.querySelector(".full__size-chart");
  const closeButton = document.querySelector(".close");

  viewFullChartbutton.addEventListener("click", function(event) {
    event.preventDefault();
    fullSizeChart.classList.add("show-fullsizechart");
  });

  closeButton.addEventListener("click", function(event) {
    event.preventDefault();
    fullSizeChart.classList.remove("show-fullsizechart");
  });

});
