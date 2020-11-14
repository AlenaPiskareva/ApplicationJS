//document.querySelector('.page').classList.remove('second-page');
//объвление переменной
//let page = document.querySelector('.page');
//page.classList.remove('second-page');

//обработчик событий
//let lightButton = document.querySelector('.light-button');
//lightButton.onclick = function(){
    //console.log('Кнопка нажата!');
//}
//Вывод в консоль текстового содержимого для .email-subtitle
//let message = document.querySelector('.email-subtitle');
//console.log(message.textContent);

//Task3
//С помощью свойства value получаем данные из поля ввода
//let input = document.querySelector('input');
//console.log(input.value);

//Вывод данных поля на страницу
let paragraph = document.querySelector('.name-subtitle');
let email = document.querySelector('.subscription-email');
paragraph.textContent = email.value;