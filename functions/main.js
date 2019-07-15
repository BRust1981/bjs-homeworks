'use strict';

function getSolutions( a, b, c ){
  // дискриминант
  let D = Math.pow(b, 2) - 4 * a * c;

  // дискриминант выводим всегда
  let result = {D : D};
  let x1;
  let x2;

  // на меньше 0 нет нужды проверять, это результат по умолчанию.
  if(D === 0) {
    x1 = -b / (2 * a);
    result.roots = [x1];
  } else if(D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a); 
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    result.roots = [x1, x2];
  }
  
  return result;
}

function showSolutionsMessage(a, b, c){
  
  let result = getSolutions( a, b, c );

  let koeffB = (b > 0) ? '+ ' + b : b;
  let koeffC = (c > 0) ? '+ ' + c : c;

  console.log(`Вычисляем корни квадратного уравнения ${a}x² ${koeffB}x ${koeffC}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if(result.roots === undefined){
    console.log('Уравнение не имеет вещественных корней');
  } else if (result.roots.length === 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.roots.length === 2) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
  return;
}

function avgArray(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(!(Number.isNaN(arr[i]))){
      sum += arr[i];
    }
  }
  return sum / arr.length;
}

function getAverageScore( data ){
  let result = {};
  let sum = 0;
  let arrSum = 0;
  let count = 0;  

  for( let prop in data){
    arrSum = avgArray(data[prop]);

    result[prop] = arrSum;

    sum += arrSum;

    count++;

  }
  result.average = sum / count; // count вместо Object.keys(data).length

  return result;

}

function latinoDecrypt(num){
  return (num) ? 'Эмильо' : 'Родриго';
}

function getPersonData( secretData ){
  return {firstname: latinoDecrypt(secretData.aaa),
          lastname: latinoDecrypt(secretData.bbb)
         };
}