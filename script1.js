const greetingEl = document.querySelector('.greeting');
const containerEl = document.querySelector('.container');
const nameEl = document.querySelector('.name');
const galleryEl = document.querySelector('.photo-gallery');

// Step 1: After greeting ends, show image gallery
setTimeout(() => {
  if (greetingEl) {
    document.body.removeChild(greetingEl);
  }

  // Show photo gallery
  if (galleryEl) {
    galleryEl.classList.remove('hidden');
    galleryEl.classList.add('show');

    // Step 2: After 5 seconds, hide gallery and load flower animation
    setTimeout(() => {
      galleryEl.classList.remove('show');
      galleryEl.classList.add('hidden');

      // Now load the flower script
      const script = document.createElement('script');
      script.type = 'module';
      script.src = './script.js';
      document.body.appendChild(script);

      // Optionally, show the "Click Somewhere" text
      if (nameEl) {
        nameEl.style.display = 'block';
      }

    }, 5000); // 5 seconds for gallery display
  }

}, 38000); // Start gallery after greeting (38s)
