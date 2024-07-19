import "../styles/modern-noramalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/product.css";
import "../styles/components/footer.css";
import "../styles/utils.css";

import {
  displayAllProducts,
  showaddtoCartForm,
  updatePrice
} from "../src/scripts/displayProducts";

document.addEventListener("DOMContentLoaded", () => {
  displayAllProducts();
  showaddtoCartForm();

  setTimeout(setupImageUpload, 1);
});

function setupImageUpload() {
  let refImage = document.getElementById("ref-image");
  let refImageInput = document.getElementById("input__reference");

  if (refImage && refImageInput) {
    refImageInput.addEventListener("change", function () {
      if (this.files && this.files[0]) {
        let imageUrl = URL.createObjectURL(this.files[0]);
        refImage.src = imageUrl;
        refImage.onload = function () {
          URL.revokeObjectURL(imageUrl);
        };
      }
    });
  } else {
    console.error("Reference image or input is null");
  }
}
document.addEventListener("change", function (event) {
  if (event.target && event.target.id === "setting-layer") {
    updatePrice('setting-layer', '.setting-layer-price');
  }
  if (event.target && event.target.id === "setting-top") {
    updatePrice('setting-top', '.setting-top-price');
  }
  if (event.target && event.target.id === "setting-side") {
    updatePrice('setting-side', '.setting-side-price');
  }
});
