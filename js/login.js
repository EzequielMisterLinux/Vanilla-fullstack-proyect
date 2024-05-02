import { showNotification } from './notification.js';

export const handleLoginFormSubmit = (e, handleLogin, loginCard) => {
  e.preventDefault();

  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const messageContainer = document.querySelector('.message-container');
  const errorMessagesContainer = messageContainer.querySelector('.error-messages');
  const successMessagesContainer = messageContainer.querySelector('.success-messages');

  fetch('http://localhost/project/php/login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value
    })
  })
  .then(response => response.text())
  .then(data => {
    errorMessagesContainer.textContent = ''; 
    successMessagesContainer.textContent = '';

    if (data.startsWith('Usuario autenticado correctamente.')) {
      handleLogin(); 
      emailInput.value = '';
      passwordInput.value = '';
      loginCard.classList.remove('show'); 
    } else {
      // Mostrar mensaje de error
      const errorMessage = document.createElement('p');
      errorMessage.textContent = data;
      errorMessagesContainer.appendChild(errorMessage);
      showNotification(data, 'error'); // Mostrar notificación de error

      if (data === 'Usuario no encontrado.') {
        emailInput.value = ''; // Limpiar el campo de email
        passwordInput.value = ''; // Limpiar el campo de contraseña
      } else if (data === 'Contraseña incorrecta.') {
        passwordInput.value = ''; // Limpiar solo el campo de contraseña
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Mostrar un mensaje de error genérico
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Ha ocurrido un error al procesar la solicitud';
    errorMessagesContainer.appendChild(errorMessage);
    showNotification('Ha ocurrido un error al procesar la solicitud', 'error'); // Mostrar notificación de error
  });
};