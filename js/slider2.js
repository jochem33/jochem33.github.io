var pagina = document.getElementById("section0");
var hoog = window.innerHeight;
/*var breed = window.innerWidth;*/
//pagina.style.height = hoog + "px";
/*page1.style.width = hoog + "px";*/


auto();
function ga() {
    while (true) {
        setInterval(verder, 3000);
    }
}

var plt = 1;
var aantalslides = 4;
rel();

function terug() {
    plt = plt -1;
    if (plt == 0) {
        plt = 3;
    }
    rel();
    console.log(plt);
}

function verder() {
    plt = plt +1;
    if (plt == aantalslides + 1) {
        plt = 1;
    }
    rel();
}

function rel() {
    switch (plt) {
        case 1:
            pagina.style.backgroundImage = "url('pics/presentatie.png')";
            break;
        case 2:
            pagina.style.backgroundImage = "url('pics/fll.png')";
            break;
        case 3:
            pagina.style.backgroundImage = "url('pics/japan.png')";
            break;
        case 4:
            pagina.style.backgroundImage = "url('pics/jochemaanhetsolderen.jpg')";
            break;

        default:
            // code
    }

}

function auto() {
    plt++;
    switch (plt) {
        case 1:
            pagina.style.backgroundImage = "url('pics/presentatie.png')";
            break;
        case 2:
            pagina.style.backgroundImage = "url('pics/japan.png')";
            break;
        case 3:
            pagina.style.backgroundImage = "url('pics/fll.png')";
            break;
        case 4:
            pagina.style.backgroundImage = "url('pics/jochemaanhetsolderen.jpg')";
            break;

        default:
            plt = 0;
    }
    setTimeout(auto, 3000);
}
