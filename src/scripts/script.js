let burgerBtn = document.querySelector('.btn-burger');
let burgerMenu = document.querySelector('.header-block__menu');

burgerBtn.addEventListener('click', function () {
    if (burgerBtn.classList.contains('open-burger')) {
        burgerBtn.classList.remove('open-burger');
        burgerMenu.style.display = 'none';
        document.querySelector('body').style.overflow = 'visible';
        document.querySelector('.header-block__tel').style.display = 'none';
        document.querySelector('.white').style.display = 'none';
        document.querySelector('.social').style.display = 'none';
        document.querySelector('.header-block__mail').style.display = 'none';
        document.querySelector('.header').classList.remove('shadow-low');
        document.querySelector('.header-block__logo').classList.remove('shadow-low');
    } else {
        burgerBtn.classList.add('open-burger');
        burgerMenu.style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.white').style.display = 'flex';
        document.querySelector('.header-block__tel').style.display = 'flex';
        document.querySelector('.social').style.display = 'flex';
        document.querySelector('.header-block__mail').style.display = 'flex';
        document.querySelector('.header').classList.add('shadow-low');
        document.querySelector('.header-block__logo').classList.add('shadow-low');
    }
});

let btnReadMore = document.querySelector('.uncover_text');
let readMore = document.querySelector('.read_more');

btnReadMore.addEventListener('click', function () {
    if (readMore.style.display === "none") {
        readMore.style.display = 'block';
        btnReadMore.innerHTML = 'Скрыть';
        btnReadMore.classList.toggle('active');
    } else  {
        readMore.style.display = 'none';
        btnReadMore.innerHTML = 'Читать больше';
        btnReadMore.classList.remove('active');
    }
});


const buttonsContainer = document.querySelector('.tabs-box_buttons');
const tabs = document.querySelector('.tabs-blocks');

buttonsContainer.addEventListener('click', event => {
    let index = event.target.closest('.tabLinks').dataset.value;

    tabs.querySelector('.tabs-active').classList.remove('tabs-active');
    tabs.querySelector(`.tabs--${index}`).classList.add('tabs-active');
});

let tabsSlider = document.querySelector('.tabs-slider');
let tabsTiny = tns({
    container: tabsSlider,
    mouseDrag: true,
    speed: 400,
    loop: true,
    nav: false,
    controls: false,
    swipeAngle: true,
    responsive: {
        250: {
            items : 1,
        } ,
        925: {
            items : 2,
        },

        1300: {
            items : 4,
            gutter : 0,
        }
    }
});

let counterFunction = function (info, eventName) {
    var info = tabsTiny.getInfo(),
        currentTubSlide = document.querySelector('.currentSlide'),
        totalTubSlide = document.querySelector('.totalSlide')

    currentTubSlide.textContent = info.displayIndex
    totalTubSlide.textContent = info.slideCount

    document.querySelector('.next').addEventListener('click', function () {
        tabsTiny.goTo('')
    })
}

counterFunction()
tabsTiny.events.on('transitionEnd', counterFunction);

let tabsSliderS = document.querySelector('.tabs-slider_double');
let tabsTinyS = tns({
    container: tabsSliderS,
    mouseDrag: true,
    speed: 400,
    loop: true,
    nav: false,
    controls: false,
    swipeAngle: true,
    responsive: {
        250: {
            items : 1,
            swipeAngle: false,
        } ,
        885: {
            items : 2,
            autoWidth: false,
        },
    }
});

let counterFunctionS = function (info, eventName) {
    var info = tabsTinyS.getInfo(),
        currentTubSlideS = document.querySelector('.currentSlide_2'),
        totalTubSlideS = document.querySelector('.totalSlide_2')

    currentTubSlideS.textContent = info.displayIndex
    totalTubSlideS.textContent = info.slideCount

    document.querySelector('.next').addEventListener('click', function () {
        tabsTinyS.goTo('')
    })
}

counterFunctionS()
tabsTinyS.events.on('transitionEnd', counterFunctionS);

let sliderItem = document.querySelector('.tiny-slider');
let slider = tns({
    container: sliderItem,
    mouseDrag: true,
    items:1,
    speed: 400,
    gutter: 29,
    loop: true,
    autoWidth: true,
    nav: false,
    controlsContainer: "#customize-controls",
});

let customizedFunction = function (info, eventName) {
    var info = slider.getInfo(),
        current = document.querySelector('.currentText'),
        total = document.querySelector('.totalText')

    current.textContent = info.displayIndex
    total.textContent = info.slideCount

    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('')
    })
}

customizedFunction()
slider.events.on('transitionEnd', customizedFunction);