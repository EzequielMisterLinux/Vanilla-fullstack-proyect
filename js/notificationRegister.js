// notificationRegister.js
export const showNotificationRegister = (message, type) => {
    const notificationContainer = document.createElement('div');
    notificationContainer.classList.add('notification');
  
    if (type === 'success') {
      notificationContainer.classList.add('success');
    } else if (type === 'error') {
      notificationContainer.classList.add('error');
    } else if (type === 'warning') {
      notificationContainer.classList.add('warning');
    }
  
    const notificationText = document.createElement('p');
    notificationText.textContent = message;
    notificationContainer.appendChild(notificationText);
  
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => {
      notificationContainer.remove();
    });
    notificationContainer.appendChild(closeButton);
  
    document.body.appendChild(notificationContainer);
  
    setTimeout(() => {
      notificationContainer.remove();
    }, 5000);
  };