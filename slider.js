let sliders = document.querySelectorAll('.slider');
let liste = document.getElementById('ul');
let myContactH3 = document.querySelector('.h3__whoami__container');
let myVideoFullScreen = document.querySelector('.video__who__container');
let smoothScroll = document.querySelector('.scroll-to-top');
let myArrow = document.getElementById('scroll-to-top');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');
let span4 = document.querySelector('.span4');
let span5 = document.querySelector('.span5');
let span6 = document.querySelector('.span6');
let span7 = document.querySelector('.span7');
let span8 = document.querySelector('.span8');
let span9 = document.querySelector('.span9');
let span10 = document.querySelector('.span10');
let span11 = document.querySelector('.span11');
let span12 = document.querySelector('.span12');
let span13 = document.querySelector('.span13');
let span14 = document.querySelector('.span14');
let span15 = document.querySelector('.span15');
let span16 = document.querySelector('.span16');
let span17 = document.querySelector('.span17');


// ↓ Fonction qui permet de créer un événement au click sur chaque élément d'une liste en partant du parent soit, "l'ul" vers chaque "li" comme pour les enfants de la "li".
liste.addEventListener('click', function (e) {
    let target = e.target; // Clicked element
    while (target && target.parentNode !== ul) {
        target = target.parentNode; // If the clicked element isn't a direct child
        if (!target) { return; } // If element doesn't exist
    }
    if (target.tagName === 'LI') {
        // console.log(target.id); // Check if the element is a LI
        document.getElementById('h1__who__container').scrollIntoView({ block: "start", behavior: "smooth", top: 0, left: 0 });
        // if (target.id === 'htmlwork') {
        // } else { console.log('Ne fonctionne pas'); }
    }
});
// Même fonction qui ci-dessus mais sans agire avec les enfants des "li", des <a> par exemple. dans ce projet il n'y en a pas.
// liste.addEventListener('click', function (e) {
//     if (e.target.tagName === 'LI') {
//         console.log(e.target.id);  // Check if the element is a LI
//     }
// });

sliders.forEach(function (slider) {
    let sliderRange = slider.querySelector('.slider__range');
    let sliderBefore = slider.querySelector('.slider__before');
    let sliderSeparator = slider.querySelector('.slider__separator');

    function updateSliderPosition() {
        sliderBefore.style = `width:${sliderRange.value}%`;
        sliderSeparator.style = `left:${sliderRange.value}%`;
    }

    sliderRange.addEventListener('input', updateSliderPosition);

    let isDragging = false;
    // console.log('false');

    sliderSeparator.addEventListener('mousedown', function () {
        isDragging = true;
        // console.log('appuyée');
    })
    document.addEventListener('mouseup', function () {
        isDragging = false
        // console.log('relâchée');
    })
    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            let sliderP1 = slider.querySelector('.slider__p1');
            let sliderP2 = slider.querySelector('.slider__p2');
            let listWho = document.querySelector('.comp');
            let sliderContainer = document.querySelector('.slider__container')
            let sliderRect = slider.getBoundingClientRect();
            let newWidth = (e.clientX - sliderRect.left) / sliderRect.width * 100;
            sliderRange.value = newWidth;
            updateSliderPosition();
            // console.log(newWidth);

            if (newWidth < 55) {
                sliderP1.classList.add('slider__p__opacity');
                sliderP2.style.opacity = '0';
                sliderP2.style.transform = ('scale(0)');

            } if (newWidth > 45) {
                sliderP2.style.opacity = '1';
                sliderP2.style.transform = ('scale(1)');
                sliderP1.classList.remove('slider__p__opacity');

            } if (newWidth < 0) {
                // isDragging = false;
                sliderContainer.classList.add('slider__container__left')
                // sliderP1.classList.remove('slider__p__opacity');
                listWho.classList.add('display__content');
            } if (newWidth >= 100) {
                sliderContainer.classList.remove('slider__container__left')
                listWho.classList.remove('display__content');
            }
        }
    })
});

myContactH3.addEventListener('click', function () {
    myVideoFullScreen.requestFullscreen();
    // if (myVideoFullScreen.requestFullscreen()) {
    //     myContactH3.style.opacity = '0';
    // }
    // essayer de faire toggle avec .une__class.class__active
})
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        // myContactH3.style.opacity = '1';
    }
})
window.addEventListener("scroll", (e) => {
    console.log(scrollY);
    if (window.scrollY > 999) {
        myArrow.classList.add('arrow-visible');
        span1.classList.add('active__falls__later')
        span2.classList.add('active__falls');
        span3.classList.add('active__falls');
        span4.classList.add('active__falls');
        span5.classList.add('active__falls');
        span6.classList.add('active__falls');
        span7.classList.add('active__falls');
        span8.classList.add('active__falls');
        span9.classList.add('active__falls');
        span10.classList.add('active__falls');
        span11.classList.add('active__falls');
        span12.classList.add('active__falls');
        span13.classList.add('active__falls');
        span14.classList.add('active__falls');
        span15.classList.add('active__falls');
        span16.classList.add('active__falls');
        span17.classList.add('active__falls');
    }
    if (window.scrollY < 901) {
        myArrow.classList.remove('arrow-visible');
        span1.classList.remove('active__falls__later');
        span2.classList.remove('active__falls');
        span3.classList.remove('active__falls');
        span4.classList.remove('active__falls');
        span5.classList.remove('active__falls');
        span6.classList.remove('active__falls');
        span7.classList.remove('active__falls');
        span8.classList.remove('active__falls');
        span9.classList.remove('active__falls');
        span10.classList.remove('active__falls');
        span11.classList.remove('active__falls');
        span12.classList.remove('active__falls');
        span13.classList.remove('active__falls');
        span14.classList.remove('active__falls');
        span15.classList.remove('active__falls');
        span16.classList.remove('active__falls');
        span17.classList.remove('active__falls');
    }
});

smoothScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    // ↓ foncton pour scroller par...
    // window.scrollBy(0, window.innerHeight);
});



