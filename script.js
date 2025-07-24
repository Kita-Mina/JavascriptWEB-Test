const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
  'images/image6.jpg',
  'images/image7.jpg'
];

const track = document.querySelector('.slider-track');
const viewMoreBtn = document.querySelector('.view-more');
const itemsPerPage = 3;
let currentIndex = 0;

function renderImages() {
  track.innerHTML = '';
  for (let i = 0; i < itemsPerPage; i++) {
    const imgIndex = (currentIndex + i) % images.length;
    const div = document.createElement('div');
    div.className = 'slider-box';
    div.style.backgroundImage = `url('${images[imgIndex]}')`;
    track.appendChild(div);
  }
}

viewMoreBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + itemsPerPage) % images.length;
  renderImages();
});

renderImages();




window.onload = function () {
  if (!window.location.pathname.endsWith('index.html')) {
    setTimeout(() => {
      window.location.href = locateMainIndex();
    }, 3000);
  }
};

function locateMainIndex() {
  const currentPath = window.location.pathname;
  const parts = currentPath.split('/').filter(Boolean);
  let relativePath = '';
  for (let i = 1; i < parts.length; i++) {
    relativePath += '../';
  }
  return relativePath + 'index.html';
}
