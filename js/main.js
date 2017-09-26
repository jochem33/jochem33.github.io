function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

var hoog = window.innerHeight;
var page1 = document.getElementById('page1');
page1.style.height = hoog + "px";
var page2 = document.getElementById('page2');
page2.style.height = hoog + "px";
var page3 = document.getElementById('page3');
page3.style.height = hoog + "px";
var page4 = document.getElementById('page4');
page4.style.height = hoog + "px";
var page5 = document.getElementById('page5');
page5.style.height = hoog + "px";

var badges = document.getElementById('badges');
badges.style.maxheight = hoog + "px";

if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
  var elm2 = document.getElementById("bodiv");
  elm2.style.overflow = "scroll";
}


function scrollTo(to, duration) {
    var elm2 = document.getElementById("bodiv");
    elm2.style.overflow = "visible";
    wait(100);
    if (document.body.scrollTop == to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = window.pageYOffset;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
            console.log("scrolling");
        }
        else { clearInterval(scrollInterval); }
        var elm2 = document.getElementById("bodiv");
        elm2.style.overflow = "scroll";
    },10);
}

function test(elID)
{
  var dest = document.getElementById(elID);
  scrollTo(dest.offsetTop, 500);
}

var koek = document.getElementById('koek');
var koekask = localStorage.getItem("cookies");
console.log(koekask);

if(koekask = null) {
  koek.style.display = "block";
} else {
  koek.style.display = "none";
}

function cookies() {
  koek.style.display = "none";
  localStorage.setItem("cookies", "yes");
}
