let player1scr = 0;
let player2scr = 0;

let p1rbtn = document.querySelector('.p1roolbtn');
let p2rbtn = document.querySelector('.p2roolbtn');

let p1scr = document.querySelector('.p1score');
let p2scr = document.querySelector('.p2score');

let rstbtn = document.querySelector('.resetbtn');
let trnbox = document.querySelector('.turnbox');
let imgbox = document.querySelector(".diceimg");



        imgbox.setAttribute("src", "letsplay.png");
        imgbox.setAttribute("style", "height:100px");


p1rbtn.addEventListener('click',function(){
    
   trnbox.textContent = "Now player 2 turn";
    p1rbtn.disabled = true;
    p2rbtn.disabled = false;
    

    let dicenum = Math.floor(Math.random() * 6) + 1;
    player1scr += dicenum;
    p1scr.textContent = `Score ${player2scr}`;    
    if (dicenum == 1)
    {
        imgbox.setAttribute("src", "dice1.png");
    }

  else if (dicenum == 2)
    {
        imgbox.setAttribute("src", "dice2.png");
    }

  else if (dicenum == 3)
    {
        imgbox.setAttribute("src", "dice3.png");
    }

  else if (dicenum == 4)
    {
        imgbox.setAttribute("src", "dice4.png");
    }

  else if (dicenum == 5)
    {
        imgbox.setAttribute("src", "dice5.png");

    }

  else if (dicenum == 6)
    {
        imgbox.setAttribute("src", "dice6.png");
    }
if (player1scr >= 30)
{
    p1rbtn.disabled = true;
    p2rbtn.disabled = true;    
    trnbox.textContent = "player 1 win's";    

}


})


p2rbtn.addEventListener('click', function () {
    
    trnbox.textContent = "Now player 1 turn";
    p2rbtn.disabled = true;
    p1rbtn.disabled = false;

    let dicenum = Math.floor(Math.random() * 6) + 1;
    player2scr += dicenum;
    p2scr.textContent =`Score ${player2scr}` ;
    if (dicenum == 1) {
        imgbox.setAttribute("src", "dice1.png");
    }

    else if (dicenum == 2) {
        imgbox.setAttribute("src", "dice2.png");
    }

    else if (dicenum == 3) {
        imgbox.setAttribute("src", "dice3.png");
    }

    else if (dicenum == 4) {
        imgbox.setAttribute("src", "dice4.png");
    }

    else if (dicenum == 5) {
        imgbox.setAttribute("src", "dice5.png");

    }

    else if (dicenum == 6) {
        imgbox.setAttribute("src", "dice6.png");
    }

if (player2scr >= 30)
{
    p1rbtn.disabled = true;
    p2rbtn.disabled = true;    
    trnbox.textContent = "player 2 win's";    

}

})


rstbtn.addEventListener('click', function () {
    
    player1scr = 0;
    player2scr = 0;
    
    p1scr.textContent = player1scr;    
    p2scr.textContent = player2scr;    

    p2rbtn.disabled = false;
    p1rbtn.disabled = false;

    imgbox.setAttribute("src", "letsplay.png");
    imgbox.setAttribute("style", "height:100px");
    
    trnbox.textContent = "";    

})