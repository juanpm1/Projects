"use strict";

/* Audio settings */
let audio = document.getElementById('rain-audio');
let audioBtn = document.getElementById('nav-container__audio-btn');
let audioIcon = document.getElementById('audio-btn__audio-icon');
let audioPlaying = true;
audio.volume = 0.05
audioBtn.addEventListener('click',()=>{
    if (audioPlaying){
        audioIcon.src = 'audio-off-icon.svg';
        audio.volume = 0;
        audioPlaying = false;
    }else{
        audioIcon.src = 'audio-on-icon.svg';
        audio.volume = 0.05;
        audioPlaying = true;
    }
})

/* Arrow - scroll settings */
document.getElementById('scroll-btn').addEventListener('click',()=>{
    window.scrollTo(0,850);
})


/* Random quotes settings */
const randomNum = ()=>{
    let randomN = Math.round(Math.random()*10);
    return randomN
}
const quotes = {
    quote0 : `"Get busy living or get busy dying."`,
    quote1 : `"You only live once, but if you do it right, once is enough"`,
    quote2 : `"Not how long, but how well you have lived is the main thing."`,
    quote3 : `"Don't settle for what life gives you; make life better and build something."`,
    quote4 : `"Life is like riding a bicycle. To keep your balance, you must keep moving."`,
    quote5 : `"Life is like a coin. You can spend it any way you wish, but you only spend it once."`,
    quote6 : `"Life is ten percent what happens to you and ninety percent how you respond to it."`,
    quote7 : `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
    quote8 : `"Too many of us are not living our dreams because we are living our fears."`,
    quote9 : `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
    quote10 : `"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."`
}
document.querySelector('.random-btn').addEventListener('click',()=>{
    let text = document.querySelector('.random-text')
    let randomQuote = Object.values(quotes)[randomNum()];
    if (text.textContent == randomQuote){
        text.textContent = `"Maybe you have to know the darkness before you can appreciate the light."`
        console.log('me repeti');
    } else{
        text.textContent = randomQuote;
    }
})