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


function scrollTo(to, duration) {
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
  },10);
}

function test(elID)
{
  var dest = document.getElementById(elID);
  scrollTo(dest.offsetTop, 500);
}

$('#fullpage').fullpage({
  anchors: ['pag1', 'pag2', 'pag3', 'pag4', 'pag5'],
  //sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});

$(document).ready(function() {
	$('#fullpage').fullpage();
});
