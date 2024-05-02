import { showNotificationRegister } from './notificationRegister.js';

export const handleRegisterFormSubmit = (e, registerCard) => {
  e.preventDefault();

  const emailInput = e.target.querySelector('#email');
  const usernameInput = e.target.querySelector('#username');
  const fullNameInput = e.target.querySelector('#fullName');
  const addressInput = e.target.querySelector('#address');
  const passwordInput = e.target.querySelector('#password');
  const messageContainer = e.target.querySelector('.message-container-register');
  const errorMessagesContainer = messageContainer.querySelector('.error-messages-register');
  const successMessagesContainer = messageContainer.querySelector('.success-messages-register');

  if (!errorMessagesContainer || !successMessagesContainer) {
    console.error('Error: message containers not found');
    return;
  }

  fetch('http://localhost/project/php/register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput.value,
      username: usernameInput.value,
      fullName: fullNameInput.value,
      address: addressInput.value,
      password: passwordInput.value
    })
  })
  .then(response => response.json())
  .then(data => {
    errorMessagesContainer.textContent = '';
    successMessagesContainer.textContent = '';

    if (data.error) {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = data.error;
      errorMessagesContainer.appendChild(errorMessage);
      showNotificationRegister(data.error, 'error');
    } else {
      if (data.mensaje === 'Registro exitoso') {
        const successMessage = document.createElement('p');
        successMessage.textContent = data.mensaje;
        successMessagesContainer.appendChild(successMessage);
        showNotificationRegister(data.mensaje + ': por favor inicie sesión', 'success');
        registerCard.classList.remove('show'); // Cerrar el formulario de registro
      } else if (data.mensaje === 'El usuario ya existe') {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = data.mensaje;
        errorMessagesContainer.appendChild(errorMessage);
        showNotificationRegister(data.mensaje, 'error');
      } else if (data.mensaje === 'La contraseña debe tener al menos 8 caracteres') {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = data.mensaje;
        errorMessagesContainer.appendChild(errorMessage);
        showNotificationRegister(data.mensaje, 'error');
        passwordInput.value = ''; // Limpiar solo el campo de contraseña
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Ha ocurrido un error al procesar la solicitud';
    errorMessagesContainer.appendChild(errorMessage);
    showNotificationRegister('Ha ocurrido un error al procesar la solicitud', 'error');
  });
};