var playerDict = {}

var rightAns;
var ansSpeed = 1;
var anspoints = {1:10, 2:8, 3:7}

var answering = false;



var channel = realtime.channels.get("names");
channel.subscribe(function(msg) {
    var playerName = msg.data

    if(!(playerName in playerDict)) {
        playerDict[playerName] = 0;

        var node = document.createElement("LI");
        var textnode = document.createTextNode(playerName);
        node.appendChild(textnode);
        // document.getElementById("playerList").appendChild(node);
        playerList = document.getElementById("playerList");

        playerList.insertBefore(node, playerList.firstChild);

        var count = document.getElementById("playerCount");
        count.innerHTML = parseInt(count.innerHTML) + 1;
    }
});



function question(questionType, questionNumber, rightAnswer) {
    console.log("question: " + questionNumber);
    rightAns = rightAnswer;
    ansSpeed = 1
    answering = true;

    var questions = realtime.channels.get("questions");
    questions.publish("update", [questionType, questionNumber]);
}



var answers = realtime.channels.get("answers");
answers.subscribe(function(msg) {
    var data = msg.data

    console.log(data[0] + ": " + data[1])
    

    if (answering) {
        if (data[1] == rightAns) {
            if(data[0] in playerDict) {
                if(ansSpeed < 4) {
                    playerDict[data[0]]+= anspoints[ansSpeed];
                } else {
                    playerDict[data[0]]+=5;
                } 
                ansSpeed++;
            }
        }
    }
});



function stopQuestion(){
    answering = false;

    var questions = realtime.channels.get("questions");
    questions.publish("update", ["0", "0"]);
}