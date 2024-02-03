'use strict';
// idea <<<<getting the resources>>>>....
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// idea <<<<OPENING THE MODAL>>>>>>>..

const openModalfun = function () {
    // console.log('Btn clk');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModalfun);

// idea <<<<CLOSING THE MODAL>>>>>>>..

const closeModalfun = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
// TODO the //FIXME addEventListener //will call the passed on function ,
//FIXME //so there is no need to call the function in the addEventListener handler event..
//<<<<<<<<<< ONLY function declaration is passed in it..........>>>>>>>>>>>>>>>>
btnCloseModal.addEventListener('click', closeModalfun);
overlay.addEventListener('click', closeModalfun);
// closing with the help of keys..
document.addEventListener('keydown', function (e) {
    // console.log('A key was pressed');
    console.log(e.key);
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModalfun();
            // function x() {
            //     modal.classList.add('hidden');
            //     overlay.classList.add('hidden');
            // };
        }
    }
})
// console.log(closeModalfun);
// console.log(closeModalfun());