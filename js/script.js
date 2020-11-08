//document.querySelector('.page').classList.remove('second-page');
let page = document.querySelector('.page');
page.classList.remove('second-page');
let lightButton = document.querySelector('.light-button');
lightButton.onclick = function(){
    console.log('Кнопка нажата!');
}
let message = document.querySelector('.email-subtitle');
console.log(message.textContent);