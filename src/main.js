import '../styles/modern-noramalize.css';
import '../styles/style.css';
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/login.css'
import '../styles/utils.css';
import { toggleForms,togglePasswordVisibility } from '/src/scripts/loginform-toggle';


document.addEventListener('DOMContentLoaded', () => {
  toggleForms();
});


document.addEventListener('DOMContentLoaded', () => {
    toggleForms();
    togglePasswordVisibility();
  });