const greetingEl = document.querySelector('.greeting');
const containerEl = document.querySelector('.container');
const nameEl = document.querySelector('.name');

// Removed screen width check
setTimeout(() => {
  const script = document.createElement('script');
  script.type = 'module';
  script.src = './script.js';

  document.body.appendChild(script);

  if (greetingEl) {
    document.body.removeChild(greetingEl);
  }
}, 38000);
