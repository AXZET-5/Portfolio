const snapToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
    })
}

const toggleHamburger = () => {
    console.log("activated")
    var hamburgerMenu = document.getElementById("hamburgerMenu")
    if (hamburgerMenu.style.display === "inline"){
        console.log("inline")
        hamburgerMenu.style.display = "none"
    } else {
        console.log("none")
        hamburgerMenu.style.display = "inline"
    }
}