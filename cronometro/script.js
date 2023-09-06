let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let miliSec = document.querySelector('.milisec');
let startButton = document.querySelector('.start-button');
let pauseButton = document.querySelector('.pause-button');
let restartButton = document.querySelector('.restart-button');
min.innerHTML = 0;
sec.innerHTML = 0;
miliSec.innerHTML = 0;
pauseButton.style.display = 'none';
restartButton.style.display = 'none';

startButton.addEventListener('click', function changeTimer(){
    pauseButton.style.display = 'inline-block';
    startButton.style.display = 'none';
    restartButton.style.display = 'none';
    let minutes = setInterval(()=>{
    min.innerHTML++  
    },60000);
    let seconds = setInterval(()=>{
    sec.innerHTML++
    },1000);
    let miliseconds = setInterval(()=>{
    miliSec.innerHTML++
    },10); 
    pauseButton.addEventListener('click', function stopTimer(){
        clearInterval(minutes);
        clearInterval(seconds);
        clearInterval(miliseconds);
        pauseButton.style.display = 'none';
        startButton.style.display = 'inline-block';
        restartButton.style.display = 'inline-block';
    })
});

restartButton.addEventListener('click', function restartTimer(){
    min.innerHTML = 0;
    sec.innerHTML = 0;
    miliSec.innerHTML = 0; 
    restartButton.style.display = 'none';
})











