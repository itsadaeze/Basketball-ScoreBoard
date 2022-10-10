let homeBoard = document.getElementById("home-board");
let guestBoard = document.getElementById("guest-board")

let homescore = 0
let guestscore = 0

function addhome1(){
    homescore += 1
    homeBoard.textContent = homescore

}

function addhome2(){
    homescore += 2
    homeBoard.textContent = homescore
}

function addhome3(){
    homescore += 3
    homeBoard.textContent = homescore
}
function addguest1(){
    guestscore += 1
    guestBoard.textContent = guestscore

}

function addguest2(){
    guestscore += 2
    guestBoard.textContent = guestscore
}

function addguest3(){
    guestscore += 3
    guestBoard.textContent = guestscore
}