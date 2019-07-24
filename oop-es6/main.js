'use strict';

// Задание 1
class Weapon {
  constructor(weaponParam){
    if(weaponParam !== undefined){
      this.name = weaponParam.name;
      this.attack = weaponParam.attack;
      this.durability = weaponParam.durability;
      this.durabilityMax = weaponParam.durability;
      this.range = weaponParam.range;
    }
  }
  takeDamage(damage) {
    return this.durability = this.durability - damage < 0 ? 0 : this.durability - damage;
  }
  getDamage(){
    if(this.durability === 0){
      return 0;
    } else if(this.durability < this.durabilityMax * 0.3){
      return this.attack / 2;
    } else {
      return this.attack;
    }
  }
  isBroken(){
    return this.durability === 0 ? true : false;
  }
}

class RareWeapon extends Weapon{
  constructor(inheritWeapon, newWeaponParam){
    super(newWeaponParam);
    this.name = this.name === '-' ? inheritWeapon.name : this.name;
    this.attack = this.attack === '-' ? inheritWeapon.attack : this.attack;
    this.durability = this.durability === '-' ? inheritWeapon.durability : this.durability;
    this.durabilityMax = this.durability;
    this.range = this.range === '-' ? inheritWeapon.range : this.range;
  }
};

// Примеры
// Задание 1.1
console.log('Задание 1.1\n');

const sword1 = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});

sword1.takeDamage(5);
console.log(sword1.durability); // 5

sword1.takeDamage(50);
console.log(sword1.durability); // 0

// Задание 1.2
console.log('Задание 1.2\n');

const arm1 = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});

arm1.takeDamage(20);
console.log(arm1.durability); // Infinity

const bow1 = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow1.takeDamage(20);
console.log(bow1.durability); // 180

bow1.takeDamage(200);
console.log(bow1.durability); // 0

// Задание 1.3
console.log('Задание 1.3\n');

console.log(bow1.durability); // 0
console.log(bow1.getDamage()); // 0

console.log(arm1.durability); // Infinity
console.log(arm1.getDamage()); // 1


// Задание 1.4
console.log('Задание 1.4\n');

console.log(bow1.durability); // 0
console.log(bow1.isBroken()); // true

console.log(arm1.durability); // Infinity
console.log(arm1.isBroken()); // false


// Задание 1.6
console.log('Задание 1.6\n');

const arm = new Weapon({ 
  name: 'Рука',
  attack: 1, 
  durability: Infinity, 
  range: 1
});
const bow = new Weapon({
  name: 'Лук', 
  attack: 10, 
  durability: 200, 
  range: 3
});
const sword = new Weapon({
  name: 'Меч', 
  attack: 25, 
  durability: 500, 
  range: 1
});
const knife = new Weapon({
  name: 'Нож', 
  attack: 5, 
  durability: 300, 
  range: 1
});
const staff = new Weapon({
  name: 'Посох', 
  attack: 8, 
  durability: 300, 
  range: 2
});

console.log(arm);
console.log(bow);
console.log(sword);
console.log(knife);
console.log(staff);

console.log('\n');

const rareBow = new RareWeapon(bow, {
  name: 'Длинный лук', 
  attack: 15, 
  durability: '-', 
  range: 4
});
const rareAxe = new RareWeapon(sword, {
  name: 'Секира', 
  attack: 27, 
  durability: 800, 
  range: '-'
});
const rareStaff = new RareWeapon(staff, {
  name: 'Посох Бури', 
  attack: 10, 
  durability: '-', 
  range: 3
});

console.log(rareBow);
console.log(rareAxe);
console.log(rareStaff);

// Задание 2
class Arm extends Weapon{ 
  constructor() {
    super();
    this.name = 'Рука';
    this.attack = 1; 
    this.durability = Infinity; 
    this.durabilityMax = Infinity;
    this.range = 1;
  }
};

class Bow extends Weapon {
  constructor() {
    super();
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.durabilityMax = 200;
    this.range = 3;
  }
}

class Sword extends Weapon {
  constructor() {
    super();
    this.name = 'Меч'; 
    this.attack = 25; 
    this.durability = 500; 
    this.durabilityMax = 500;
    this.range = 1;
  }
};

class Knife extends Weapon {
  constructor() {
    super();
    this.name = 'Нож'; 
    this.attack = 5; 
    this.durability = 300; 
    this.durabilityMax = 300;
    this.range = 1;
  }
};

class Staff extends Weapon {
  constructor() {
    super();
    this.name = 'Посох'; 
    this.attack = 8; 
    this.durability = 300; 
    this.durabilityMax = 300;
    this.range = 2;
    }
};

class RareBow extends Bow{
  constructor(){
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class RareAxe extends Sword{
  constructor(){
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class RareStaff extends Staff{
  constructor(){
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

// Примеры
// Задание 2

console.log('\nЗадание 2\n');

const bow2 = new Bow();

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3

const rareBow2 = new RareBow();
const rareAxe2 = new RareAxe();
const rareStaff2 = new RareStaff();
console.log(rareBow2);
console.log(rareAxe2);
console.log(rareStaff2);
console.log(rareAxe2.getDamage());

// Задание 3

class StudentLog {
  constructor(name) {
    this.name = name;
    this.grades = {};
  }
  getName(){
    return this.name;
  }

  addGrade(grade, subject){
    if(isNaN(grade) || grade < 1 || grade > 5){
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
    } else if(grade - Math.trunc(grade) !== 0){
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только ЦЕЛЫЕ числа от 1 до 5.`);
    } else {
        if(this.grades[subject] !== undefined){
          this.grades[subject].push(grade);
        } else {
          this.grades[subject] = [grade];
        }
    }

    return this.grades[subject] === undefined ? 0: this.grades[subject].length;
  }

  getAverageBySubject(subject){
    if(this.grades[subject] === undefined){
      return 0;
    } else {
      let sum = 0;
      for(let i = 0; i < this.grades[subject].length; i++){
        sum += this.grades[subject][i];
      }
      return sum / this.grades[subject].length;
    }

  }

  getTotalAverage(){
    if(this.grades!== {} && this.grades !== undefined){
      let sum = 0;
      let cnt = 0;
      for(let key in this.grades){
        for(let i = 0; i < this.grades[key].length; i++){
          sum += this.grades[key][i];
        }
        cnt += this.grades[key].length;
      }
      return sum / cnt;
    } else {
      return 0;
    }
  }
  
}

// Примеры задания 3
// Задание 3.1
const log = new StudentLog('Олег Никифоров');
// Задание 3.2
console.log(log.getName()) // Олег Никифоров
// задание 3.3
console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 1

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1

console.log(log.addGrade(2.5, 'geometry'));


// Задание 3.3
// обнулим оценки
log.grades = {};

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

// Задание 3.4
console.log(log.getTotalAverage()); // 3,75