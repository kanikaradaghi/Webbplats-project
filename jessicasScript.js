const text = document.getElementById('namn');
const bilden = document.getElementById('bilden');
const boxen = document.getElementById('boxen')

function paSkarmen(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function andraBilden() {
  if (paSkarmen(bilden)) {
    bilden.classList.add('storre');
    text.classList.add('bakgrund');
  }
  else {
    bilden.classList.remove('storre');
    text.classList.remove('bakgrund');
  }
}

function andraBoxen() {
  if (paSkarmen(boxen)) {
    boxen.classList.add('storre');
  }
  else {
    boxen.classList.remove('storre');
  }
}

window.addEventListener('scroll', () => {
  andraBilden();
  andraBoxen();
});


