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
  './images/6.jpg',
  './images/7.jpg'
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
  const total = imagePaths.length;

  const shuffledImages = shuffleArray(imagePaths); // No duplicates

  // Spin animation
  const spinInterval = setInterval(() => {
    resultImage.src = shuffledImages[index % total];
    index++;
  }, 150);

  // Stop spinning after 2.5s
  setTimeout(() => {
    clearInterval(spinInterval);

    const finalImage = shuffledImages[0]; // Pick the first from shuffled
    resultImage.src = finalImage;

    // Assign each unique image to the gallery
    galleryImages.forEach((img, i) => {
      img.src = shuffledImages[i] || '';
    });

    // Wait 10s before hiding gallery and showing flower animation
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
