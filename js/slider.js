var pagina = document.getElementById("page1");
console.log("Wat kijk je in de console?!");
var hoog = window.innerHeight;
var breed = window.innerWidth;
pagina.style.height = hoog + "px";
page1.style.width = hoog + "px";

auto();
function ga() {
    while (true) {
        setInterval(verder, 3000);
    }
}

var plt = 1;
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
    console.log("In de functie verder")
    plt = plt +1;
    if (plt == 4) {
        plt = 1;
    }
    rel();
    console.log(plt);
}

function rel() {
    console.log("in functie rel");
    console.log("plt: " + plt);
    switch (plt) {
        case 1:
            pagina.style.backgroundImage = "url('pics/presentatie.png')";
            break;
        case 2:
            pagina.style.backgroundImage = "url('pics/japan.png')";
            break;
        case 3:
            pagina.style.backgroundImage = "url('pics/presentatie.png')";
            break;

        default:
            // code
    }

}

function auto() {
    plt++;
    console.log("plt: " + plt);
    switch (plt) {
        case 1:
            pagina.style.backgroundImage = "url('pics/presentatie.png')";
            break;
        case 2:
            pagina.style.backgroundImage = "url('pics/japan.png')";
            break;
        case 3:
            pagina.style.backgroundImage = "url('pics/presentatie.png')";
            break;

        default:
            plt = 0;
    }
    setTimeout(auto, 1500);
}
