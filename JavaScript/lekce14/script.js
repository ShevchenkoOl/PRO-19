// class Car {
//     constructor(brand, color, year) {
//         this.brand = brand;
//         this.color = color;
//         this.year = year;
//     }
// };

// const car1 = new Car("AUDI", "red", 1999);

// console.log(car1.brand);
// document.body.innerHTML = car1.color;

// const car2 = new Car("BMW", "blue", 2006, 4500);
// console.log(car2);


// class Car {
//     constructor(brand, color="red", year, ...otherParamas) {
//         this.brand = brand;
//         this.color = color;
//         this.year = year;
//         this.extra = otherParamas;
//     }
// };

// const car2 = new Car("BMW", "blue", 2006, 4500, "disel", "sunRoof");
// console.log(car2);

// car2.brand  = "lada";
// console.log(car2);

// class Car {
//     constructor(brand, color="red", year, ...otherParamas) {
//         this.brand = brand;
//         this.color = color;
//         this.year = year;
//         this.extra = otherParamas;
//     };

//     getInfo(){
//          return `Это ${this.brand}, цвет: ${this.color}, год выпуска: ${this.year}.`;
//     };

//     getAge(){
//         const age = new Date().getFullYear() - this.year;
//         return age;
//     }

// };

// const car2 = new Car("BMW", "blue", 2006);
// document.body.innerHTML = car2.getInfo();

// const car3 = new Car("Skoda", "white", 2020);
// document.body.innerHTML += car3.getInfo();

// document.body.innerHTML = `<h1>Автомобиль марки ${car3.brand} его возраст ${car3.getAge()}</h1>`;



// class Car {
//     constructor(brand, color, price) {
//         this.brand = brand;
//         this.color = color;
//         this.price = price;
//     };

//     getInfo(){
//          return `Это ${this.brand}, цвет: ${this.color}, цена: ${this.price}.`;
//     };

//  static compare(carA, carB) {
//     return carA.price - carB.price;
//   }
// }

// class ElectroCar extends Car {
//     constructor(brand, color, price, battery){
//         super(brand, color, price);
//         this.battery = battery;
//     }
// }


// const car2 = new Car("BMW", "blue", 1500);
// const car3 = new Car("Skoda", "white", 2450);

// console.log(Car.compare(car2, car3))

// const tesla = new ElectroCar("Tesla", "white", 25000, "1500kW");

// console.log(tesla);

// console.log(tesla instanceof ElectroCar); // true
// console.log(tesla instanceof Car); // True


// class Bank{
//     construrtor(owner, balance){
//         this.owner = owner;
//         this._balance = balance;
//     };

//     get balance(){
//         return this._balance
//     };

//     set balance(value){
//         if(value < 0){
//             console.log("Balance не можкт быть отрицательным");
//             return;
//         }
//         this._balance;
//     }
// }


// const anna = new Bank("Anna", 1500);
// console.log(anna.balance);

// anna.balance = -521;
// console.log(anna.balance);


// Аналогия из жизни. Представь, есть отдельные машины: BMW, Audi, Tesla
// Есть автосалон, который:
// - сравнивает машины
// - сортирует их по цене
// - считает статистику
// 👉 Сравнение машин — это не задача одной машины
// 👉 Это задача системы / каталога

// // 🔹 1. Сравнение
//  static compare(carA, carB) {
//     return carA.price - carB.price;
//   }

//   Car.compare(car1, car2);
//   car1.compare(car1, car2); // ❌ Ошибка - Потому что у объекта нет метода compare



// // 🔹 2. Валидация
//   static isValidYear(year) {
//     return year > 1990;
//   }


//   // 🔹 3. Информация о классе
//   static info() {
//     console.log(this);
//   }

//   Вызываем методы:
// const car1 = new Car("BMW", 30000, 2018);
// const car2 = new Car("Audi", 25000, 2015);
// const car3 = new Car("Mercedes", 40000, 2020);

// const cars = [car1, car2, car3];

// // сортировка массива по цене
// cars.sort(Car.compare);
// console.log(cars);

// // валидация на год выпуска
// cars.forEach(car => {
//   const isValid = Car.isValidYear(car.year);
//   console.log(car.brand, isValid);
// });


// // информация о классе:
// Car.info();  -  class Car {
//                 constructor(brand, price, year) {
//                     this.brand = brand;
//                     this.price = price;
//                     this.year = year;
//                 }

//                 drive() {
//                     console.log(`${this.brand} is driving`);
//                 }}



// Наследование (extends)
// Наследование — это когда один класс наследует свойства и методы другого, но может:
//     - добавлять свои
//     - переопределять существующие




// Getter / Setter — это способ:
//         - контролировать доступ к данным
//         - валидировать значения
//         - скрывать внутреннюю реализацию

// 📌 Снаружи выглядит как свойство,
// 📌 Внутри — функция.

// class Car {
//   constructor(brand, price, year) {
//     this.brand = brand;
//     this._price = price; // соглашение: _ = внутреннее поле
//     this.year = year;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(value) {
//     if (value <= 0) {
//       console.error("Цена должна быть положительной");
//       return;
//     }
//     this._price = value;
//   }

//   drive() {
//     console.log(`${this.brand} едет`);
//   }
// }


// const car = new Car("BMW", 30000, 2018);

// console.log(car.price); // 👉 getter

// // если заберём проверку на отрицание и цену сделаем достыпной
// car.price = 0;
// console.log(car);

// // вернём всё назад
// car.price = 35000;      // 👉 setter
// console.log(car.price);

// car.price = -5000;      // ❌ ошибка?


// let arr1 = [1, 1, 2, 4, 6, 3]; // 3
// arr1 = [-1, -2, 2] // 1

// function result(arr1){
// const num = 1;
// for(let i = 1; i < arr1.length; i++){
//    if(i > num){
//     i--
//     return i
//    } else {
//     return num
//    }
// }
// }

// console.log(arr1.includes(3));

// function result(arr1){
//     let num = 1;
//     while(arr1.includes(num)){
//         num ++
//     }
//      return num;
// }

// console.log(result(arr1));

let arr1 = [1,2,3,5, 4, 8, 9]; //6
let arr2 = [-2,0,1,3] //2

function result(arr){
    if(arr[arr.length-1] <= 1)return 1;

    return result(arr)
}

console.log(result(arr1));