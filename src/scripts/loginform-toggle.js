
export function toggleForms() {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showSigninLink = document.getElementById('show-signin');
  
    showSignupLink.addEventListener('click', function(e) {
      e.preventDefault();
      signinForm.style.display = 'none';
      signupForm.style.display = 'block';
    });
  
    showSigninLink.addEventListener('click', function(e) {
      e.preventDefault();
      signupForm.style.display = 'none';
      signinForm.style.display = 'block';
    });
  }
  
  export function togglePasswordVisibility() {
    const toggleIcons = document.querySelectorAll('.eye__icon');
  
    toggleIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        if (input.type === 'password') {
          input.type = 'text';
          icon.classList.remove('ri-eye-off-line');
          icon.classList.add('ri-eye-line');
        } else {
          input.type = 'password';
          icon.classList.remove('ri-eye-line');
          icon.classList.add('ri-eye-off-line');
        }
      });
    });
  }