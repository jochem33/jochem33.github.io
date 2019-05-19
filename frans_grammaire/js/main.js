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

    viewProgress();
}

function viewProgress() {
    var props = Object.keys(playerDict).map(function(key) {
        return { key: key, value: this[key] };
    }, playerDict);
    props.sort(function(p1, p2) { return p2.value - p1.value; });
    var topThree = props.slice(0, 5);

    var topThreeObj = props.slice(0, 5).reduce(function(obj, prop) {
        obj[prop.key] = prop.value;
        return obj;
    }, {});



    var loops = 5;

    if(props.length < 5) {
        loops = props.length;
    }

    var scoreLists = document.getElementsByClassName("scoreLists")



    for (var i1 = 0; i1 < scoreLists.length; i1++) {
        while (scoreLists[i1].firstChild) {
            scoreLists[i1].removeChild(scoreLists[i1].firstChild);
        }

        for (i = 0; i < loops; i++) { 
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            tr.appendChild(td1);
            tr.appendChild(td2);
    
            key = topThreeObj[Object.keys(topThreeObj)[i]];
            console.log(key)
            var textnode = document.createTextNode(Object.keys(topThreeObj)[i]);
            td1.appendChild(textnode);
            textnode = document.createTextNode(key);
            td2.appendChild(textnode);
    
    
            scoreLists[i1].appendChild(tr);
        }
    }
    // playerList = document.getElementById("playerList");

    // playerList.insertBefore(node, playerList.firstChild);
}

function displayTable(index, loops, topThreeObj) {
    
}