'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

/*
const getCountryData = function (country) {

  const request = new XMLHttpRequest();
  request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}?fullText=true`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText)
    console.log(data);

    const html = `
          <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
              <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
              <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
          </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
}

// getCountryData('india');
// getCountryData('japan');
// getCountryData('united states of america');

// for predefined order,
// then we would basically have to chain the requests.
*/
// 


// const getCountryAndNeighbour = function (country) {

//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}?fullText=true`);
//   // request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText)
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country
//     const neighbour = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour[0]}`);
//     request2.send();

//     request2.addEventListener('load', function () {

//       const data2 = JSON.parse(this.responseText)
//       console.log(data2);

//       // Render country 2
//       renderCountry(data2, 'neighbour');
//     });
//   });
// }

// getCountryAndNeighbour('india');
// getCountryAndNeighbour('russia');

// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('2 sec passed');
//     setTimeout(() => {
//       console.log('3 sec passed');
//       setTimeout(() => {
//         console.log('4 sec passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 3000);

// */


/////////////////////////////////////////////////////////

// const request = fetch(`https://countries-api-836d.onrender.com/countries/name/india?fullText=true`);
// console.log(request);

/*
const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}?fullText=true`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    })
}*/


// simple version of code
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${errorMsg} (${response.status})`);
      }
      return response.json()
    })
}

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}?fullText=true`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json()
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'nun_latin';

//       if (!neighbour) return;

//       // country 2
//       return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json()
//     })
//     .then(data => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong__\n${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// }

const getCountryData = function (country) {
  // country 1
  getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}?fullText=true`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'nun';

      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => {
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong__\n${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })
}


btn.addEventListener('click', function () {
  getCountryData('india');
  // getCountryData('russian federation');
  // getCountryData('spain');
});

getCountryData('australia');
*/

// Coding challenge #1
/*

const renderCountryII = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}?fullText=true`)
    .then(res => {
      if (!res.ok)
        throw new Error(`Country not found (${response.status})`);
      return res.json();
    })
    .then(data => {
      renderCountry(data[0])
      console.log(data[0])
    })
}

const whereAmI = function (lat, lng) {
  // console.log(lat, lng);
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    .then(response => {
      // console.log(response);
      if (!response.ok)
        throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then(data => {
      if (!data.countryName) throw new Error(`Country not found 💥💥💥`);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      renderCountryII(data.countryName);
    })
    .catch(err => {
      renderError(err);
      console.error(err.message)
    })
}
whereAmI(52.508, 13.381)
whereAmI(19.037, 72.873)
whereAmI(33.933, 18.474)
// whereAmI(93.933, 18.474)

*/

// 259 The Event Loop in Practice
/*
console.log('Test Start');
setTimeout(() => {
  console.log('0 sec timer');
}, 0);
// in microtask queue
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 2000000000; i++) { }
  console.log(res);
})
console.log('Test end');

// 📍
// NOTE:Like callback queue, but for
// callbacks related to promises.
// Has priority over callback queue!

// We can not do high precision things on js
*/

// 260 Building a Simple Promise
/*
const lotteryPromise = new Promise(function (resolve, reject) {

  console.log('Lottery draw is happening 🔮');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIM 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise
  .then(res => console.log(res))
  .catch(err => console.error(err.message));


// Promisify_ing Asynchronous function setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  })
}

wait(1)
  .then(() => {
    console.log("I waited for 1 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited for 3 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited for 4 seconds"))


// callback hell
// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('2 sec passed');
//     setTimeout(() => {
//       console.log('3 sec passed');
//       setTimeout(() => {
//         console.log('4 sec passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 3000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('PROBLEM!').catch(x => console.error(x));
*/

// 261 Promisifying the Geolocation API
/*
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );
// offloaded the function to the web api in the background

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then(pos => console.log(pos));

////////////////////////////////////////////////////////////////////////////

const renderCountryII = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}?fullText=true`)
    .then(res => {
      if (!res.ok)
        throw new Error(`Country not found (${response.status})`);
      return res.json();
    })
    .then(data => {
      renderCountry(data[0])
      console.log(data[0])
    })
}

const whereAmI = function (lat, lng) {

  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
    })
    .then(response => {
      // console.log(response);
      if (!response.ok)
        throw new Error(`Problem with geocoding (${response.status})`);
      return response.json();
    })
    .then(data => {
      if (!data.countryName) throw new Error(`Country not found 💥💥💥`);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      renderCountryII(data.countryName);
    })
    .catch(err => {
      renderError(err);
      console.error(err.message)
    })
}

whereAmI()

*/

// Coding challenge #2
/*

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000)
  })
}

const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {

    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    })

    img.addEventListener('error', () => {
      reject('ERROR');
    })

  })
}

let currentImg;

createImage(`img/img-1.jpg`)
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage(`img/img-2.jpg`);
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err))
*/

// 263. Consuming Promises with Async/Await

// when this function is done,
// it automatically returns a premise,

// you need to first understand that a sink await is in fact,
// simply syntactic sugar over the then method in premises.
// So of course behind the scenes, we are still using premises.
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geoCoding
    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
    if (!resGeo.ok) throw new Error(`Problem getting location data`);

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // // same
    // fetch(`https://countries-api-836d.onrender.com/countries/name/${country}?fullText=true`)
    //   .then(res => console.log(res))

    const res = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryName}?fullText=true`);
    if (!res.ok) throw new Error(`Problem getting country data`);

    const data = await res.json();
    // console.log(data[0]);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // what that means is that even though there was an error
    // in the async function,
    // the promise that it returns is still fulfilled.
    // 📍
    // we will manually Reject promise returned from async function
    // [to get the error, change link in fetch]
    throw err;
  }
}

// error catching 📍
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err)
// }

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();
*/

// 266. Running Promises in Parallel

/*

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${errorMsg} (${response.status})`);
      }
      return response.json()
    })
}
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}?fullText=true`);
    // const [data2] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}?fullText=true`);
    // const [data3] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}?fullText=true`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    // Async await combinator
    const data = await Promise.all([
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}?fullText=true`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}?fullText=true`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}?fullText=true`)
    ])
    console.log(data.map(d => d[0].capital));

  } catch (err) {
    console.error(err);
  }
}

get3Countries('india', 'france', 'iceland');

  // if one of the promises rejects,
  // then the whole promise.all actually rejects as well.

*/
// 267. Other Promise Combinators: race, allSettled and any

// Promise.race 
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
      return response.json();
    });
};
/*
(async function () {
  const res = await Promise.race([
    getJSON(`https://countries-api-836d.onrender.com/countries/name/india?fullText=true`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/brazil?fullText=true`),
    getJSON(`https://countries-api-836d.onrender.com/countries/name/mexico?fullText=true`),
  ]);
  console.log(res[0]);
})();
*/
// Promise.race short circuits
// whenever one of the promises gets settled.
// And so again, that means no matter if fulfilled or rejected
/*
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long!`));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://countries-api-836d.onrender.com/countries/name/myanmar?fullText=true`),
  timeout(.58)
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));
*/
// Promise.allSettled never short circuits [ES2020]
/*
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('another success')
]).then(res => console.log(res));

// Promise.all short circuits if their is even 1 error
Promise.all([
  Promise.resolve('success'),
  // Promise.reject('error'),
  Promise.resolve('another success')
]).then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.reject('error'),
  Promise.resolve('another success'),
  Promise.resolve('success'),
]).then(res => console.log(res))
  .catch(err => console.error(err));

// that rejected promises are ignored.
// And so therefore the results of Promise.any
// is always gonna be a fulfilled promise,
// unless of course all of them reject

*/

// Coding Challenge #3
// /*

const imgContainer = document.querySelector('.images');

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000)
  })
}

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    })
    img.addEventListener('error', () => {
      reject('ERROR');
    })
  })
}
// Part-1
const loadNPause = async function () {
  try {
    let img = await createImage(`img/img-1.jpg`);
    console.log(`Image 1 loaded`);
    await wait(2);
    img.style.display = 'none';
    img = await createImage(`img/img-2.jpg`);
    console.log(`Image 2 loaded`);
    await wait(2);
    img.style.display = 'none';

  } catch (err) {
    console.error(err);
  }
}
// loadNPause();

// Part-2
// my
// const loadAll = async function (imgArr) {
//   const imgs = imgArr.map(el => createImage(el));
//   console.log(imgs);
//   Promise.all(imgs)
//     .then(res => {
//       res.forEach(el => {
//         el.className = 'parallel';
//       });
//       // console.log(res);
//     });
// };
// him
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(createImage);
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(el => el.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// */
