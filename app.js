let myheaderdiv = document.getElementById('headernav');
let myCardsOdd = document.querySelector('.cardodd');
let myCardsEven = document.querySelector('.cardeven');
let myH2 = document.querySelector('.h2_section1');
let videoheader = document.querySelector('.videohead');
let myHome = document.getElementById('home');
let myContact = document.getElementById('contact');
let myNews = document.getElementById('news');
let myArrow = document.getElementById('scroll-to-top')
let smoothScroll = document.querySelector('.scroll-to-top');
let myCursorOval = document.querySelector('.rightCursor')
let goContact = document.querySelector('.btnspan2');
let paragrapheHeader = document.querySelector('.visibleP');
let bigbody = document.getElementById('body');
const menu = document.querySelector('.headernav');
const btnMenu = document.querySelector('.btn__toggle__container');
const aMenu1 = document.querySelector('.header')


// Fonction qui gère l'apparition des différents éléments en fonction de la hauteur de scroll sur le body
window.addEventListener("scroll", () => {
    console.log(scrollY);
    if (window.scrollY > 50) {
        myHome.classList.add('funnyPaddin')
        myContact.classList.add('funnyPaddin');
        myNews.classList.add('funnyPaddin');
    } if (window.scrollY > 150) {
        myheaderdiv.classList.remove('navbg');
    } if (window.scrollY > 500) {
        myHome.classList.remove('funnyPaddin');
        myContact.classList.remove('funnyPaddin');
        myNews.classList.remove('funnyPaddin');
    } if (window.scrollY > 500) {
    } if (window.scrollY > 799) {
        bigbody.classList.add('pink__body')
        myH2.classList.add('h2apears');
    } if (window.scrollY > 890) {
        myheaderdiv.classList.add('headerfixed');
        videoheader.classList.add('videoFixed');
        myHome.classList.add('header-a-gold');
        myContact.classList.add('header-a-gold');
        myNews.classList.add('header-a-gold');
        myArrow.classList.add('arrow-visible');
    } if (window.scrollY > 1499) {
        bigbody.classList.remove('pink__body');
    } if (window.scrollY < 150) {
        myheaderdiv.classList.add('navbg');
    } if (window.scrollY === 0) {
        myHome.classList.remove('funnyPaddin');
        myContact.classList.remove('funnyPaddin');
        myNews.classList.remove('funnyPaddin');
    } if (window.scrollY < 799) {
        bigbody.classList.remove('pink__body');
    } if (window.scrollY < 860) {
        myheaderdiv.classList.remove('headerfixed');
        videoheader.classList.remove('videoFixed');
        myHome.classList.remove('header-a-gold');
        myContact.classList.remove('header-a-gold');
        myNews.classList.remove('header-a-gold');
        myArrow.classList.remove('arrow-visible');
    }
});
// Fonction qui adouci le retour en haut de page
smoothScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    // ↓ foncton pour scroller par...
    // window.scrollBy(0, window.innerHeight);
});

// Pour le bouton toggle du header de la page Home
// change la class de la div et le contenu texte de la balise "<p>"
myCursorOval.addEventListener('click', () => {
    myCursorOval.classList.toggle('leftCursor');
    // console.log('hello');
    if (paragrapheHeader.innerText === "Click me") {
        paragrapheHeader.innerText = "And now,";
    } else {
        paragrapheHeader.innerText = "Click me";
    }
});


goContact.addEventListener('click', () => {
    // location.href = "#end";
    window.scrollTo({
        top: 2500,
        left: 0,
        behavior: "smooth"
    });
});



btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active__menu');
    myHome.classList.toggle('active__a');
    myContact.classList.toggle('active__a');
    myNews.classList.toggle('active__a');
    console.log('Hello');

})
const btn1 = document.querySelector('.btn1');


function burger() {
    btn1.classList.toggle('active')
}


btn1.addEventListener('click', burger);
