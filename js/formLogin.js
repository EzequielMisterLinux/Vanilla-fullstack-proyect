export const createLoginForm = (loginCard) => {
  loginCard.innerHTML = `
  
    <form id="loginForm" >
      <h2 class="form-title">Login</h2>
        <i class="fas fa-window-close icon-close"></i>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" class="form-input" required>
        <i class="fas fa-envelope icon-position"></i>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" class="form-input" required>
        <i class="fa fa-key icon-position"></i>
      </div>
      <div class="message-container">
        <div class="error-messages"></div>
        <div class="success-messages"></div>
      </div>
      <a href="#" class="forgotpass">forgot password? click here!</a>
      <button type="submit" class="form-btn">Login</button>
      
      
      <a href="#" class="register-link">Not registered? Click to register</a>
      <label for="options" class="form-label-options">Or continue with</label>
      <i href="#" class="fa-brands fa-google google-icon"></i>
    </form>
  
  
  `;
};

