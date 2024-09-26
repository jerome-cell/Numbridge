const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const googleAuthButton = document.getElementById('google-auth-button');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const country = document.getElementById('country').value;
  const phone = document.getElementById('phone').value;

  fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password, name, country, phone }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});

googleAuthButton.addEventListener('click', () => {
  window.location.href = '/google';
});
// Get the loader element
const loader = document.getElementById('loader');

// Add event listener to all clickable elements
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        // Show loader
        loader.classList.add('show');
        
        // Hide loader after 2 seconds (simulate loading time)
        setTimeout(() => {
            loader.classList.remove('show');
        }, 2000);
    }
});
