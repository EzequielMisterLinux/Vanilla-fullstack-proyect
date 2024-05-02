// logout.js

import { showNotification } from './notification.js';

export const handleLogout = (isLoggedIn, navBtn, toggleLoginForm) => {
  if (isLoggedIn) {
    fetch('http://localhost/project/php/logout.php')
      .then(() => {
        isLoggedIn = false;
        navBtn.innerHTML = '<i class="fas fa-sign-in-alt">Login</i>'; // Icono de inicio de sesión
        navBtn.removeEventListener('click', () => handleLogout(isLoggedIn, navBtn, toggleLoginForm));
        navBtn.addEventListener('click', toggleLoginForm);
        showNotification('Cierre de sesión exitoso', 'success');
      })
      .catch((error) => {
        console.error('Error:', error);
        showNotification('Ha ocurrido un error al cerrar la sesión', 'error');
      });
  }
};