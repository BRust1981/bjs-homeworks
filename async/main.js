'use strict';

function setAlarm(time, callback){
  const itsTime = time;
  return function(curTime) {
    if(curTime === itsTime){
      callback();
    }
  }
}


function setDailyRhythm(wakeUpTime, bedTime){
  //может стоило еще параметр с именем пользователя, а пока здесь был.., то есть будет - Вася
  const goodMorning = () => alert('Доброе утро, Вася!');
  const goodNight = () => alert('Спокойной ночи, Вася!');

  const wakeUpAlarm = setAlarm(wakeUpTime, goodMorning);
  const goSleepAlarm = setAlarm(bedTime, goodNight);

  setInterval(() => {
    const curTime = new Date;
    wakeUpAlarm(curTime.getHours().toString().padStart(2, '0') + ':' + curTime.getMinutes().toString().padStart(2, '0'));
    goSleepAlarm(curTime.getHours().toString().padStart(2, '0') + ':' + curTime.getMinutes().toString().padStart(2, '0'));
  }, 1000);
}



//const goodMorning = () => alert('Доброе утро, Вася!');
//const checkTime = setAlarm('07:00', goodMorning);
//checkTime('07:30');
//checkTime('07:00'); // Доброе утро

setDailyRhythm ('05:02', '05:03');
