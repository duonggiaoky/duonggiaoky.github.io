(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-navigation');
  if (menuButton && navigation) {
    menuButton.hidden = false;
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    };
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(expanded));
      navigation.classList.toggle('is-open', expanded);
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.nav')) closeMenu();
    });
  }

  const themeButton = document.querySelector('#themeToggle');
  if (themeButton) {
    const applyTheme = theme => {
      document.documentElement.dataset.theme = theme;
      themeButton.setAttribute('aria-pressed', String(theme === 'light'));
      themeButton.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
      themeButton.firstElementChild.textContent = theme === 'light' ? '☾' : '☼';
    };
    try {
      const saved = localStorage.getItem('gkd-theme');
      if (saved === 'light' || saved === 'dark') applyTheme(saved);
    } catch (_) { /* Themes still work when browser storage is unavailable. */ }
    themeButton.addEventListener('click', () => {
      const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      applyTheme(theme);
      try { localStorage.setItem('gkd-theme', theme); } catch (_) { /* Optional preference. */ }
    });
  }

  document.documentElement.classList.add('js-ready');
})();
