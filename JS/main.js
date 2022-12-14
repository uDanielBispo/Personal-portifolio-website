const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLink = document.querySelectorAll('.nav__link');


//OPEN MENU
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
};
//CLOSE MENU
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
};

function linkAction(){
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//ACCORDION SKILLS
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i=0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close';
  }

  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open';
  }

}

skillsHeader.forEach(el =>{
  el.addEventListener('click', toggleSkills);
})


const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active');
    })    
    target.classList.add('qualification__active');

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    })
    tab.classList.add('qualification__active');
  })
})

//ACTIVE MODAL
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active__modal')
}

modalBtns.forEach((modalBtn, i) =>{
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView)=>{
      modalView.classList.remove('active__modal')
    })
  })
}))

//SWIPER
let swiper = new Swiper(".portifolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
