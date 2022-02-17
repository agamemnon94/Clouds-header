let smoothScroll = document.querySelector('.scroll-to-top');
let myArrow = document.getElementById('scroll-to-top');


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
  console.log(scrollY);
  if (window.scrollY > 899) {
    myArrow.classList.add('arrow-visible');
  } if (window.scrollY < 801) {
    myArrow.classList.remove('arrow-visible');

  }
});

// idée -> border de la nav barre dont la couleur avance en fonction du % du site visité.
// La video principale de la page 2 à gauche seule les autres à droites et se bloc au milieu pendant que les autres défilent