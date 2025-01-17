var typed2 = new Typed('#strike', {
  strings: [
    'Hey',
    'Qué onda',
    '¡Broooo!',
    '¡Amigoooo!',
    'Buenos días',
    '¿Estás ahí?',
    'Buenas tardes',
    '¿Tienes un minuto?',
    'Buenas noches',
    'Una pregunta',
    'Hola',
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelector('#year').innerHTML = year.toString(10);
});
