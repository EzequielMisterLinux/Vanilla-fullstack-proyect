// store.js
export const createStore = (storeContainer) => {
  storeContainer.innerHTML = `
    <div class="storeCenter">
      <h2>Store</h2>
      <p>Welcome to our store! Here you can buy various products.</p>
    </div>
  `;
};

export const toggleView = (view) => {
  const sliderContainer = document.querySelector('.slider');
  const storeContainer = document.querySelector('.store');

  if (view === 'home') {
    sliderContainer.style.display = 'flex';
    storeContainer.style.display = 'none';
  } else if (view === 'store') {
    sliderContainer.style.display = 'none';
    storeContainer.style.display = 'block';
  }
};