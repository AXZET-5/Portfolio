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
    if (hamburgerMenu.style.opacity === "0"){
        hamburgerMenu.style.opacity = "1"
    } else {
        hamburgerMenu.style.opacity = "0"
    }
}