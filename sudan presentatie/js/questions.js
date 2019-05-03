document.body.style.backgroundColor = 'rgb(' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ')';


var name = localStorage.getItem("name");
var qustionNumber = document.getElementById("questionNumber").innerHTML;

document.getElementById("playerName").innerHTML = name;


function vote(msg) {

    var channel = realtime.channels.get("names");
    channel.publish("update", msg);

}

var questions = realtime.channels.get("qustions");
questions.subscribe(function(msg) {
    var data = msg.data
    if (data[0] == "Q") {
        qustionNumber = data[1]
        document.body.style.backgroundColor = 'rgb(' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ')';
    }
});