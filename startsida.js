const karusell = document.querySelector(".karusell");
const arrowIcons = document.querySelectorAll(".bildspel i");

function körKarusell() {
    let firstImgWidth;

    if (window.innerWidth >= 1280) {
        firstImgWidth = document.querySelector(".karusell img").clientWidth + 24;
    } else {
        firstImgWidth = document.querySelector(".karusell img").clientWidth + 30;
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            if (icon.id == "vänster") {
                karusell.scrollLeft -= firstImgWidth;
            } else {
                karusell.scrollLeft += firstImgWidth;
            }
        })
    })
};

// Kör funktionen när sidan laddas
window.addEventListener("load", körKarusell);







    
