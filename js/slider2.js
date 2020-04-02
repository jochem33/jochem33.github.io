let pagina = document.getElementById("section4")
let directory = "main"


let imgObject = {
    main: ["pics/photography/amsterdam-huisaanamstel.jpg", "pics/goldengate_big.jpg", "pics/photography/ameland-onweer.jpg", "pics/photography/denemarken-vijver.jpg"],
    amsterdam: ["pics/photography/amsterdam-huisaanamstel.jpg", "pics/photography/amsterdam-bloem.jpg", "pics/photography/amsterdam-garage.jpg", "pics/photography/amsterdam-mus.jpg", "pics/photography/amsterdam-palen.jpg", "pics/photography/amsterdam-parkiet.jpg"],
    sanfrancisco: ["pics/goldengate_big.jpg", "pics/photography/sanfransisco-monorail.jpg", "pics/photography/sanfransisco-goldengatemist.jpg", "pics/photography/sanfransisco-muir1.jpg", "pics/photography/sanfransisco-brug.jpg", "pics/photography/sanfransisco-pano.jpg", "pics/photography/sanfransisco-vliegtuig.jpg", "pics/photography/sanfransisco-zonenhotel.jpg"],
    ameland: ["pics/photography/ameland-onweer.jpg", "pics/photography/ameland-fazant.jpg", "pics/photography/ameland-konijn.jpg", "pics/photography/ameland-vliegtuig.jpg"],
    denemarken: ["pics/photography/denemarken-vijver.jpg", "pics/photography/denemarken-bootje.jpg", "pics/photography/denemarken-kade.jpg", "pics/photography/denemarken-meeuw.jpg", "pics/photography/denemarken-pont.jpg", "pics/photography/denemarken-spreeuwen.jpg", "pics/photography/denemarken-strandzonsondergang.jpg", "pics/photography/denemarken-zonsondergang.jpg"]
}


let titles = document.getElementsByClassName("photography-small-title")
let titlebox = document.getElementById("photography-titles-div")
let backArrow = document.getElementById("backArrow")
let bottomControlsDiv = document.getElementById("bottomControlsDiv")

let dots = document.getElementsByClassName("dot")
let circleDiv = document.getElementById("circleDiv")

let activeHighlight = titles;


let plt = 0
let aantalslides = 0



setInterval(() => {changeSlide(true)}, 4500)


function changeSlide(direction) {
    aantalslides = imgObject[directory].length

    pagina.style.backgroundImage = "url(" + imgObject[directory][plt] + ")"

    if(directory == "main") {
        activeHighlight = titles;
    } else {
        activeHighlight = dots;
    }

    activeHighlight[plt].classList.add("active")

    if (plt != 0){
        activeHighlight[plt - 1].classList.remove("active") 
    } else {
        activeHighlight[aantalslides - 1].classList.remove("active")
    }  



    if(direction === true) {
        plt+= 1
    } else if(direction === false) {
        plt-= 1
    } else {
        plt = direction
    }

    if (plt == aantalslides || plt > aantalslides) {
        plt = 0
    } else if(plt < 0) {
        plt = aantalslides -1
    }
}


function changeDir(inputDirectory) {
    directory = inputDirectory
    aantalslides = imgObject[directory].length
    plt = 0
    dots = document.getElementsByClassName("dot")


    if(inputDirectory != "main") {
        titlebox.style.display = "none"
        bottomControlsDiv.style.display = "flex"
        backArrow.style.display = "block"

        pagina.style.backgroundSize = "contain"
    } else {
        titlebox.style.display = "block"
        bottomControlsDiv.style.display = "none"
        backArrow.style.display = "none"

        pagina.style.backgroundSize = "cover"
    }


    while (circleDiv.childNodes.length > 2) {
        circleDiv.removeChild(circleDiv.lastChild);
    }

    for (var i = 0; i < aantalslides -1; i++) {
        let newDot = dots[0].cloneNode(true)
        newDot.classList.remove("active") 
        circleDiv.appendChild(newDot)
    }

    dots = document.getElementsByClassName("dot")

    changeSlide(true)
}


//preload
let images = []
for (var i1 = 0; i1 < Object.keys(imgObject).length; i1++) {
    console.log("preloading: " + i1)
    let imgurls = imgObject[Object.keys(imgObject)[i1]]
    for (var i = 0; i < imgurls.length; i++) {
        images.push(new Image())
        images[i].src = imgurls[i]
        console.log("       preloaded: " + imgurls[i])
    }
}

changeDir("main")