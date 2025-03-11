const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const modernBar = entry.target.querySelector(".Modern-hidden");
    const animeringBar = entry.target.querySelector(".Animeringar-hidden");
    const konsthistoriaBar = entry.target.querySelector(
      ".Konsthistoria-hidden"
    );
    const arkitekturBar = entry.target.querySelector(".Arkitektur-hidden");

    if (entry.isIntersecting) {
      modernBar.classList.add("Modern");
      animeringBar.classList.add("Animeringar");
      konsthistoriaBar.classList.add("Konsthistoria");
      arkitekturBar.classList.add("Arkitektur");
    }
  });
});

observer.observe(document.querySelector(".kunskaper"));
window.onload = function () {
  setTimeout(function () {
    const content = document.getElementsByClassName("main-content");
    for (let i = 0; i < content.length; i++) {
      content[i].style.opacity = 1;
    }
  }, 100);
};
