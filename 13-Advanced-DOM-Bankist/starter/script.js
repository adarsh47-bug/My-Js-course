'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');


///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////////////
// Button scrolling (learn more btn)

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth,
  // );

  //idea. Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })
  section1.scrollIntoView({ behavior: 'smooth' });
})

/////////////////////////////////////////////////////////////
// Page Navigation
// 1.1
// document.querySelectorAll('.nav__link').forEach((el) => {
//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// })
// 1.2
//idea. Event Delegation: Implementing Page Navigation
// 1.Add event listener to common parent element
// 2.determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////
//11. Tabbed component

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

// Event delegation
tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

//12. Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;

    })
    logo.style.opacity = this;
  }
}

// Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//idea. example for explanation
/*
function handleHover(e) {

  const link = e.target

  console.log(`Event object will always be passed in by addEventListener: ${link}`)

  console.log(`Params: ${this.opacity}, ${this.color}, and ${this.backgroundColor}`)

}

nav.addEventListener('mouseover', handleHover.bind({opacity: 0.5, color: 'red', backgroundColor: '#808080'}))
*/
///////////////////////////////////////////////////////////////

// 13.
// Sticky Navigation

// const initialCoord = section1.getBoundingClientRect();
// console.log(initialCoord);
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY); //fix. NOTE: scroll event have bad performance
//   if (window.scrollY > initialCoord.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// 14. A Better Way: The Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry))
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;  //entries is an array

  if (!entry.isIntersecting)
    nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(
  stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);


//idea. So this callback function here will get called
// each time that the observed element,
// so our target element here, is intersecting
// the root element at the threshold that we defined

// 15. Reveal section
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// 16. Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => entry.target.classList.remove('lazy-img'));

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '100px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// 17,18
// Slider
const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots')

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  }

  const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`));
  }

  // Next slide 
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;

    goToSlide(curSlide);
    activateDot(curSlide);
  }

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  }
  init();

  // Event handlers
  // 1
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  // 3
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
  // 3
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
slider();


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// 3
//idea. Selecting Elements
/*
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');

// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons); //returns "HTMLCollection" (html-collection is live,i.e. its gets updated)

// console.log(document.getElementsByClassName('btn'));

// 📍Creating and Inserting elements

// document.querySelector('.btn').insertAdjacentHTML()

const massage = document.createElement('div');
massage.classList.add('cookie-message');
// massage.textContent = `We use cookied for improved functionality and analytics.`;
massage.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// way1
// header.prepend(massage);
header.append(massage);
// header.append(massage.cloneNode(true));
// way2
// header.before(massage);
// header.after(massage);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  massage.remove();
  // massage.parentElement.removeChild(massage); //this is c/d dom traversing
})
*/
// 4
// Styles
/*
massage.style.backgroundColor = '#37383d'
massage.style.width = '120%';

console.log(massage.style.color);
console.log(massage.style.backgroundColor);

console.log(getComputedStyle(massage).color);
console.log(getComputedStyle(massage).height);

// console.log(Number.parseFloat(getComputedStyle(massage).height, 10)); //171
massage.style.height = Number.parseFloat(getComputedStyle(massage).height, 10) + 30 + 'px'
// console.log(massage.style.height);

document.documentElement.style.setProperty('--color-primary', 'lightgray');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist')

console.log(logo.src); //absolute
console.log(logo.getAttribute('src')); //relative

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//fix. Don't use this (over writes the entire class list)
logo.className = 'adarsh'
*/

// 5
// Implementing Smooth Scrolling (same code as above)
/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth,
  // );

  //idea. Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })
  section1.scrollIntoView({ behavior: 'smooth' });
})
*/
// 6
//  Types of Events and Event Handlers
/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great');
  // h1.removeEventListener('mouseenter', alertH1);
}

h1.addEventListener('mouseenter', alertH1)

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great');
// }
*/
// 7
// Event Propagation: Bubbling and Capturing

// 8 , Event Propagation in Practice

// rgb(255,255,255)
/*
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // e.preventDefault();
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // Stop propagation
  // e.stopPropagation();// don't do this
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
},
  // true
);  //true is capture event (false is default)
//idea. capture event is not generally used these days
// but bubbling Is USED...
*/
// 9
// Event Delegation: Implementing Page Navigation

// 10
// DOM Traversing
/*
const h1 = document.querySelector('h1');

// Going downwards: child

console.log(h1.querySelectorAll('.highlight')); //only children of h1 are selected
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'crimson';

// Going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// Closest ,Returns closest ancestor Element or itself...
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach((el) => {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)'
  }
})

*/
// 11
// Tabbed component

// 19
// Lifecycle DOM Events
/*
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
*/
