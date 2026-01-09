console.log('✨ Welcome to the most fabulous site ever! ✨');

// Create floating sparkles and hearts
function createFloatingEmoji() {
  const emojis = ['✨', '💖', '💕', '🌈', '💗', '💝', '🦄', '👑', '💎'];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const element = document.createElement('div');
  element.textContent = emoji;
  element.style.position = 'fixed';
  element.style.left = Math.random() * 100 + '%';
  element.style.bottom = '-50px';
  element.style.fontSize = (Math.random() * 20 + 15) + 'px';
  element.style.pointerEvents = 'none';
  element.style.zIndex = '9999';
  element.style.animation = `floatUp ${Math.random() * 3 + 4}s linear`;

  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 7000);
}

// Add floating emoji periodically
setInterval(createFloatingEmoji, 800);

// Create sparkle trail effect on mouse move
let mouseX = 0;
let mouseY = 0;
let sparkleTimeout;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Create sparkle at mouse position occasionally
  if (Math.random() > 0.9) {
    createSparkleAtPosition(mouseX, mouseY);
  }
});

function createSparkleAtPosition(x, y) {
  const sparkle = document.createElement('div');
  sparkle.textContent = '✨';
  sparkle.style.position = 'fixed';
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  sparkle.style.fontSize = '20px';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.zIndex = '9999';
  sparkle.style.animation = 'sparkleDisappear 1s ease-out';

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

// Add random pulsing hearts in corners
function createCornerHeart() {
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.position = 'fixed';
  heart.style.fontSize = '40px';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '9999';
  heart.style.opacity = '0';
  heart.style.animation = 'heartPulse 3s ease-in-out';

  const corners = [
    { top: '20px', left: '20px' },
    { top: '20px', right: '20px' },
    { bottom: '20px', left: '20px' },
    { bottom: '20px', right: '20px' }
  ];

  const corner = corners[Math.floor(Math.random() * corners.length)];
  Object.assign(heart.style, corner);

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

setInterval(createCornerHeart, 4000);

// Add rainbow effect to text on click
document.addEventListener('click', (e) => {
  const rainbow = document.createElement('div');
  rainbow.textContent = '🌈';
  rainbow.style.position = 'fixed';
  rainbow.style.left = e.clientX + 'px';
  rainbow.style.top = e.clientY + 'px';
  rainbow.style.fontSize = '30px';
  rainbow.style.pointerEvents = 'none';
  rainbow.style.zIndex = '9999';
  rainbow.style.animation = 'rainbowExplode 1.5s ease-out';

  document.body.appendChild(rainbow);

  // Create multiple sparkles around the rainbow
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const angle = (Math.PI * 2 * i) / 8;
      const distance = 50;
      const sparkleX = e.clientX + Math.cos(angle) * distance;
      const sparkleY = e.clientY + Math.sin(angle) * distance;
      createSparkleAtPosition(sparkleX, sparkleY);
    }, i * 50);
  }

  setTimeout(() => {
    rainbow.remove();
  }, 1500);
});

// Add glitter effect to headers on hover
document.querySelectorAll('h1, h2, h3').forEach(header => {
  header.addEventListener('mouseenter', () => {
    const rect = header.getBoundingClientRect();
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        createSparkleAtPosition(x, y);
      }, i * 100);
    }
  });
});

// Create shooting stars occasionally
function createShootingStar() {
  const star = document.createElement('div');
  star.textContent = '⭐';
  star.style.position = 'fixed';
  star.style.left = '100%';
  star.style.top = Math.random() * 50 + '%';
  star.style.fontSize = '25px';
  star.style.pointerEvents = 'none';
  star.style.zIndex = '9999';
  star.style.animation = 'shootingStar 3s linear';

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);
}

setInterval(createShootingStar, 8000);

// Add bounce effect to nav items
document.querySelectorAll('nav a').forEach((link, index) => {
  link.addEventListener('mouseenter', () => {
    link.style.animation = `navBounce 0.5s ease ${index * 0.1}s`;
  });

  link.addEventListener('animationend', () => {
    link.style.animation = '';
  });
});

// Add CSS keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(720deg);
      opacity: 0;
    }
  }

  @keyframes sparkleDisappear {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: scale(1.5) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes heartPulse {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.5);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes rainbowExplode {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: scale(2) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: scale(3) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes shootingStar {
    0% {
      transform: translateX(0) translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateX(-150vw) translateY(50vh) rotate(-360deg);
      opacity: 0;
    }
  }

  @keyframes navBounce {
    0%, 100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(-5px);
    }
    75% {
      transform: translateY(-7px);
    }
  }
`;
document.head.appendChild(style);

// Add rainbow text effect on double-click
document.addEventListener('dblclick', (e) => {
  if (e.target.tagName === 'P' || e.target.tagName === 'H1' || e.target.tagName === 'H2' || e.target.tagName === 'H3') {
    e.target.style.animation = 'rainbowText 2s ease-in-out';
    setTimeout(() => {
      e.target.style.animation = '';
    }, 2000);
  }
});

// Create confetti explosion on protocol list item click
document.querySelectorAll('.protocols-list li').forEach(item => {
  item.addEventListener('click', (e) => {
    const rect = item.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const confettiEmojis = ['✨', '💖', '🌟', '💕', '⭐', '💗', '🌈'];

    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = centerX + 'px';
        confetti.style.top = centerY + 'px';
        confetti.style.fontSize = '20px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const endX = centerX + Math.cos(angle) * velocity;
        const endY = centerY + Math.sin(angle) * velocity;

        confetti.style.animation = `confettiFall 1.5s ease-out`;
        confetti.style.setProperty('--endX', endX + 'px');
        confetti.style.setProperty('--endY', endY + 'px');

        document.body.appendChild(confetti);

        setTimeout(() => {
          confetti.remove();
        }, 1500);
      }, i * 30);
    }
  });
});

// Log fabulous message
console.log('%c💖 Stay Fabulous! 💖', 'color: #ff69b4; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%c✨ Remember: Protocols are EVERYTHING! ✨', 'color: #ff1493; font-size: 16px; font-weight: bold;');
