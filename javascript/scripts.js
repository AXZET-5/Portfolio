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
      var elementVisible = -50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);