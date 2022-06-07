function showIMG(image) {
    scroll(0, 100)
    document.getElementById("aboutBG").style.display = "block";
    document.getElementById("aboutBG").style.opacity = "1";
    document.getElementById("aboutBG").style.transition = "1s";
    document.getElementById("about_button").style.display = "block";
    document.getElementById("about_button").style.opacity = "1";
    document.getElementById(image).style.position = "absolute";
    if (image === "about_photo1") {
        document.getElementById(image).style.marginLeft = "-30vw";
        document.getElementById(image).style.marginTop = "5vw";
        document.getElementById(image).style.width = "60vw";
    }
    if (image === "about_photo2") {
        document.getElementById(image).style.marginLeft = "-75vw";
        document.getElementById(image).style.marginTop = "5vw";
        document.getElementById(image).style.width = "60vw";
    }
    if (image === "about_photo3") {
        document.getElementById(image).style.marginLeft = "-25vw";
        document.getElementById(image).style.marginTop = "-25vw";
        document.getElementById(image).style.width = "60vw";
    }
    if (image === "about_photo4") {
        document.getElementById(image).style.marginLeft = "-60vw";
        document.getElementById(image).style.marginTop = "-25vw";
        document.getElementById(image).style.width = "35vw";
    }
    setTimeout(() => {
        document.getElementById("body").style.overflowY = "hidden";
    }, 250);
};

function hideImg() {
    document.getElementById("body").style.overflowY = "scroll";
    document.getElementById("aboutBG").style.display = "none";
    document.getElementById("aboutBG").style.opacity = "0";
    document.getElementById("about_button").style.display = "none";
    document.getElementById("about_button").style.opacity = "0";
    document.getElementById("about_photo1").style.position = "static";
    document.getElementById("about_photo1").style.marginLeft = "0vw";
    document.getElementById("about_photo1").style.marginTop = "0vw";
    document.getElementById("about_photo1").style.width = "40vw";
    document.getElementById("about_photo2").style.position = "static";
    document.getElementById("about_photo2").style.marginLeft = "0vw";
    document.getElementById("about_photo2").style.marginTop = "0vw";
    document.getElementById("about_photo2").style.width = "40vw";
    document.getElementById("about_photo3").style.position = "static";
    document.getElementById("about_photo3").style.marginLeft = "0vw";
    document.getElementById("about_photo3").style.marginTop = "0vw";
    document.getElementById("about_photo3").style.width = "40vw";
    document.getElementById("about_photo4").style.position = "static";
    document.getElementById("about_photo4").style.marginLeft = "0vw";
    document.getElementById("about_photo4").style.marginTop = "0vw";
    document.getElementById("about_photo4").style.width = "40vw";
};