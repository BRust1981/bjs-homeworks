'use strict';

const eq = (a, b) => {return a === b};

// Может я неправильно понял, но тут сравнивается неограниченное количество массивов
function compareArrays(){
  const args = Array.from(arguments);
  if(Array.from(args).some(param => !Array.isArray(param))){
    throw new Error('Аргументы должны быть массивами!');
  } else {
    if(args.some(param => param.length !== args[1].length)){
      return false;
    } else {
      return args.every(param => {
        return param.every((item, index) => {
          return eq(item, args[0][index]);
        })
      });
    }
    return true;
  }
}

function memoize(fn, limit){
  const results = [];
  return function(){
    let arrArgs = Array.from(arguments);
    let existParam = results.find((savedParams) => {
        return savedParams.args.every((arr, index) => {
          return compareArrays(arr, arrArgs[index]);
        });
    });
    if(existParam !== undefined){
      console.log(`Результат из памяти: "${existParam.result}".`);
      return existParam.result;
    } else {
      const newResult = {
        args: arrArgs,
        result: compareArrays(...arguments)
      };

      if(results.length >= limit){
        results.shift();
      } 
      results.push(newResult);
      console.log(`Результат ${newResult.result} расчитан и сохранен в памяти.`);
      return newResult.result;
    }
  }
}

let testCompareArrays = memoize(compareArrays, 2);

// Тестовые вызовы

//compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
//compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
//compareArrays([8, 1, 2], [8, 1, 2]);


