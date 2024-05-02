import { handleLoginFormSubmit } from './login.js';
import { handleRegisterFormSubmit } from './register.js';
import { createSlider } from './slider.js';
import { showNotification } from './notification.js';
import { createRegisterForm } from './formRegister.js';
import { createLoginForm } from './formLogin.js';
import { createStore, toggleView } from './store.js';
import { showNotificationRegister } from './notificationRegister.js';
import { handleLogout } from './logout.js';

let sliderInterval;
let isLoggedIn = false; // Variable de estado para rastrear si el usuario ha iniciado sesión

document.addEventListener('DOMContentLoaded', () => {
  const loginCard = document.querySelector('.login-card');
  const registerCard = document.querySelector('.register-card');
  const navBtn = document.querySelector('.nav-btn');
  const sliderContainer = document.querySelector('.slider');
  const storeContainer = document.querySelector('.store');

  sliderInterval = createSlider(sliderContainer, storeContainer);
  toggleView('home'); // Mostrar el slider al cargar la página

  createLoginForm(loginCard);
  createRegisterForm(registerCard);
  createStore(storeContainer);

  const toggleLoginForm = () => {
    registerCard.classList.remove('show');
    loginCard.classList.toggle('show');
  };

  const closeForm = () => {
    loginCard.classList.remove('show');
    registerCard.classList.remove('show');
  };

  const loginCloseIcon = loginCard.querySelector('.icon-close');
  loginCloseIcon.addEventListener('click', closeForm);

  const registerCloseIcon = registerCard.querySelector('.icon-close');
  registerCloseIcon.addEventListener('click', closeForm);

  const handleLogin = () => {
    isLoggedIn = true;
    navBtn.innerHTML = '<i class="fas fa-sign-out-alt">Logout</i>'; // Icono de cierre de sesión
    navBtn.removeEventListener('click', toggleLoginForm);
    navBtn.addEventListener('click', () => handleLogout(isLoggedIn, navBtn, toggleLoginForm));
    showNotification('Inicio de sesión exitoso', 'success');
    closeForm(); // Cerrar los formularios de inicio de sesión y registro después de un inicio de sesión exitoso
  };

  // Verificar el estado de la sesión al cargar la página
  fetch('http://localhost/project/php/check_session.php')
    .then(response => response.text())
    .then(data => {
      if (data === 'Usuario autenticado') {
        handleLogin();
      }
    })
    .catch(error => {
      console.error('Error al verificar la sesión:', error);
    });

  navBtn.addEventListener('click', toggleLoginForm);

  const loginForm = document.querySelector('#loginForm');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleLoginFormSubmit(e, handleLogin, loginCard);
  });

  navBtn.addEventListener('click', () => {
    if (navBtn.innerText === '') {
      handleLogout(isLoggedIn, navBtn, toggleLoginForm);
    }
  });

  const homeLink = document.querySelector('.nav-link[href="#home"]');
  homeLink.addEventListener('click', () => {
    toggleView('home');
  });

  const storeLink = document.querySelector('.nav-link[href="#store"]');
  storeLink.addEventListener('click', () => {
    toggleView('store');
  });

  const homeLinkMenu = document.querySelector('.nav-link[href="#homeMenu"]');
  homeLinkMenu.addEventListener('click', () => {
    toggleView('home');
  });

  const storeLinkMenu = document.querySelector('.nav-link[href="#storeMenu"]');
  storeLinkMenu.addEventListener('click', () => {
    toggleView('store');
  });

  const registerForm = document.querySelector('#registerForm');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleRegisterFormSubmit(e, registerCard);
  });

  const loginLink = registerCard.querySelector('.login-link');
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerCard.classList.remove('show');
    loginCard.classList.add('show');
  });

  const registerLink = loginCard.querySelector('.register-link');
  registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginCard.classList.remove('show');
    registerCard.classList.add('show');
  });

  window.addEventListener('notification', (event) => {
    const { message, type } = event.detail;
    showNotification(message, type);
  });

  window.addEventListener('notificationRegister', (event) => {
    const { message, type } = event.detail;
    showNotificationRegister(message, type);
  });

  window.addEventListener('beforeunload', () => {
    clearInterval(sliderInterval);
  });

  let menuHamburger;
  let navMobile;
   menuHamburger = document.querySelector('.menu-header');
   navMobile = document.querySelector('.nav-mobile');

   const viewMenu = () => {
    menuHamburger.addEventListener('click', () => {
      navMobile.style.display = (navMobile.style.display === 'block') ? 'none' : 'block';
   });
  };
  viewMenu();
  

 


});
