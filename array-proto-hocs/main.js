'use strict';

const eq = (a, b) => {return a === b};

function compareArrays(arr1, arr2){
  if(!Array.isArray(arr1) || !Array.isArray(arr2)){
    throw new Error('Аргументы должны быть массивами!');
  } else {
    return arr1.length === arr2.length &&   // размер одинаковый
    arr1.every((item, index) => {           // и содержимое
      return eq(item, arr2[index]);
    });
  }
}

function memoize(fn, limit){
  const results = [];
  return function(){
    // входные параметры
    let arrArgs = Array.from(arguments);
    // ищем эти параметры в расчитанных ранее
    let existParam = results.find((savedParams) => {
        return savedParams.args.length === arrArgs.length && savedParams.args.every((arr, index) => {
          return compareArrays(arr, arrArgs[index]);
        });
    });
    // Если параметр ранее был расчитан и сохранен в памяти
    if(existParam !== undefined){
      console.log(`Результат из памяти: "${existParam.result}".`);
      return existParam.result;
    } else {    // иначе создаем новый расчет
      const newResult = {
        args: arrArgs,
        result: arrArgs.every(param => {
          return compareArrays(param, arrArgs[0]);
        })
      };
      // проверяем не полон ли массив результатов
      if(results.length >= limit){
        // если ДА, то удаляем один результат в начале
        results.shift();
      } 
      // и добавляем новый в конец
      results.push(newResult);
      // сообщаем о результатах
      console.log(`Результат ${newResult.result} рассчитан и сохранён в памяти.`);
      return newResult.result;
    }
  }
}

let testCompareArrays = memoize(compareArrays, 2);

// Тестовые вызовы

//compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
//compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
//compareArrays([8, 1, 2], [8, 1, 2]);


