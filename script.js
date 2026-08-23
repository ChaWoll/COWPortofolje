// Fyller inn årstall i footer
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Interaktive mapper: liten "åpne mappe"-animasjon før vi navigerer videre.
document.querySelectorAll('[data-folder]').forEach(folder => {
  folder.addEventListener('click', (e) => {
    // Respekter cmd/ctrl-klikk (åpne i ny fane) uten å blokkere med animasjon
    if (e.metaKey || e.ctrlKey) return;

    const href = folder.getAttribute('href');
    if (!href) return;

    e.preventDefault();
    folder.classList.add('is-opening');

    window.setTimeout(() => {
      window.location.href = href;
    }, 260);
  });

  // Tastaturbrukere får samme opplevelse via Enter
  folder.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') folder.click();
  });
});
