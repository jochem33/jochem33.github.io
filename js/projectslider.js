let blokjes = document.getElementsByClassName("sliding");

for (i = 0; i < blokjes.length; i++) { 
    blokjes[i].setAttribute('data-order', i);
}

setInterval( function() { changeOrder(false); }, 3500 );


function changeOrder(directionRight) {
    const blokjes = document.querySelectorAll(`.sliding`);
    const max = document.getElementsByClassName("sliding").length - 1;
    const min = 0;
  
    if (directionRight) {
        for (const slide of blokjes) {
            if (slide.getAttribute('data-order') == max) {
                slide.setAttribute('data-order', min);
            } else {
                slide.setAttribute('data-order', parseInt(slide.getAttribute('data-order')) + 1);
            }
        }
    } else {
        for (const slide of blokjes) {
            if (slide.getAttribute('data-order') == min) {
                slide.setAttribute('data-order', max);
            } else {
                slide.setAttribute('data-order', parseInt(slide.getAttribute('data-order')) - 1);
            }
        }
    }
}
