const snapToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
    })
}

const toggleHamburger = () => {
    var hamburgerMenu = document.getElementById("hamburgerMenu")
    console.log(hamburgerMenu)
    hamburgerMenu.classList.toggle('active')

    var everythingBlocker = document.getElementById("blockEverything")
    console.log(everythingBlocker)
    everythingBlocker.classList.toggle('active')
}