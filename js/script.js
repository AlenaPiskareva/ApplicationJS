'use strict';

//Task 5
//Идентификаторы
/*let userName = {
    name: "Alena",
    }
const userYear = {
    year: 1998,
    }
function messageName(){
alert (`Привет, ${userName.name}`);
}
messageName();*/

//Циклы
//Без массива
/*function range(){
   let start = 15;
   let end = 30;
    for (let array = start; array <= end; array++)
    alert (array);
}
range();*/
//С массивом через push
/*function range(start, end){
    let array = [];
    for (let i = 15; i <= 30; i++){
        array.push(i)
    }
    return(array)
}
alert(range());*/

//Без массива
/*function rangeOdd(){
    let start = 15;
    let end = 30;
    for (let array = start; array <= end; array++){
        if (array % 2 != 0 ){
            alert(array);
        }
    }
}
rangeOdd();*/
//С массивом через push
/*function rangeOdd(start, end){
    let array = [];
    for (let i = 15; i <= 30; i++){
        if (i % 2 != 0){
            array.push(i)
        }
    }
    return(array)
}
alert(rangeOdd());*/

//Функции
/*let a = prompt('Введите первое число:','' );
let b = prompt('Введите второе число', '');
function average(a, b){
    return (Number(a) + Number(b)) / 2;
}
let result = average(a, b);
alert(result);*/

/*let x = prompt('Введите основание степени:','' );
let number = 2;
function square(x){
    return(Math.pow(x,number));
}
let result = square(x);
alert(result);*/

/*let x = prompt('Введите основание степени:','' );
let number = 3;
function cube(x){
    return(Math.pow(x,number));
}
let result = cube(x);
alert(result);*/

/*function square(x){
    return(x ** 2);
}
function cube(x){
    return(x ** 3);
}
function average(a, b){
    return (a + b) / 2;
}
function calculate(){
    let arr = [];
    for (let i = 0; i <= 9; i++) {
        arr.push(average(square(i),cube(i)));
    }
    return(arr);
}
alert(calculate());*/
