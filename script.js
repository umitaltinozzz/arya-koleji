const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Menüyü aç' : 'Menüyü kapat');
    navLinks.classList.toggle('is-open', !isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Menüyü aç');
      navLinks.classList.remove('is-open');
    });
  });
}

const aboutVisual = document.querySelector('.about-visual');
const introVideo = aboutVisual?.querySelector('video');
const videoPlay = aboutVisual?.querySelector('.video-play');

if (aboutVisual && introVideo && videoPlay) {
  videoPlay.addEventListener('click', async () => {
    try {
      await introVideo.play();
      aboutVisual.classList.add('is-playing');
    } catch {
      introVideo.controls = true;
    }
  });

  introVideo.addEventListener('play', () => aboutVisual.classList.add('is-playing'));
  introVideo.addEventListener('pause', () => aboutVisual.classList.remove('is-playing'));
  introVideo.addEventListener('ended', () => aboutVisual.classList.remove('is-playing'));
}
