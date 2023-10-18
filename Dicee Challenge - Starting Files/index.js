var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;

var image1src;
image1src = "images/dice" + randomNumber1 + ".png";

var image1;
image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , image1src);


var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image2src;
image2src = "images/dice" + randomNumber2 + ".png";

var image2;
image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , image2src);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML = "MatchDraw!";
}
