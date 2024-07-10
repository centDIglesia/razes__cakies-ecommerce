
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
  