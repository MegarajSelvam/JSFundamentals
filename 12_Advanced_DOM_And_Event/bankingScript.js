'use strict';

///////////////////////////////////////
// Modal window
///////////////////////////////////////
// Constants

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const bntScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const navContainer = document.querySelector('.nav__links');
const navList = document.querySelectorAll('.nav__link');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');
const sliders = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

///////////////////////////////////////
// Functions
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnOpenModal => 
  btnOpenModal.addEventListener('click', openModal)
)

///////////////////////////////////////
// Events
/////////////////////////
// Modal Events
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////
// Scroll Events

// Older way of doing scrolling. Support most of the browser
// bntScrollTo.addEventListener('click', (e) => {
//   e.preventDefault();
//   const slcoords = section1.getBoundingClientRect();
//   console.log(slcoords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   console.log('height/width of viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

//   // Scrolling 
//   // window.scrollTo(slcoords.left, slcoords.top);

//   // Below approach basically determined the aboslute position of the element relative to the document
//   // window.scrollTo(slcoords.left + window.pageXOffset, slcoords.top + window.pageYOffset);

//   window.scrollTo({
//     left: slcoords.left + window.pageXOffset,
//     top: slcoords.top + window.pageYOffset,
//     behavior: "smooth",
//   });
// });

// New way of doing scrolling. Support only in modern browser
bntScrollTo.addEventListener('click', (e) => {
  section1.scrollIntoView(
    {
      behavior: 'smooth'
    }
  );
});

/////////////////////////
// Page Navigation

// navList.forEach(function(e){
//   e.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView(
//     {
//         behavior: 'smooth'
//     });
//   });
// });

// In the above example, For every element we are attaching same event handler. It is not efficient way of coding. lets take an example if we have 10000 element, then for all 10K we are attaching this event. Instead of doing this, we should simply event delegate option (bubbling).

// Bubbling Technique
// Step 1: Add Event listener to common parent element
// Step 2: Determine what element originated the event
// Step 3: Matching strategy

// Add Event listener to common parent element. Here it is nav__list (navContainer)
navContainer.addEventListener('click', function(e) {
  e.preventDefault();

  // Determine what element originated the event
  const target = e.target;

  // Matching strategy
  if (target.classList.contains('nav__link')) {
    const id = target.getAttribute('href');
    document.querySelector(id).scrollIntoView(
    {
      behavior: 'smooth'
    });
  }
});

//NOTE: It is not possible to add the event to the element which do not exist at beginning. but by using event delegate we can handle this scenario as well

/////////////////////////

// Tabbed components
// applying event delegate instead of attaching event on each tab
tabsContainer.addEventListener('click', function(e) {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');
  // try clicking on the tab and away from the tab and observe the console screen to see the difference
  // console.log(e.target);
  // console.log(e.target.parentElement);
  // console.log(e.target.closest('.operations__tab'));

  // Guard Clause
  if (!clicked) return;

  // removing active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate content area
  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})
/////////////////////////

// Menu fade animations
// mouseenter <-> mouseleave
// mouseover <-> mouseout
const handleHover = function(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(e => {
      if (e !== link) e.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function(e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function(e) {
//   handleHover(e, 1);
// });

// Use bind method to passing argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////

// Sticky Navigation

// This approach is not efficient, windows scroll event should be avoided. Because it fires all the time when you scroll.
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function(e){
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Sticky Navigation with Intersection API
//  API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.

const navHeight = nav.getBoundingClientRect().height;
//console.log(navHeight);

const stickyNav = function(entries){
  const [entry] = entries;
 // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`,});
headerObserver.observe(header);

// rootMargin is used for: now the navigation appeared exactly 90 pixels before the threshold was actually reached.
/////////////////////////

// Reveal Sections

const revealSection = function(entries, observer) {
    const [entry] = entries;
    //console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  };

const sectionObserver = new IntersectionObserver(
    revealSection, {
    root: null,
    threshold: 0.15,
    });

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    //section.classList.add('section--hidden');
  })

/////////////////////////

// Lazy Loading Images
// Its for performance. Initially load less pixel image and later load proper image.

console.log(imgTargets);
const loadImg = function(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;
    // entry.target.classList.remove('lazy-img'); // Remove blur only if the image is loaded fully

    entry.target.addEventListener('load', function(){
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {root: null, threshold: 0, rootMargin: '200px'});
imgTargets.forEach(img => imgObserver.observe(img));

/////////////////////////
// Slider Component:

// Just for testing added
// slider.style.transform = 'scale(0.4) translateX(-1200px)';
// slider.style.overflow = 'visible';
const Slider = function () {
    let curSlide = 0;
    const maxSlide = sliders.length;
    
    const createDots = function() {
      sliders.forEach((_, i) => {
        dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
      });
    };
    
    const activateDot = function(slide) {
      document.querySelectorAll("dots__dot").forEach(dot => {
        dot.classList.remove(`dots__dot--active`)
      })
    
      document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add(`dots__dot--active`)
    }
    
    // slide === 0 => 0%, 100%, 200%, 300%
    //slide === 1; -100%, 0%, 100%, 200%
    const goToSlide = function(slide) {
      sliders.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`
      });
    }
    
    const nextSlide = function() {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    }
    
    const pervSlide = function() {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    }
    
    const init = function() {
      createDots();
      goToSlide(0);
      activateDot(0);
    }
    init();
    
    // To go to Next Slide
    btnRight.addEventListener('click', nextSlide); 
    btnLeft.addEventListener('click', pervSlide);
    
    document.addEventListener('keydown', function(e) {
    e.key === 'ArrowLeft' && pervSlide();
    e.key === 'ArrowRight' && nextSlide();
    });
    
    // Event Delegation
    dotContainer.addEventListener('click', function(e) {
      if (e.target.classList.contains('dots__dot')) {
        const {slide} = e.target.dataset; // all the custom attributes (data-XXX), present inside dataset.
        goToSlide(slide);
        activateDot(slide);
      }
    });
};
Slider();
