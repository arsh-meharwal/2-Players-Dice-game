


var a = Math.random();
a = Math.floor(a*6);
console.log(a)
var b = Math.random();
b = Math.floor(b*6);
console.log(b)




if(a === 0){
    document.querySelector(".dice .img1").setAttribute("src","./images/dice1.png");
}
if(a === 1){
    document.querySelector(".dice .img1").setAttribute("src","./images/dice2.png");
}
if(a === 2){
    document.querySelector(".dice .img1").setAttribute("src","./images/dice3.png");
}
if(a === 3){     
    document.querySelector(".dice .img1").setAttribute("src","./images/dice4.png");
}
if(a === 4){
    document.querySelector(".dice .img1").setAttribute("src","./images/dice5.png");
}
if(a === 5){
    document.querySelector(".dice .img1").setAttribute("src","./images/dice6.png");
}
if(b === 0){
    document.querySelector(".dice2 .img2").setAttribute("src","./images/dice1.png");
}
if(b === 1){
    document.querySelector(".dice2 .img2").setAttribute("src","./images/dice2.png");
}
if(b === 2){
    document.querySelector(".dice2 .img2").setAttribute("src","./images/dice3.png");
}
if(b === 3){     
    document.querySelector(".dice2 .img2").setAttribute("src","./images/dice4.png");
}
if(b === 4){
    document.querySelector(".dice2 .img2").setAttribute("src","./images/dice5.png");
}
if(b === 5){
    document.querySelector(".dice2 .img2").setAttribute("src","./images/dice6.png");
}


if (a > b){
    document.querySelector("h1").innerHTML= "Player 1 Won";
}
else if (a < b){
    document.querySelector("h1").innerHTML="Player 2 Won";
}
else if(a === b){
    document.querySelector("h1").innerHTML="draw";
}



