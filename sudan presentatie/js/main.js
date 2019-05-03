var channel = realtime.channels.get("names");
channel.subscribe(function(msg) {
    var playerName = msg.data

    var node = document.createElement("LI");
    var textnode = document.createTextNode(playerName);
    node.appendChild(textnode);
    document.getElementById("playerList").appendChild(node);

    var count = document.getElementById("playerCount");
    count.innerHTML = parseInt(count.innerHTML) + 1;
});