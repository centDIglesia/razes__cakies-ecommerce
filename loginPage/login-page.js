import "../styles/modern-noramalize.css";
import "../styles/modern-noramalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/mobile-nav.css"
import "../styles/components/login.css";
import "../styles/components/footer.css";

import "../styles/utils.css";
import {
  toggleForms,
  togglePasswordVisibility,
} from "../src/scripts/loginform-toggle";
import { login } from "../src/scripts/loginAPI";
import { signup } from "../src/scripts/signupAPI";
import showMobileNav from "../src/scripts/displayNavBar";

document.addEventListener("DOMContentLoaded", () => {
  toggleForms();
  togglePasswordVisibility();
  showMobileNav();

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
