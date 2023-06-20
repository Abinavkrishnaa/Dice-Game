var randomnumber1= Math.floor(Math.random()*6)+1;
var dicenumber="dice"+randomnumber1 +".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",dicenumber);
var randomnumber2= Math.floor(Math.random()*6)+1;
var  image2= "dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="PLAYEER2 WINS";
}
else if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="PLAYER1 WINS";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}

