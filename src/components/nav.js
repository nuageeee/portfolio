// Met en valeur, dans la barre de navigation, le lien de la section en cours de lecture.
export function setupNav() {
  const links = document.querySelectorAll('.nav-links a');

  // Retrouve le lien qui pointe vers une section donnée (via son href="#id").
  const linkFor = (id) => document.querySelector(`.nav-links a[href="#${id}"]`);

  function setActive(id) {
    links.forEach((link) => {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    });
    const link = linkFor(id);
    if (link) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'true');
    }
  }

  // L'observateur prévient quand une section traverse une fine bande au milieu de l'écran.
  // C'est cette section-là qu'on considère "en cours de lecture".
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
}
