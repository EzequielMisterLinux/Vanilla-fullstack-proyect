// scripts/loginForm.js
export const createLoginForm = (loginCard) => {
  loginCard.innerHTML = `
    <h2 class="form-title">Login</h2>
    <form id="loginForm">
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-input" required>
      </div>
      <button type="submit" class="form-btn">Login</button>
      <a href="#" class="register-link">Not registered? Click to register</a>
    </form>
  `;
};

export const handleLoginFormSubmit = (e) => {
  e.preventDefault();

  const emailInput = e.target.querySelector('#email').value;
  const passwordInput = e.target.querySelector('#password').value;

  // Enviar los datos al servidor
  fetch('../php/login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput,
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