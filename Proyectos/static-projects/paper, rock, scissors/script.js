let paperButton = document.querySelector('.container-rps__paper-btn');
let rockButton = document.querySelector('.container-rps__rock-btn');
let scissorsButton = document.querySelector('.container-rps__scissors-btn');
let selectButton = document.querySelector('.container-select__select-btn');

let computerSelection = undefined;
let selected = undefined;
selectButton.style.opacity = '0';

paperButton.addEventListener('click',()=>{
    selected = undefined;
    selected = 'paper';
    selectButton.style.opacity = '1';
})

rockButton.addEventListener('click',()=>{
    selected = undefined;
    selected = 'rock';
    selectButton.style.opacity = '1';
})

scissorsButton.addEventListener('click',()=>{
    selected = undefined;
    selected = 'scissors';
    selectButton.style.opacity = '1';
})

selectButton.addEventListener('click',()=>{
    selectButton.style.opacity = '0';
    randomSelection();
    console.log(computerSelection);
    console.log(selected);
    if (computerSelection === selected){
        alert('empate');
    }

    else if (computerSelection === 'rock' && selected === 'paper'){
        alert('ganaste');
    }
    else if (computerSelection === 'rock' && selected === 'scissors'){
        alert('perdiste');
    }

    else if (computerSelection === 'paper' && selected === 'scissors'){
        alert('ganaste');
    }
    else if (computerSelection === 'paper' && selected === 'rock'){
        alert('perdiste');
    }

    else if (computerSelection === 'scissors' && selected === 'rock'){
        alert('ganaste');
    }
    else if (computerSelection === 'scissors' && selected === 'paper'){
        alert('perdiste');
    }
})

function randomSelection(){
    let randomNum = Math.random()*3;
    if (randomNum >= 0 && randomNum <= 1){
        computerSelection = 'rock';
    }
    else if(randomNum > 1 && randomNum <= 2){
        computerSelection = 'paper';
    }
    else{
        computerSelection = 'scissors';
    }
}


