const visa = () => {
  const popups = document.querySelectorAll(".visa");

  for (let i = 0; i < popups.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = popups[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      popups[i].classList.add("aktiv");
    } else {
      popups[i].classList.remove("aktiv");
    }
  }
};

window.addEventListener("scroll", visa);
