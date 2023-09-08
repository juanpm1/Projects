let addTaskBtn = document.querySelector('.input-text__add-task-btn');
let insertText = document.querySelector('.input-text__textarea');
let inputText = document.querySelector('.input-text');
let taskContainer = document.querySelector('.task-container');
let checkBox = document.querySelector('.check-container');
let managmentContainer = document.querySelector('.managment-container');

addTaskBtn.addEventListener('click', ()=>{
    if(insertText.value === ""){
        insertText.style.border = "2px solid rgba(255, 176, 176)"
        setTimeout(()=>{
            insertText.style.border = "none"
        },1500);   
    } 
    else{
        let createdDivPoint = taskContainer.appendChild(document.createElement('div'));
        createdDivPoint.classList.add('point-container');
        createdDivPoint.innerHTML = '<svg class="point-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: rotate(90deg);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>';
        let createdDivText = taskContainer.appendChild(document.createElement('div'));
        createdDivText.classList.add('text-container');
        let createdP = createdDivText.appendChild(document.createElement('p'));
        createdP.innerText = insertText.value;
        createdP.classList.add(`task-added`);

        let createdDivBtn = taskContainer.appendChild(document.createElement('div'));
        createdDivBtn.classList.add('btn-container');
        let editBtn =  createdDivBtn.appendChild(document.createElement('button'));
        editBtn.classList.add(`btn-added`);
        editBtn.innerHTML = `<img class="btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA00lEQVRIS8WUgQ2CMBBFYQNHcAQYwY10AkeQEdzEFdxAR3ADvZ/QpMhv6e9BaHIpIeW9u/ZK22w82o35jVdwHhMcUol6BIDfRvDFZiqpFRwM+LLAHAaV1AgA/Vh0Fo9IggogmQxVgG25WpwsnpHkzuAwKYJ4z1FBkBzt+e095BgeWJD0OXhpBQyOb+meq2fggi9V4IbnBKvAU4LV4CnBl7Rc0YGyVmX34F9QDS+pwAVf6qLU5ZTeK78KCRwW7yJgXaRkP0m6pIsU+Oxcd9kiNePs+h/5ByUZvt/I/AAAAABJRU5ErkJggg=="/>`;
        let deleteBtn =  createdDivBtn.appendChild(document.createElement('button'));
        deleteBtn.classList.add(`btn-added`);
        deleteBtn.innerHTML = `<img class="btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAQ0lEQVRIS2NkoDFgpLH5DKMWEAzh0SAaDSKCIUBQAa5U9J+gTuwKMMwbMAvI9ACmttGMRjAoR4NoNIgIhgBBBTRPRQDD2wIZyGngoQAAAABJRU5ErkJggg=="/>`;
        let checkBtn =  createdDivBtn.appendChild(document.createElement('button'));
        checkBtn.classList.add(`btn-added`);
        checkBtn.innerHTML =`<img class= "btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA8klEQVRIS+2T4Q2CMBSEYQNHYARHwA10A51AnUQ3kBHcQEdwBDfQEbxPKHkphZYf/DDS5JLSe71rr488m3jkE+tns0E04f+MaKFcSuEayKfDjY0IgYuwFnZCZUyC3FiDkwQPwltYCQ9jEOTGGCCMCOKc3kbUy6UaOAEOvOkRD3GdPxmhu3f1pb5vAhkfhbOJZYj7ltkbbJsHZN0JWQGEWXdjiGuL/IjcQ1GAIN1SCFUjTv6lsBcw8DnjX09Db2BvQg2dQscgzngJxBXikgwo4nT0O8OKx7hkA1dYaPLs7KoXhrh2S2qb9njEl2eDaEa/H9EHbQw1GQHf0SkAAAAASUVORK5CYII="/>`;
        
        editBtn.addEventListener('click',()=>{
            let editAlert = document.body.appendChild(document.createElement('div'));
            editAlert.classList.add('edit-alert');
            let editAlertPar = editAlert.appendChild(document.createElement('p'));
            let editAlertTextarea = editAlert.appendChild(document.createElement('textarea'));
            editAlertTextarea.maxLength = 140;
            editAlertTextarea.classList.add('edit-textarea');
            editAlertTextarea.value = createdP.innerText;
            let editBtnConfirm = editAlert.appendChild(document.createElement('button'));
            editBtnConfirm.innerHTML = 'Confirm';
            editBtnConfirm.classList.add('delete-btn-confirm');
            let editBtnCancel = editAlert.appendChild(document.createElement('button'));
            editBtnCancel.innerHTML = 'Cancel';
            editBtnCancel.classList.add('delete-btn-cancel');
            editAlertPar.innerText = 'Edit Task';
            taskContainer.style.filter = 'blur(1.5px)';
            inputText.style.filter = 'blur(1.5px)';
            managmentContainer.style.pointerEvents = 'none'

            editBtnConfirm.addEventListener('click',()=>{
                createdP.innerHTML = editAlertTextarea.value;
                taskContainer.style.filter = 'blur(0)';
                inputText.style.filter = 'blur(0)';
                managmentContainer.style.pointerEvents = 'all'
                editAlert.remove(); 
            })
            editBtnCancel.addEventListener('click',()=>{
                taskContainer.style.filter = 'blur(0)';
                inputText.style.filter = 'blur(0)';
                managmentContainer.style.pointerEvents = 'all'
                editAlert.remove();
            })
        })
            

        deleteBtn.addEventListener('click',()=>{
            let deleteAlert = document.body.appendChild(document.createElement('div'));
            deleteAlert.classList.add('delete-alert');
            let deleteAlertPar = deleteAlert.appendChild(document.createElement('p'));
            let deleteBtnConfirm = deleteAlert.appendChild(document.createElement('button'));
            deleteBtnConfirm.innerHTML = 'Confirm';
            deleteBtnConfirm.classList.add('delete-btn-confirm');
            let deleteBtnCancel = deleteAlert.appendChild(document.createElement('button'));
            deleteBtnCancel.innerHTML = 'Cancel';
            deleteBtnCancel.classList.add('delete-btn-cancel');
            deleteAlertPar.innerText = 'Are you sure you want to delete this task?';
            taskContainer.style.filter = 'blur(1.5px)';
            inputText.style.filter = 'blur(1.5px)';
            managmentContainer.style.pointerEvents = 'none'

            deleteBtnConfirm.addEventListener('click',()=>{
                createdDivPoint.remove();
                createdDivText.remove();
                createdDivBtn.remove();
                taskContainer.style.filter = 'blur(0)';
                inputText.style.filter = 'blur(0)';
                managmentContainer.style.pointerEvents = 'all'
                deleteAlert.remove();
            })
            deleteBtnCancel.addEventListener('click',()=>{
                taskContainer.style.filter = 'blur(0)';
                inputText.style.filter = 'blur(0)';
                managmentContainer.style.pointerEvents = 'all'
                deleteAlert.remove();
            })
        })

        checkBtn.addEventListener('click',()=>{
            createdDivPoint.innerHTML = '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>'
            let undoBtn =  createdDivBtn.appendChild(document.createElement('button'));
            undoBtn.innerHTML = '<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4v-3z"></path></svg>'
            undoBtn.classList.add(`btn-added`);
            createdDivBtn.replaceChild(undoBtn,checkBtn);

            undoBtn.addEventListener('click', ()=>{
                createdDivBtn.replaceChild(checkBtn,undoBtn);
                createdDivPoint.innerHTML = '<svg class="point-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: rotate(90deg);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>';
            })

        })
    }
    insertText.value = null;
})

