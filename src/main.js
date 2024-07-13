import "../styles/modern-noramalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/login.css";
import "../styles/components/featured.css";
import "../styles/components/product-range.css";
import "../styles/components/popular.css"
import "../styles/utils.css";
import {
  toggleForms,
  togglePasswordVisibility,
} from "/src/scripts/loginform-toggle";
import { login } from "./scripts/loginAPI";
import { signup } from "./scripts/signupAPI/";
import { setupSlider } from './scripts/slider';
import displayFeaturedProducts from "./scripts/displayFeatured";
import displayRangeProducts from "./scripts/displayProductsRange";
import displayPopularProducts from "./scripts/displayPopularProducts";

setupSlider();

document.addEventListener("DOMContentLoaded", () => {
  
  displayFeaturedProducts();
  displayRangeProducts();
  displayPopularProducts();
  toggleForms();
  togglePasswordVisibility();

  // Sign up button
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      await signup();
    });
  } else {
    console.error("Signup form not found");
  }

  // Login button
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      await login();
    });
  } else {
    console.error("Login form not found");
  }
});


