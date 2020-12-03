let windowHeight = window.innerHeight
let windowWidth = window.innerWidth
let windowCenterX = windowWidth / 2
let windowCenterY = windowHeight / 2

let zoom = 1e-10

let dt = 3.600e-5
let v = 10 * 1000 // km/s
let x = 6.371e-9
let rzStart = 1.496e-4
let rz = 1.496e-4
let mr = 549054
let mz = 1.9884e5
let ma = 5.972e9
let G = 6.67384e-16

let a = 0
let aEarth = 0
let aSun = 0

let heightPixels = windowHeight - 200
let pixelScale = heightPixels / rzStart
console.log(heightPixels, windowHeight, pixelScale)

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    console.log(G * mz * rz^(-2) -( G * ma * x^(-2) ), G * mz * rz^(-2), -( G * ma * x^(-2) ))
}

function draw() {
    console.log(" rzP", (rz * pixelScale).toFixed(2), " xP", (x * pixelScale).toFixed(2), " v", expo(v, 2), " rz", expo(rz, 2), " x", expo(x, 2), " a", a, " aS", aSun, " aE", aEarth)

    runModel()


    background(0)
    noStroke()
    fill(0, 195, 255)
    ellipse(windowCenterX, windowHeight - 100, 20, 20)
    rect(10, 100, 3, heightPixels)


    fill(255, 255, 0)
    ellipse(windowCenterX, 100, 100, 100)

    fill(255, 255, 255)
    rect(windowCenterX - 5, (windowHeight - 200) - (x * pixelScale) + 100, 10, 20)
}

function runModel() {
    // a = 0
    // a = (G * ma / x^2)
    aEarth = G * ma * x^(-2)
    aSun = G * mz * rz^(-2)
    a = aEarth + aSun
    v = v + a*dt
    x = x + v*dt
    rz = rzStart - x
    // t = t + dt
}



function expo(x, f) {
    return Number.parseFloat(x).toExponential(f)
}