var randomnumber=Math.floor(Math.random()*6)+1;

var randomDiceImage1="dice"+randomnumber+".png";

var randomDicesource="images/"+randomDiceImage1;

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomDicesource);

var randomnumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomnumber2+".png";

var randomDicesource2="images/"+randomDiceImage2;

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",randomDicesource2);


if(randomnumber>randomnumber2)
{
    document.querySelector("h2").innerHTML="Player 1 wins !";
}

else if(randomnumber<randomnumber2)
    {
        document.querySelector("h2").innerHTML="Player 2 wins !";
    }

else{

    document.querySelector("h2").innerHTML="Draw!!";

}