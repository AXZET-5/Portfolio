const snapToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
    })
}

/*const toggleHamburger = () => {
    var hamburgerMenu = document.getElementById("hamburgerMenu")
    if (hamburgerMenu.style.display === "inline"){
        hamburgerMenu.style.display = "none"
    } else {
        hamburgerMenu.style.display = "inline"
    }
}*/

const toggleHamburger = () => {
    var hamburgerMenu = document.getElementById("hamburgerMenu")
    hamburgerMenu.classList.toggle('active')

    var everythingBlocker = document.getElementByClass("blockEverything")
    everythingBlocker.classList.toggle('active')
}