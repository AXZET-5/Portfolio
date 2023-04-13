const snapToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
    })
}

const toggleHamburger = () => {
    var hamburgerMenu = document.getElementById("hamburgerMenu")
    hamburgerMenu.classList.toggle('active')

    var everythingBlocker = document.getElementById("blockEverything")
    everythingBlocker.classList.toggle('active')

    var hamburgerIcons = document.getElementsByClassName("HamburgerIcon")
    for (hamburgerIcon in hamburgerIcons) {
      console.log(hamburgerIcon)
      if (hamburgerMenu.classList.contains('active')) {
        hamburgerIcon.innerHTML = 'X'
      }
      else {
        hamburgerIcon.innerHTML = '三'
      }
    }
}

const closeMenu = () => {
    var hamburgerMenu = document.getElementById("hamburgerMenu")
    hamburgerMenu.classList.remove('active')

    var everythingBlocker = document.getElementById("blockEverything")
    everythingBlocker.classList.remove('active')
}

function reveal() {
    var reveals = document.querySelectorAll(".Reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

function sleep(milliseconds) {
const date = Date.now();
let currentDate = null;
do {
    currentDate = Date.now();
} while (currentDate - date < milliseconds);
}
  
window.addEventListener("scroll", reveal);
window.addEventListener("DOMContentLoaded", reveal);