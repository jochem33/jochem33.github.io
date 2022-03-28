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

let scrollImage = document.getElementById("scrollImage")
let projects = document.getElementsByClassName("projects")
let projectImages = ["images/profile.jpg", "images/web/lifi.jpg", "images/web/bayver.png", "images/web/pictionairy.png"]

let projectBreakPoints = [0]
for (var j = 0; j < projects.length; j++) {
    projectBreakPoints.push(projects[j].getBoundingClientRect().top)
}


function checkScrollBreakpoints() {
    for(let i = 0; i < projectBreakPoints.length; i++){
        if(window.scrollY > projectBreakPoints[i] - 35*vh){
            scrollImage.src = projectImages[i]
        }
    }
}

document.addEventListener('scroll', checkScrollBreakpoints)


// let vh = window.screen.height / 100

// let topContact =  document.getElementById("contactSection").getBoundingClientRect().top

// let phoneScroll = document.getElementById("phoneScroll")
// let topPhone = phoneScroll.getBoundingClientRect().top
// let bottomPhone = phoneScroll.getBoundingClientRect().bottom

// let phone = document.getElementById("phone")


// function checkScrollBreakpoints() {
//     if(window.scrollY > 0 && window.scrollY < topPhone){
//         phoneScroll.style.position = "unset"
//         phone.style.marginTop = "10vh"
//     } 
//     else if (window.scrollY > topPhone && window.scrollY + 90*vh < topContact) {
//         phoneScroll.style.position = "fixed"
//         phone.style.marginTop = "10vh"
//     } 
//     else if (window.scrollY > topContact - 100*vh) {
//         phoneScroll.style.position = "unset"
//         phone.style.marginTop = "200vh"
//     }
// }

// document.addEventListener('scroll', checkScrollBreakpoints)

// checkScrollBreakpoints()