let windowHeight = window.innerHeight
let windowWidth = window.innerWidth
let windowCenterX = windowWidth / 2
let windowCenterY = windowHeight / 2

let frameTime = 1
let zoom = 1e-10

let dt = 0.01
let v = 8.789 * 958080 * 1000 // km/s
let x = 1.0 * 10 ^ 6
let rzStart = 1.496e11 // 11
let rz = 1.496e11 // 11
let mr = 549054
let mz = 1.9884e30 // 30
let ma = 5.972e28 // 24
let G = 6.67384e-11

let heightPixels = windowHeight - 200
let pixelScale = rzStart / heightPixels
console.log(heightPixels, windowHeight, pixelScale)


let s_dt = dt / pixelScale
let s_v = v / pixelScale
let s_x = 5
let s_rzStart = rzStart / pixelScale
let s_rz = rz / pixelScale
let s_mr = mr / pixelScale
let s_mz = mz / (pixelScale)
let s_ma = ma / (pixelScale)
let s_G = G / pixelScale


// let s_dt = dt / pixelScale
// let s_v = v / pixelScale
// let s_x = x / pixelScale
// let s_rzStart = rzStart / pixelScale
// let s_rz = rz / pixelScale
// let s_mr = mr
// let s_mz = mz
// let s_ma = ma
// let s_G = G


let a = 0
let aEarth = 0
let aSun = 0

let startSpeed
let h1

let running = false

function start(){
    a = 0
    aEarth = 0
    aSun = 0


    dt = 0.01
    v = startSpeed.value() * 958080 * 1000 // km/s
    x = 1.0 * 10 ^ 6
    rzStart = 1.496e11 // 11
    rz = 1.496e11 // 11
    mr = 549054
    mz = 1.9884e30 // 30
    ma = 5.972e28 // 24
    G = InputG.value() / (50) * 6.67384e-11
    console.log(G, InputG.value())


    s_dt = dt / pixelScale
    s_v = v / pixelScale
    s_x = 5
    s_rzStart = rzStart / pixelScale
    s_rz = rz / pixelScale
    s_mr = mr / pixelScale
    s_mz = mz / (pixelScale)
    s_ma = ma / (pixelScale)
    s_G = G / pixelScale


    running = true
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    console.log(G * mz * rz^(-2) -( G * ma * x^(-2) ), G * mz * rz^(-2), -( G * ma * x^(-2) ))
    console.log("start", s_x, heightPixels)

    startSpeed = createInput("Start snelheid")
    startSpeed.position(10, 10)
    startSpeed.style('font-size', '17px')

    InputG = createSlider("Start snelheid")
    InputG.position(10, 40)
    InputG.style('width', '200px')

    button = createButton("Start model")
    button.position(10, 70)
    button.style('font-size', '17px')
    button.mousePressed(start)
}

function draw() {
    background(0)

    textSize(32)
    text('word', 10, 30)
    fill(0, 102, 153)


    if(s_x < heightPixels - 1 && s_x > -heightPixels && running){
        for(let i = 0; i < frameTime; i++){
            runModel()
            console.log("px", pixelScale, heightPixels, "\nrzP", (s_rz).toFixed(2), "\nxP", (s_x).toFixed(2), "\na", a, "\naS", aSun, "\naE", aEarth, "\nv", expo(s_v, 2), "\nrz", expo(s_rz, 2), "\nx", expo(s_x, 2), "\nmz", expo(s_mz, 2), "\nma", expo(s_ma, 2))
        }
    }


    noStroke()
    fill(0, 195, 255)
    ellipse(windowCenterX, windowHeight - 100, 20, 20)
    rect(10, 100, 3, heightPixels)


    fill(255, 255, 0)
    ellipse(windowCenterX, 100, 100, 100)

    fill(255, 255, 255)
    rect(windowCenterX - 5, (windowHeight - 200) - (s_x) + 100, 10, 20)
}

function runModel() {
    // a = 0
    // a = (G * ma / x^2)
    
    aEarth = 10e0 * s_G * s_ma / (s_x^2)

    if(s_rz >= 0){
        aSun = 10e0 * s_G * s_mz / (s_rz^2)
    } else {
        aSun = -10e0 * s_G * s_mz / (s_rz^2)
    }
    
    aSun = 10e0 * s_G * s_mz / (s_rz^2)
    a = aSun - aEarth
    // a = aSun
    s_v = s_v + a * dt
    s_x = s_x + s_v * dt
    s_rz = s_rzStart - s_x
    // t = t + dt
}



function expo(x, f) {
    return Number.parseFloat(x).toExponential(f)
}