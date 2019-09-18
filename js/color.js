let colorlist = ["#d67302", "#C600FF", "#13b272", "#2880bf"]


let root = document.documentElement;

let randInt = Math.floor(Math.random() * colorlist.length);
console.log(randInt)

root.style.setProperty('--color1', colorlist[randInt]);

// #095fea