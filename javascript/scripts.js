const snapToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
    })
}

const toggleHamburger = () => {
    var hamburgerMenu = document.getElementById("hamburgerMenu")
    if (hamburgerMenu.style.display === "none"){
        hamburgerMenu.style.display = "inline"
    }
    if (hamburgerMenu.style.display === "inline"){
        hamburgerMenu.style.display = "none"
    }
}