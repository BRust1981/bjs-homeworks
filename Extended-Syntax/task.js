'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a, b, c){
    let d = Math.pow(b, 2) - 4 * a * c;
    
    let x = [];

    if(d === 0) {
      x.push(-b / (2 * a));
    } else if(d > 0) {
      x.push((-b + Math.sqrt(d))/ (2 * a)); 
      x.push((-b - Math.sqrt(d)) / (2 * a));
    }
    
    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday){
    let curYear = new Date();
    let age = curYear.getFullYear() - dateOfBirthday.getFullYear();
    let result;

    if(age >= 18) {
      result = `Не желаете ли олд-фэшн, ${name}?`;
    } else{
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    console.log(result);

    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if(marks.length > 5){
      console.log('Превышено количество оценок!');
    }
    let tail = marks.slice(0, 5);
    let sum = 0;
    let count = 0;
    
    for(let i = 0; i < tail.length; i++) {
      if(!(Number.isNaN(tail[i]))) {    // (оценка, если ее не поставили, не будет считаться)
        count++;
        sum+=tail[i];
      }
    }

    let averageMark = sum / count;
    
    return averageMark;
}
