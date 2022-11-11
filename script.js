'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  console.log('button click');
  modal.classList.remove('hidden'); // to remove the hidden word
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden'); // to add
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal); // to close modal by tapping the cancel page
overlay.addEventListener('click', closeModal); // to close overlay by tapping on the blur page

//using the Esc keyboard event handler
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // here is the function above to close modal the on up
  }
});
