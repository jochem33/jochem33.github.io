var p1 = document.getElementById("pl1");
var p2 = document.getElementById("pl2");
var p3 = document.getElementById("pl3");
console.log("Wat kijk je in de console?!");
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
            console.log("plt is 1 dus we doen sappige dingen")
            p1.style.display = "block";
            p2.style.display = "none";
            p3.style.display = "none";
            break;
        case 2:
            p1.style.display = "none";
            p2.style.display = "block";
            p3.style.display = "none";
            break;
        case 3:
            p1.style.display = "none";
            p2.style.display = "none";
            p3.style.display = "block";
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
            p1.style.display = "block";
            p2.style.display = "none";
            p3.style.display = "none";
            break;
        case 2:
            p1.style.display = "none";
            p2.style.display = "block";
            p3.style.display = "none";
            break;
        case 3:
            p1.style.display = "none";
            p2.style.display = "none";
            p3.style.display = "block";
            break;

        default:
            plt = 0;
    }
    setTimeout(auto, 1500);
}
