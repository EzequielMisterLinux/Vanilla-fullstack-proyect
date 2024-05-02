export const createSlider = (sliderContainer, storeContainer) => {
  const images = [
    'xiaomi.png',
    'imagen2.png',
    'image.png'
  ];

  const overlayImages = [
    'xiaomioverflow.png',
    'xiaomi.png',
    'xiaomi.png',
    'xiaomi.png'
  ];

  const baseUrl = './img/';
  let currentIndex = 0;
  let sliderInterval;
  let isHovered = false;

  const nextImage = () => {
    if (!isHovered) {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    }
  };

  const updateSlider = () => {
    sliderContainer.innerHTML = '';
    clearInterval(sliderInterval);

    const screenWidth = window.innerWidth;
    let imagesToShow;

    if (screenWidth <= 720) {
      imagesToShow = 1;
    } else if (screenWidth > 720 && screenWidth <= 900) {
      imagesToShow = 2;
    } else {
      imagesToShow = 3;
    }

    for (let i = 0; i < imagesToShow; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      const imageUrl = baseUrl + images[imageIndex];
      const overlayImageUrl = baseUrl + overlayImages[imageIndex];

      const sliderItem = document.createElement('div');
      sliderItem.classList.add('slider-item');
      sliderItem.style.backgroundImage = `url(${imageUrl})`;

      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.style.backgroundImage = `url(${overlayImageUrl})`;

      const productLink = document.createElement('a');
      productLink.classList.add('product-link');
      productLink.textContent = 'Ver producto';
      productLink.href = '#';
      productLink.addEventListener('click', (e) => {
        e.preventDefault();
        showStore(storeContainer);
        sliderContainer.style.display = 'none';
      });

      sliderItem.appendChild(overlay);
      sliderItem.appendChild(productLink);
      sliderContainer.appendChild(sliderItem);

      sliderItem.addEventListener('mouseenter', () => {
        isHovered = true;
        clearInterval(sliderInterval);
      });

      sliderItem.addEventListener('mouseleave', () => {
        isHovered = false;
        sliderInterval = setInterval(nextImage, 4000);
      });

      sliderItem.addEventListener('click', () => {
        showStore(storeContainer);
        sliderContainer.style.display = 'none';
      });
    }
  };

  const showStore = (storeContainer) => {
    storeContainer.style.display = 'block';
  };

  const handleResize = () => {
    updateSlider();
  };

  window.addEventListener('resize', handleResize);

  updateSlider();
  sliderInterval = setInterval(nextImage, 4000);

  return sliderInterval;
};