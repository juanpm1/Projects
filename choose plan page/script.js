"use strict";

let selectBtn = document.querySelectorAll('.select-btn');
let flexContainer = document.querySelector('.flex-container');
let p = document.createElement('p');
let btn = document.createElement('button');


selectBtn.forEach(selectBtn => selectBtn.addEventListener("click", () => {
    flexContainer.innerHTML = "";
    p.innerText = `Thanks for choosing a plan.`;
    p.classList.add ('thanks-text');
    flexContainer.appendChild(p);
    btn.innerText = `Return`;
    btn.classList.add ('return-btn');
    flexContainer.appendChild(btn);
}));

btn.addEventListener('click',()=>{
    location.reload();
})
