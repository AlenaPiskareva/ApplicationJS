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
//let paragraph = document.querySelector('.name-subtitle');
//let email = document.querySelector('.subscription-email');
//paragraph.textContent = email.value;

//Задачка по приоритетам
//alert(55*(7 + 2)/(4 + 2));

//Счетчик

/*let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
    likesNumber.textContent = counter++;
  	heart.classList.toggle('added');
};*/

//Task 4.
//Задача 1.
/*let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
let message = (year < 2015) ? 'Это слишком рано...' :
    (year > 2015) ? 'Это поздновато':
    (year = 2015) ? 'Верно!':
'';
alert(message);*/
//Задача 2.
let age = prompt('Возраст?', '');
if (age < 3) {
    alert('Здравствуй, малыш!');
    }
else if (age < 18) {
    alert('Привет!');
    }
else if (age < 100) {
    alert('Здравствуйте!');
    }