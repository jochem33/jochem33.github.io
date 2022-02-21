let slidertext = document.getElementById("nameSliderText")
let position = 0

function moveSlider(distance) {
    position+= distance
    if(position > slidertext.offsetWidth / 3){
        position = 0
    }
    slidertext.style.transform = "translateX(-" + position + "px)";
}

setInterval(moveSlider, 1/60, .5)