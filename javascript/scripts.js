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