'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let errorParam = {};

    if(isNaN(Number(percent))){
        errorParam.param = 'percent';
        errorParam.value = percent;
    } else if(isNaN(Number(contribution))){
        errorParam.param = 'contribution';
        errorParam.value = contribution;
    } else if(isNaN(Number(amount))){
        errorParam.param = 'amount';
        errorParam.value = amount;
    } 
    
    if(errorParam.param !== undefined){
        console.log(`Параметр ${errorParam.param} содержит неправильное значение ${errorParam.value}`);
        return;
    }

    let overPayment = amount - contribution;
    let percentPerMonth = percent / 100 / 12;
    let curDate = new Date();
    let creditDate = new Date(date);
    let months = (creditDate.getFullYear() - curDate.getFullYear()) * 12 - curDate.getMonth() + creditDate.getMonth();
    let totalAmount = overPayment*(percentPerMonth+percentPerMonth/((Math.pow(1 + percentPerMonth , months))-1));

    console.log(percentPerMonth,  months);

    return (totalAmount * months).toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name = 'Аноним') {
    let validName;
    
    if(name === '' || name == null){
        validName = 'Аноним';
    } else{
        validName = name;
    }

    let greeting = `Привет, мир! Меня зовут ${validName}`;
    return greeting;
}