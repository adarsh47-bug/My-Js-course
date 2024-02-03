// Remember, we're gonna use strict mode in all scripts now!!
'use strict';

// console.log('hi');
// console.log(1001);

// npm install live-server -g  >>>>>>>>>>>>command<<<<<<<<<<<<<

// 59. Using Google, StackOverflow and Mdn

// const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTemAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return (max - min);
// };
// const amplitude = calcTemAmplitude(temps);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Degrees celsius:'))
//     value: 10

//   }
//   console.log(measurement);

//   // console.log(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// }
// console.log(measureKelvin());


// // using a debugger
// const calcTemAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     // debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return (max - min);
// };
// const amplitudeBug = calcTemAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // [A identify]
// console.log(amplitudeBug);

// challenge #1

const printForecast = function (arr) {
  let printS = '...';
  for (let i = 0; i < arr.length; i++) {
    printS += ` ${arr[i]}°C in ${i + 1} days ... `;
  }
  return printS;
}
console.log('DATA-1');
console.log(printForecast([17, 21, 23]));
console.log('DATA-2');
console.log(printForecast([12, 5, -5, 0, 4]));