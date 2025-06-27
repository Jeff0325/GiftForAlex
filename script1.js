const greetingEl = document.querySelector('.greeting');
const containerEl = document.querySelector('.container');
const nameEl = document.querySelector('.name');
const galleryEl = document.querySelector('.photo-gallery');
const spinButton = document.getElementById('spinButton');
const resultImage = document.getElementById('scatter-result');

const imagePaths = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/7.jpg',
  './images/9.jpg',
  './images/10.jpg'
];

const scatterImage = './images/scatter.png';
const galleryImages = document.querySelectorAll('.gallery-item');

let hasSpun = false;

// Helper: Shuffle array
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Step 1: Show scatter placeholders after greeting
setTimeout(() => {
  if (greetingEl) {
    document.body.removeChild(greetingEl);
  }

  galleryImages.forEach(img => {
    img.src = scatterImage;
  });

  if (galleryEl) {
    galleryEl.classList.remove('hidden');
    galleryEl.classList.add('show');
    spinButton.style.display = 'block';
  }
}, 38000);

// Step 2: Spin logic
spinButton.addEventListener('click', () => {
  if (hasSpun) return;
  hasSpun = true;

  resultImage.classList.remove('hidden');

  let index = 0;
  const shuffled = shuffleArray(imagePaths);

  // Pick 1 image for result
  const finalImage = shuffled[0];
  const remainingImages = shuffled.slice(1); // rest for gallery

  // Spin animation
  const spinInterval = setInterval(() => {
    resultImage.src = shuffled[index % shuffled.length];
    index++;
  }, 150);

  setTimeout(() => {
    clearInterval(spinInterval);

    // Set final result
    resultImage.src = finalImage;

    // Fill gallery with rest of shuffled images
    galleryImages.forEach((img, i) => {
      img.src = remainingImages[i] || ''; // fallback to blank
    });

    // After 10s, hide gallery and result, show animation
    setTimeout(() => {
      galleryEl.classList.remove('show');
      galleryEl.classList.add('hidden');
      resultImage.classList.add('hidden');

      const script = document.createElement('script');
      script.type = 'module';
      script.src = './script.js';
      document.body.appendChild(script);

      if (nameEl) {
        nameEl.style.display = 'block';
      }
    }, 10000);
  }, 2500);
});
