// const painters = [
//   {
//     firstName: "Herb",
//     lastName: "Aach",
//     born: 1923,
//     passed: 1985,
//     paintings: 12
//   },
//   {
//     firstName: "Pacita",
//     lastName: "Abad",
//     born: 1946,
//     passed: 2004,
//     paintings: 52
//   },
//   {
//     firstName: "Daniel",
//     lastName: "Maclise",
//     born: 1806,
//     passed: 1870,
//     paintings: 2
//   },
//   {
//     firstName: "Aileen",
//     lastName: "Eagleton",
//     born: 1902,
//     passed: 1984,
//     paintings: 35
//   },
//   {
//     firstName: "Thomas",
//     lastName: "Eakins",
//     born: 1844,
//     passed: 1916,
//     paintings: 1
//   },
//   {
//     firstName: "Edgar",
//     lastName: "Degas ",
//     born: 1834,
//     passed: 1917,
//     paintings: 34
//   },
//   {
//     firstName: "Martin",
//     lastName: "Desjardins",
//     born: 1637,
//     passed: 1694,
//     paintings: 7
//   }
// ];

// const clients = [
//   "Fiona, Bownd",
//   "Bren, Strutt",
//   "Cletis, Cobelli",
//   "Booth, Kedge",
//   "Demetris, Parman",
//   "Cull, Itzhaki",
//   "Ertha, Bikker",
//   "Maggi, Stockport",
//   "Horace, Hearthfield",
//   "Vassili, Pomfret",
//   "Cirilo, Zottoli",
//   "Trueman, MacDermot",
//   "Karla, Spencer",
//   "Allys, McManamon",
//   "Saloma, Boolsen",
//   "Giacomo, Vedntyev",
//   "Essa, Blacket",
//   "Dari, Muncer",
//   "Jobi, Joscelyn",
//   "Eimile, Joberne"
// ];

// const cars = [
//   "Honda",
//   "Saab",
//   "Ford",
//   "Mitsubishi",
//   "Buick",
//   "Toyota",
//   "Mitsubishi",
//   "Mercedes-Ben",
//   "Buick",
//   "Volvo",
//   "Oldsmobile",
//   "Mercedes-Ben",
//   "Chevrolet",
//   "Volkswagen",
//   "GMC",
//   "Chevrolet",
//   "Jeep",
//   "Acura",
//   "Acura",
//   "Suzuki"
// ];

// // 1. Array Length
// console.log("Clients length is " + clients.length);
// // 2. Array Iteration with FOR & foreach
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }
// painters.forEach(painter => {
//   console.table(painter);
// });
// // 3. String to array .split
// const myFavFood = "pear, meat, chocolate";
// console.log(myFavFood.split(", "));
// console.log(cars.join(", "));
// // 4. Array .filter()

// const paintersFiltered = painters.filter(painter => {
//   return painter.born >= 1800 && painter.born < 1900;
// });
// console.table(paintersFiltered);

// // 5. Array .map()

// const paintersWithYears = painters.map(painter => {
//   const newPainter = {
//     name: `${painter.firstName}   ${painter.lastName}`,
//     years: `${painter.born} - ${painter.passed}`
//   };
//   return newPainter;
// });
// console.table(paintersWithYears);

// // 6. Array .sort()
// // Sort painters by years lived
// const sortedPaintersByYears = painters
//   .map(painter => {
//     const paintersWithAge = {
//       name: `${painter.firstName}   ${painter.lastName}`,
//       years: `${painter.born} - ${painter.passed}`,
//       age: painter.passed - painter.born
//     };
//     return paintersWithAge;
//   })
//   .sort((currentPainter, nextPainter) => {
//     return currentPainter > nextPainter ? -1 : 1;
//   });
// console.table(sortedPaintersByYears);

// // Sort client by lastName
// const sortedClients = clients.sort((currentClient, nextClient) => {
//   const [currentClientFirstName, currentClientLastName] = currentClient.split(
//     ", "
//   );
//   const [nextClientFirstName, nextClientLastName] = nextClient.split(", ");
//   return currentClientLastName > nextClientLastName ? 1 : -1;
// }, {});
// console.table(sortedClients);
// // 7. Array .reduce()
// // Total amound of paintings
// const totalPaintings = painters.reduce((amount, painter) => {
//   return amount + painter.paintings;
// }, 0);
// console.log(`total paintings = ${totalPaintings}`);

// // Sum app cars
// const carsReduced = cars.reduce((obj, car) => {
//   if (!obj[car]) {
//     obj[car] = 0;
//   }
//   obj[car]++;
//   return obj;
// }, {});
// console.log(carsReduced);

// 1) Проверьте переменную age и если возраст больше или равен 18 и меньше или равен 21, выведите в консоль соответсвующее сообщение
let age = 17;

age >= 18 && age <= 21
  ? console.log("Age is between 18 and 21")
  : console.log("Age is out of 18 and 21");

const users = [
  {
    name: "Roman",
    age: 28,
    visitedPark: true,
    boughtItems: false
  },
  {
    name: "Maya",
    age: 14,
    visitedPark: false,
    boughtItems: true
  },
  {
    name: "Alex",
    age: 45,
    visitedPark: false,
    boughtItems: false
  },
  {
    name: "Tonia",
    age: 32,
    visitedPark: true,
    boughtItems: true
  }
];

// 2) Для каждого элемента массива users выведите сообщение в консоль, только если пользователь посетил парк или совершил покупку
// Используйте foreach или for, а потом if внутри петли

users.forEach(user => {
  if (user.visitedPark == true && user.boughtItems == true) {
    console.log(user);
  }
});

let iterationCounter = "Each iteration adds a *: ";

for (let i = 0; i < 10; i++) {
  iterationCounter += " *";
  console.log(iterationCounter);
  // 3) Используя assigment operator(+=) поменяйте значение переменоой iterationCounter, добавляя по одной звездочке при каждой итерации
}
// 4) Выведите в консоль значение iterationCounter. Ожидаемый результат "Each iteration adds a *: * * * * * * * * * *"
