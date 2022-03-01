let smoothScroll = document.querySelector('.scroll-to-top');
let myArrow = document.getElementById('scroll-to-top');
let headerImg = document.getElementsByClassName('resumeHeaderImg');
let resumeSection2 = document.getElementById('sectio2resume');

window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");
})


smoothScroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  // ↓ foncton pour scroller par...
  // window.scrollBy(0, window.innerHeight);
});
window.addEventListener("scroll", () => {
  // console.log(scrollY);
  if (window.scrollY > 99) {
    resumeSection2.classList.add('resume__section__opacity');
  } if (window.scrollY > 799) {
    myArrow.classList.add('arrow-visible');
  } if (window.scrollY < 700) {
    myArrow.classList.remove('arrow-visible');
  }
});
let resumeImg = document.getElementById('resumeImg');
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  // console.log(`Offset : ${offset}`);
  resumeImg.style.backgroundpositionY = offset * 0.6 + "px";

})

// Burger
const btn1 = document.querySelector('.btn1');
let menuResume = document.querySelector('.resumenav');
let myResumeHome = document.getElementById('myResumeHome');
let myResumeWork = document.getElementById('myResumeWork');

function burger() {
  btn1.classList.toggle('active')
  menuResume.classList.toggle('active__menu');
  myResumeHome.classList.toggle('active__a');
  myResumeWork.classList.toggle('active__a');
}
btn1.addEventListener('click', burger);



// idée -> border de la nav barre dont la couleur avance en fonction du % du site visité.
// La video principale de la page 2 à gauche seule les autres à droites et se bloc au milieu pendant que les autres défilent

// let cube = document.querySelector('.cube');

// cube.addEventListener('click', () => {

// })
