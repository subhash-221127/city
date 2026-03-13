// Auth page logic
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const showRegister = document.getElementById('show-register');
  const showLogin = document.getElementById('show-login');
  const formTitle = document.getElementById('form-title');
  const formSubtitle = document.getElementById('form-subtitle');
  const roleSelect = document.getElementById('role-select');
  const regRoleSelect = document.getElementById('reg-role-select');

  if (showRegister) showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    formTitle.textContent = 'Create Account';
    formSubtitle.textContent = 'Join CityFix and make your city better';
  });

  if (showLogin) showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    formTitle.textContent = 'Welcome Back';
    formSubtitle.textContent = 'Sign in to your CityFix account';
  });

  // Login handler
  if (loginForm) loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const role = roleSelect.value;
    localStorage.setItem('cityfix-user-role', role);
    localStorage.setItem('cityfix-user-name', document.getElementById('login-email').value.split('@')[0]);
    if (role === 'admin') window.location.href = 'admin/dashboard.html';
    else if (role === 'officer') window.location.href = 'citizen/dashboard.html';
    else window.location.href = 'citizen/dashboard.html';
  });

  // Register handler
  if (registerForm) registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const role = regRoleSelect.value;
    localStorage.setItem('cityfix-user-role', role);
    localStorage.setItem('cityfix-user-name', document.getElementById('reg-name').value);
    if (role === 'admin') window.location.href = 'admin/dashboard.html';
    else if (role === 'officer') window.location.href = 'citizen/dashboard.html';
    else window.location.href = 'citizen/dashboard.html';
  });

  // Google OAuth button (UI only)
  const googleBtns = document.querySelectorAll('.google-btn');
  googleBtns.forEach(btn => btn.addEventListener('click', () => {
    alert('Google OAuth will be connected to backend later.');
  }));
});
