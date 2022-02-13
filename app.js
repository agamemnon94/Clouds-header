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
const aMenu1 = document.querySelector('.header');
let alex = document.querySelector('.alex');
let redword = document.querySelector('#redword');
let pblur = document.querySelector('.p__parallax1');
let bgblur = document.getElementById('parallax1');


// Fonction qui gère l'apparition des différents éléments en fonction de la hauteur de scroll sur le body
window.addEventListener("scroll", () => {
    console.log(scrollY);
    if (window.scrollY > 50) {
        myHome.classList.add('funnyPaddin')
        myContact.classList.add('funnyPaddin');
        myNews.classList.add('funnyPaddin');
        alex.style.opacity = '0';
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
        alex.style.opacity = '1';
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
    document.getElementById('footerp').scrollIntoView({ block: "start", behavior: "smooth", top: 0, left: 0 });
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

const parallax1 = document.getElementById('parallax1');
const parallax2 = document.getElementById('parallax2');
const parallax3 = document.getElementById('parallax3');
const parallax4 = document.getElementById('parallax4');
const videoHead = document.getElementById('videohead');

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    let value = window.scrollY;
    // console.log('Offset: ' + offset);
    // console.log('Offset *0.7 ' + offset * 0.7);
    parallax1.style.backgroundPositionY = offset * 0.6 + "px";
    parallax2.style.backgroundPositionY = -offset * 0.5 + "px";
    parallax4.style.backgroundPositionY = -offset * 1.5 + "px";
})
let h3blur = document.getElementById('h3blur');
let audio = new Audio("assets/sounds/heartbeat-01a.mp3");

redword.addEventListener('mouseover', function () {
    h3blur.classList.toggle('blur');
    pblur.classList.toggle('blur');
    redword.classList.add('heartBeat');
    redword.classList.toggle('redword__hover');
    bgblur.style.filter = 'hue-rotate(358deg)';
    audio.play();


})
redword.addEventListener('mouseleave', function () {
    h3blur.classList.toggle('blur');
    pblur.classList.toggle('blur');
    redword.classList.remove('heartBeat');
    redword.classList.toggle('redword__hover');
    bgblur.style.filter = 'none';
    audio.pause();
    audio.currentTime = 0;
})
// btn1.addEventListener('click', burger);
