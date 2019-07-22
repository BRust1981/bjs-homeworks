'use strict';

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let birthdayDate = + new Date(birthday);
    let now = Date.now();
    let diff = now - birthdayDate;
    let age = diff / (24 * 3600 * 365.25 * 1000);
    
    return age > 18;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound;

    if(animal === undefined){
        return null;
    } else {
        sound = animal.sound;
    }
    
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = 0;
    let cnt = 0;

    for(let i = 0; i < marks.length; i++){
        average += Number(marks[i]);
        cnt++;
    }
    let roundedAverage= Math.round(average / cnt);

    return roundedAverage;
}