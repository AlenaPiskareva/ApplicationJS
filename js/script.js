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
let n = prompt('Введите число:', '');
let result = 1;
function factorial(n){
    return(result);
}
for (let i = 1; i <= n; ++i){
result = result * i;
}

alert(factorial(n));