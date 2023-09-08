"use strict";

/* Side bar*/
const main = document.querySelector('.main');
const arrowBtn = document.querySelector('.side-bar-arrow-btn');
const wrapper = document.querySelector('.wrapper');
const sideBar = document.querySelector('.side-bar');
const sideBarHeader = document.querySelector('.side-bar-header');
const sideBarDescription = document.querySelector('.side-bar-description');
const sideBarBtn = document.querySelector('.btn-description');
const arrowLeftCode = `<i class='bx bxs-left-arrow arrow'></i>`
const arrowRightCode = `<i class='bx bxs-right-arrow arrow' ></i>`

let sideBarOpen = true;
arrowBtn.addEventListener('click',()=>{
    if(sideBarOpen){
        wrapper.style.gridTemplateColumns = '50px 5fr';
        sideBar.style.width = '50px'
        sideBar.style.height = '50px'
        arrowBtn.innerHTML = arrowRightCode;
        sideBarHeader.style.display = 'none';
        sideBarDescription.style.display = 'none';
        sideBarBtn.style.display = 'none';
        sideBarOpen = false;
    }else{
        wrapper.style.gridTemplateColumns = '1fr 5fr';
        sideBar.style.width = ''
        sideBar.style.height = ''
        arrowBtn.innerHTML = arrowLeftCode
        sideBarHeader.style.display = 'block';
        sideBarDescription.style.display = 'block';
        sideBarBtn.style.display = 'flex';
        sideBarOpen = true;
    }
})

/* Add images*/
const addImg = document.getElementById('input-img');
const div = document.createElement('div');
const img = document.createElement('img');

addImg.addEventListener('change',()=>{
    readImg(addImg.files);
})

const readImg = file =>{
    for (let i = 0; i < file.length; i++) {
        const reader = new FileReader;
        reader.readAsDataURL(file[i]);
        reader.addEventListener('load',(e)=>{
            main.innerHTML += `
            <div class='img-container'>
                <img class="img" src='${e.currentTarget.result}'>
            </div>
            `
    })
    }  
}