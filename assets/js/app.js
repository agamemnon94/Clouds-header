let myheaderdiv = document.getElementById('headernav');
let myCardsOdd = document.querySelector('.cardodd');
let myCardsEven = document.querySelector('.cardeven');
let myH2 = document.querySelector('.h2_section1');
let myHome = document.getElementById('home');
let myContact = document.getElementById('contact');
let myNews = document.getElementById('news');
let myArrow = document.getElementById('scroll-to-top')
// let smoothScroll = document.querySelector('.scroll-to-top');
let myCursorOval = document.querySelector('.rightCursor')
let goContact = document.querySelector('.btnspan2');
let paragrapheHeader = document.querySelector('.visibleP');
let bigbody = document.getElementById('resume');
const btn1 = document.querySelector('.btn1');
let menu = document.querySelector('.headernav');
const aMenu1 = document.querySelector('.header');
let alex = document.querySelector('.alex');
let redword = document.querySelector('#redword');
let pblur = document.querySelector('.parallax__p1__box');
let bgblur = document.getElementById('parallax1');
let ligne1 = document.getElementById('ligne1');
let ligne2 = document.getElementById('ligne2');
let ligne3 = document.getElementById('ligne3');
let h2move = document.getElementById('h2move');
let parallax4Hover = document.getElementById('p4hover')

window.addEventListener('load', () => {
    document.body.classList.remove("clean__transition");
    // audio.play();
})

// Fonction qui gère l'apparition des différents éléments en fonction de la hauteur de scroll sur le body
window.addEventListener("scroll", () => {
    // console.log(scrollY);
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
    } if (window.scrollY > 799) {
        bigbody.classList.add('pink__body')
        myH2.classList.add('h2apears');
    } if (window.scrollY > 890) {
        myheaderdiv.classList.add('headerfixeddark');
        myHome.classList.add('headergoldy');
        myContact.classList.add('headergoldy');
        myNews.classList.add('headergoldy');
        myHome.classList.add('header-a-gold');
        myContact.classList.add('header-a-gold');
        myNews.classList.add('header-a-gold');
        myArrow.classList.add('arrow-visible');
        ligne1.classList.add('lignes__color__scroll');
        ligne2.classList.add('lignes__color__scroll');
        ligne3.classList.add('lignes__color__scroll');
    } if (window.scrollY > 2500) {
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
    } if (window.scrollY < 880) {
        myheaderdiv.classList.remove('headerfixeddark');
        myArrow.classList.remove('arrow-visible');
        myHome.classList.remove('header-a-gold');
        myContact.classList.remove('header-a-gold');
        myNews.classList.remove('header-a-gold');
        myHome.classList.remove('headergoldy');
        myContact.classList.remove('headergoldy');
        myNews.classList.remove('headergoldy');
        ligne1.classList.remove('lignes__color__scroll');
        ligne2.classList.remove('lignes__color__scroll');
        ligne3.classList.remove('lignes__color__scroll');
    } if (window.scrollY > 4199) {
        parallax4Hover.classList.add('parallax__4__active__hover')
    }
});
// Fonction qui adouci le retour en haut de page
myArrow.addEventListener('click', () => {
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
    document.getElementById('pres').scrollIntoView({ block: "start", behavior: "smooth", top: 0, left: 0 });
});

// Fonction Burger
function burger() {
    btn1.classList.toggle('active')
    menu.classList.toggle('active__menu');
    myHome.classList.toggle('active__a');
    myContact.classList.toggle('active__a');
    myNews.classList.toggle('active__a');
}
btn1.addEventListener('click', burger);

const parallax1 = document.getElementById('parallax1');
const parallax2 = document.getElementById('parallax2');
const parallax3 = document.getElementById('parallax3');
const parallax4 = document.getElementById('parallax4');

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    // let value = window.scrollY;
    parallax1.style.backgroundPositionY = offset * 0.6 + "px";
    parallax2.style.backgroundPositionX = -offset * 0.7 + "px";
    parallax4.style.backgroundPositionY = -offset * 1.51 + "px";
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

let linkedin = document.getElementById('linkedin');
let link1 = document.getElementById('link1');
let email = document.getElementById('email');
let link2 = document.getElementById('link2');
let twitter = document.getElementById('twitter');
let link3 = document.getElementById('link3');
let insta = document.getElementById('insta');
let link4 = document.getElementById('link4');
// Il y a sans doute une meilleure façon d'écrire les fonction ↓
// Pour les regrouper dans une seule
linkedin.addEventListener('mouseover', function () {
    link1.classList.add('linked');
})
linkedin.addEventListener('mouseleave', function () {
    link1.classList.remove('linked');
})
email.addEventListener('mouseover', function () {
    link2.classList.add('linked');
})
email.addEventListener('mouseleave', function () {
    link2.classList.remove('linked');
})
twitter.addEventListener('mouseover', function () {
    link3.classList.add('linked');
})
twitter.addEventListener('mouseleave', function () {
    link3.classList.remove('linked');
})
insta.addEventListener('mouseover', function () {
    link4.classList.add('linked');
})
insta.addEventListener('mouseleave', function () {
    link4.classList.remove('linked');
})
h2move.addEventListener('mousemove', (e) => {
    h2move.style.backgroundPositionX = e.offsetX * 2.5 + 'px';
    // h2move.style.backgroundPositionY = e.offsetY * 3 + 'px';
    console.log(e.offsetX);
})

