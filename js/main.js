let slidertext = document.getElementById("nameSliderText")
let position = 0

function moveSlider(distance) {
    position+= distance
    if(position > slidertext.offsetWidth / 3){
        position = 0
    }
    slidertext.style.transform = "translateX(-" + position + "px)"
}

setInterval(moveSlider, 1/60, .5)


let vh = window.screen.height / 100

let topContact =  document.getElementById("contactSection").getBoundingClientRect().top

let phoneScroll = document.getElementById("phoneScroll")
let topPhone = phoneScroll.getBoundingClientRect().top
let bottomPhone = phoneScroll.getBoundingClientRect().bottom

let projectTextScroll = document.getElementById("scrollElement")
let projectTextTop = projectTextScroll.getBoundingClientRect().top
let projectTextBottom = projectTextScroll.getBoundingClientRect().top



function checkScrollBreakpoints() {
    if(window.scrollY > 0 && window.scrollY < topPhone - 10*vh){
        phoneScroll.style.position = "unset"

        projectTextScroll.style.position = "unset"
    } 
    else if (window.scrollY > topPhone - 10*vh && window.scrollY < projectTextTop - 30*vh) {
        phoneScroll.style.position = "fixed"

        projectTextScroll.style.position = "unset"
    } 
    else if (window.scrollY > projectTextTop - 30*vh && window.scrollY < topContact - 100*vh) {
        phoneScroll.style.position = "fixed"
        phoneScroll.style.marginTop = "unset"

        projectTextScroll.style.position = "fixed"
        projectTextScroll.style.top = "unset"
    }
    else if (window.scrollY > topContact - 100*vh && window.scrollY < 1000000000) {
        phoneScroll.style.position = "unset"
        phoneScroll.style.marginTop = "210vh"

        projectTextScroll.style.position = "absolute"
        projectTextScroll.style.top = "200vh"
    }
}

document.addEventListener('scroll', checkScrollBreakpoints)

checkScrollBreakpoints()