// scripts/registerForm.js
export const createRegisterForm = (registerCard) => {
  registerCard.innerHTML = `
    <h2 class="form-title">Register</h2>
    <form id="registerForm">
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="username" class="form-label">Username</label>
        <input type="text" id="username" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="fullName" class="form-label">Full Name</label>
        <input type="text" id="fullName" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="address" class="form-label">Address</label>
        <input type="text" id="address" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-input" required>
      </div>
      <button type="submit" class="form-btn">Register</button>
      <a href="#" class="login-link">Already registered? Click to login</a>
    </form>
  `;

  const registerForm = document.querySelector('#registerForm');
  registerForm.addEventListener('submit', handleRegisterFormSubmit);
};

export const handleRegisterFormSubmit = (e) => {
  e.preventDefault();

  const emailInput = e.target.querySelector('#email').value;
  const usernameInput = e.target.querySelector('#username').value;
  const fullNameInput = e.target.querySelector('#fullName').value;
  const addressInput = e.target.querySelector('#address').value;
  const passwordInput = e.target.querySelector('#password').value;

  // Enviar los datos al servidor
  fetch('../php/register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput,
      username: usernameInput,
      fullName: fullNameInput,
      address: addressInput,
      password: passwordInput
    })
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // Aquí puedes manejar la respuesta del servidor
  })
  .catch(error => {
    console.error('Error:', error);
  });
};