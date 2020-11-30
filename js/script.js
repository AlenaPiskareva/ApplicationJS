'use strict'

//Task 6.
//Задача 1.
/*let result = prompt('Введите число:', '');
function factorial(n){
    return(result);
}
    for (let i = 1; i < result; i++){
    result = Number(result) * i;
    }
    
alert(factorial(n));*/
/*let n = prompt('Введите число:', '');
let result = 1;
function factorial(n){
    return(result);
}
for (let i = 1; i <= n; ++i){
result = result * i;
}
alert(factorial(n));*/

//Задача 2.

/*let n = prompt('Введите количество первых натуральных чисел:', '');
let squareSum = 0;
let sumSquare = 0;
function sumSquareDifference(n){
let arr = [];
for (let i = 1; i <= n; i++){
    arr.push(sumSquare = sumSquare + i ** 2);
}
for (let i = 1; i <= n; i++){
    arr.push(squareSum = squareSum + i);
}
return(squareSum ** 2 - sumSquare);
}
alert(sumSquareDifference(n));*/

//Задача 3.
/*const firsrUser = {
    name: "Tom"
};
let secondUser = {
    name: "Robert"
};
console.log(firsrUser,secondUser, '\n');
firsrUser.name = 'Michel';
secondUser.name = 'Garry';
console.log(firsrUser,secondUser, '\n');*/

function creatUser(name, city) {
    return {name: 'Marcus',city: 'Moscow'};
}
