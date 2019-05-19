document.body.style.backgroundColor = 'rgb(' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ')';


var name = localStorage.getItem("name");
var questionNumber = document.getElementById("questionNumber").innerHTML;

document.getElementById("playerName").innerHTML = name;


var questions = realtime.channels.get("questions");
questions.subscribe(function(msg) {
    var data = msg.data
    console.log(data);

    var QBlocks = document.getElementsByClassName("QBlock");
    for(var i = 0; i < QBlocks.length; i++){
        QBlocks[i].style.display = "none";
    }

    if (data[0] == "Q") {
        var QQestion = document.getElementById("QQuestion");
        QQestion.style.display = "block";

        console.log("multiple choice question")
        qustionNumber = data[1];
        document.body.style.backgroundColor = 'rgb(' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ')';
    }

    if (data[0] == "0") {
        var noQestion = document.getElementById("noQuestion");
        noQestion.style.display = "block";

        document.body.style.backgroundColor = 'rgb(' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ',' + Math.floor((Math.random() * 100) + 10) + ')';
    }
});



function submitAnswer(answer) {
    var answers = realtime.channels.get("answers");
    answers.publish("update", [name, answer]);

    var QBlocks = document.getElementsByClassName("QBlock");
    for(var i = 0; i < QBlocks.length; i++){
        QBlocks[i].style.display = "none";
    }

    var QQestion = document.getElementById("noQuestion");
        QQestion.style.display = "block";
}