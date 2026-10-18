const THEMES = {
  dawn: { label: 'Matin', pressed: 'false' },
  dusk: { label: 'Crépuscule', pressed: 'true' },
};

export function setupTheme() {
  const root = document.documentElement;
  const button = document.querySelector('#theme');

  // Met la page ET le bouton dans l'état demandé.
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    button.textContent = THEMES[theme].label;
    button.setAttribute('aria-pressed', THEMES[theme].pressed);
  }

  // Au chargement : le script du <head> a déjà posé le bon thème,
  // on aligne juste le bouton dessus.
  const initial = root.getAttribute('data-theme') === 'dusk' ? 'dusk' : 'dawn';
  applyTheme(initial);

  button.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dawn' ? 'dusk' : 'dawn';
    applyTheme(next);

    // Mémorise le choix (peut échouer en navigation privée, sans gravité).
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });
}
