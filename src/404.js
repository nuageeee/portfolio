import './style.css';
import { setupTheme } from './components/theme';

setupTheme();

// Affiche dans la fausse commande "cd" l'adresse que le visiteur a vraiment demandée.
// textContent (et non innerHTML) : l'adresse vient de l'URL, on ne l'interprète jamais comme du HTML.
const path = decodeURIComponent(window.location.pathname);
if (path && path !== '/404.html') {
  document.querySelector('#lost-path').textContent = path;
  document.querySelector('#lost-path-error').textContent = path;
}
