export const createRegisterForm = (registerCard) => {
  registerCard.innerHTML = `
    
    <form id="registerForm">
      <h2 class="form-title">Register</h2>
      <i class="fas fa-window-close icon-close"></i>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-input" required>
        <i class="fas fa-envelope icon-position"></i>
      </div>
      <div class="form-group">
        <label for="username" class="form-label">Username</label>
        <input type="text" id="username" class="form-input" required>
        <i class="fas fa-user icon-position"></i>
      </div>
      <div class="form-group">
        <label for="fullName" class="form-label">Full Name</label>
        <input type="text" id="fullName" class="form-input" required>
        <i class="fas fa-user icon-position"></i>
      </div>
      <div class="form-group">
        <label for="address" class="form-label">Address</label>
        <input type="text" id="address" class="form-input" required>
        <i class="fas fa-address-card icon-position"></i>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-input" required>
        <i class="fas fa-key icon-position"></i>
      </div>

      <div class="message-container-register">
        <div class="error-messages-register"></div>
        <div class="success-messages-register"></div>
      </div>
      <a href="#" class="login-link">Already registered? Click to login</a>
      <button type="submit" class="form-btn">Register</button>


      
    </form>
  `;

};
