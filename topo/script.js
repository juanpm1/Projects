let topo = document.querySelector('.topo');
let containerTopoHidden = document.querySelector('.container-topo-hidden');
let containerTopoVisible = document.querySelector('.container-topo-visible');
let menuTopo = document.querySelector('.menu-topo');
let startButton = document.querySelector('.start-button');
let scoreMenu = document.querySelector('.score-menu');
let score = document.querySelector('.score');
let difficultyTitle = document.querySelector('.difficulty-selector-title');
let easyDifficultyButton = document.querySelector('.easy-difficulty-button');
let mediumDifficultyButton = document.querySelector('.medium-difficulty-button');
let hardDifficultyButton = document.querySelector('.hard-difficulty-button');
let changeDifficultyButton = document.querySelector('.change-difficulty-button');
let counterNum = document.querySelector('.counter');
let counterImg = document.querySelector('.counter-img');

counterImg.style.display = 'none';
counterNum.style.display = 'none';
topo.style.display = 'none';
containerTopoHidden.style.display = 'none';
score.style.display= 'none';
startButton.style.display = 'none';
changeDifficultyButton.style.display = 'none';
difficultyTitle.style.display = 'block';

let difficulty = 0;
let startScore = 0;
let resultado = 0;
let startCounter = 0;

const setDifficulty = 
easyDifficultyButton.addEventListener('click',()=>{
    difficulty = 0;
    difficulty = difficulty + 1500;
    easyDifficultyButton.style.display = 'none'
    mediumDifficultyButton.style.display = 'none'
    hardDifficultyButton.style.display = 'none'
    difficultyTitle.style.display = 'none'
    startButton.style.display = 'block'
    startButton.value = 'Start'
})
mediumDifficultyButton.addEventListener('click',()=>{
    difficulty = 0;
    difficulty = difficulty + 1000;
    easyDifficultyButton.style.display = 'none'
    mediumDifficultyButton.style.display = 'none'
    hardDifficultyButton.style.display = 'none'
    difficultyTitle.style.display = 'none'
    startButton.style.display = 'block'
    startButton.value = 'Start'
})
hardDifficultyButton.addEventListener('click',()=>{
    difficulty = 0;
    difficulty = difficulty + 750;
    easyDifficultyButton.style.display = 'none'
    mediumDifficultyButton.style.display = 'none'
    hardDifficultyButton.style.display = 'none'
    difficultyTitle.style.display = 'none'
    startButton.style.display = 'block'
    startButton.value = 'Start'
});


const startGame = startButton.addEventListener('click',()=>{
    startScore = 0;
    startCounter = 0;
    topo.style.display = 'none'
    startButton.style.display = 'none';
    changeDifficultyButton.style.display = 'none';
    counterImg.style.display = 'block'
    counterNum.style.display = 'block'  
    menuTopo.style.display = 'none';
    scoreMenu.style.display = 'none';
    containerTopoHidden.style.display = 'block';
    containerTopoHidden.style.display = 'block';
    score.style.display= 'block';
    score.innerHTML = `Score: <b>${startScore}</b>`;
    counterNum.innerHTML = startCounter;

    const hideTopo = 
        setTimeout(()=>{
            topo.style.display = 'unset'
        }, difficulty);

    const randomPos = setInterval(()=>{
        randomPos1 = Math.random()*1700;
        randomPos2 = Math.random()*750;
        topo.style.marginLeft = `${randomPos1}px`  
        topo.style.marginTop = `${randomPos2}px` 
        topo.style.display = 'block';
    },difficulty);

    const finishGame = setTimeout(()=>{
        clearInterval(randomPos);
        topo.style.display = 'none'
        containerTopoHidden.style.display = 'none';
        counterImg.style.display = 'none';
        counterNum.style.display = 'none';
        score.style.display= 'none';
        startButton.style.display = 'block';
        menuTopo.style.display = 'block';
        scoreMenu.style.display = 'block';
        changeDifficultyButton.style.display = 'block';
        scoreMenu.innerHTML = `Score: <b>${startScore}</b>`;
        startButton.value = 'Restart'
    },40000);

});

const scoreTopoPlus = topo.addEventListener('click', ()=>{
    startScore = startScore + 100;
    score.innerHTML = `Score: <b>${startScore}</b>`;
});
const scoreTopoMinus = containerTopoHidden.addEventListener('click',()=>{
    startScore = startScore - 25
    if(startScore<0){
        startScore = 0;
    } 
    score.innerHTML = `Score: <b>${startScore}</b>`;
});

const changeDifficulty = changeDifficultyButton.addEventListener('click', ()=>{
    easyDifficultyButton.style.display = 'block'
    mediumDifficultyButton.style.display = 'block'
    hardDifficultyButton.style.display = 'block'
    difficultyTitle.style.display = 'block'
    changeDifficultyButton.style.display = 'none'
    scoreMenu.style.display = 'none';
    startButton.style.display = 'none'
})

const enojarTopo = topo.addEventListener('mouseover', ()=>{
    topo.src = 'topoEnojado.png';
})

const topoNormal = topo.addEventListener('mouseout',()=>{
    topo.src = 'topo.png';
})

topo.addEventListener('click',()=>{
    topo.style.display = 'none';
    startCounter = startCounter + 1;
    counterNum.innerHTML = startCounter;
})