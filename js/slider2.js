let pagina = document.getElementById("section4");
let directory = "main"


let imgObject = {
    main: ["pics/photography/amsterdam-huisaanamstel.jpg", "pics/goldengate_big.jpg", "pics/photography/ameland-onweer.jpg", "pics/photography/denemarken-vijver.jpg"],
    amsterdam: ["pics/photography/amsterdam-huisaanamstel.jpg", "pics/photography/amsterdam-bloem.jpg", "pics/photography/amsterdam-garage.jpg", "pics/photography/amsterdam-mus.jpg", "pics/photography/amsterdam-palen.jpg", "pics/photography/amsterdam-parkiet.jpg"],
    sanfrancisco: ["pics/goldengate_big.jpg", "pics/photography/sanfransisco-monorail.jpg", "pics/photography/sanfransisco-goldengatemist.jpg", "pics/photography/sanfransisco-muir1.jpg", "pics/photography/sanfransisco-brug.jpg", "pics/photography/sanfransisco-pano.jpg", "pics/photography/sanfransisco-vliegtuig.jpg", "pics/photography/sanfransisco-zonenhotel.jpg"],
    ameland: ["pics/photography/ameland-onweer.jpg", "pics/photography/ameland-fazant.jpg", "pics/photography/ameland-konijn.jpg", "pics/photography/ameland-vliegtuig.jpg", "pics/photography/ameland-meeuw1.jpg"],
    denemarken: ["pics/photography/denemarken-vijver.jpg", "pics/photography/denemarken-bootje.jpg", "pics/photography/denemarken-kade.jpg", "pics/photography/denemarken-meeuw.jpg", "pics/photography/denemarken-pont.jpg", "pics/photography/denemarken-spreeuwen.jpg", "pics/photography/denemarken-strandzonsondergang.jpg", "pics/photography/denemarken-zonsondergang.jpg"]
}


let titles = document.getElementsByClassName("photography-small-title")
let titlebox = document.getElementById("photography-titles-div")
let backArrow = document.getElementById("backArrow")


let plt = 0;
let aantalslides = 0;


changeSlide(false, 1)

setInterval(() => {changeSlide(false, 1)}, 4500);


function changeSlide(useraction, direction) {
    aantalslides = imgObject[directory].length;

    pagina.style.backgroundImage = "url(" + imgObject[directory][plt] + ")";

    if(directory == "main") {
        titles[plt].classList.add("active")

        if (plt != 0){
            titles[plt - 1].classList.remove("active") 
        } else {
            titles[aantalslides - 1].classList.remove("active")
        }  
    }


    plt = plt + direction;
    if (plt == aantalslides || plt > aantalslides) {
        plt = 0;
    }
}


function changeDir(inputDirectory) {
    aantalslides = imgObject[directory].length;
    plt = 0
    directory = inputDirectory

    if(inputDirectory != "main") {
        titlebox.style.display = "none"
        backArrow.style.display = "block"

        pagina.style.backgroundSize = "contain"
    } else {
        backArrow.style.display = "none"
        titlebox.style.display = "block"

        pagina.style.backgroundSize = "cover"
    }

    changeSlide(true, 1)
}


//preload
let images = []
for (var i1 = 0; i1 < Object.keys(imgObject).length; i1++) {
    for (var i = 0; i < imgObject[Object.keys(imgObject)[i1]]; i++) {
        images.push(new Image())
        images[i].src = imgurls[i]
    }
}

changeDir("main")