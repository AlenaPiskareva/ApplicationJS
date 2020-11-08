//document.querySelector('.page').classList.remove('second-page');
//объвление переменной
let page = document.querySelector('.page');
page.classList.remove('second-page');

//обработчик событий
let lightButton = document.querySelector('.light-button');
lightButton.onclick = function(){
    console.log('Кнопка нажата!');
}
//Вывод в консоль текстового содержимого для .email-subtitle
let message = document.querySelector('.email-subtitle');
console.log(message.textContent);