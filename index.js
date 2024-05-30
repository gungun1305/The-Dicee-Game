
var num=Math.random();
num=(num*6)+1;
num=Math.floor(num);
var imagesource="images/dice"+num+".png";
document.querySelectorAll("img")[0].setAttribute("src",imagesource);


var num2=Math.random();
num2=(num2*6)+1;
num2=Math.floor(num2);
var imagesource2="images/dice"+num2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesource2);


if (num>num2){
    document.querySelector("h1").innerHTML=("Player 1 wins.");
}
else if (num<num2){
    document.querySelector("h1").innerHTML=("Player 2 wins.");
}
else{
    document.querySelector("h1").innerHTML=("Draw");
}