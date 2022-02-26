'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');

const showModalV = document.querySelector('.show-modal');
console.log(showModalV); // It only prints first button
// Limitation of query selecto
// Returns only a first element that matches the selectors
// To avoid this we need to use querySelectorAll

const openModal = document.querySelectorAll('.show-modal');
console.log(openModal); // It only prints first button

for (let i = 0; i < openModal.length; i++) {
  console.log(openModal[i]);
  console.log(openModal[i].textContent);
}

const showModal = function () {
  // <div class="modal hidden">
  // Removing only hidden class in that modal
  // we can remove multiple class at a time. Use comma separated value for the same
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Working With Classes
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', showModal);
}

btncloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// NOTE:
// Key Down Event
document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
