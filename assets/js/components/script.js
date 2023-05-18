document.addEventListener('DOMContentLoaded', load());

function load() {
    transformHeader();
    openModal();
    AOS.init();
    moveBurger();
    translateFormBtn();
    
    if (window.scrollY !== 0) {
        document.querySelector('.header').classList.add('scrolled');
    };

    if (document.querySelector('.card-service__items--tabs')) {
        var mixer = mixitup('.card-service__items--tabs', {
            load: {
                filter: '.send'
            },
            animation: {
                effects: 'fade translateZ(-100px)'
            }
        });
    };
};

function lockPadding() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    const elemLockPadding = document.querySelectorAll('.lock-padding');

    if (elemLockPadding) {
        elemLockPadding.forEach(item => {
            item.style.paddingRight = lockPaddingValue;
        });
    };
};

function openModal() {
    const openModalBtn = document.querySelectorAll('.openForm');
    const closeModalBtn = document.querySelector('.form-modal__close-btn');
    const modalForm = document.querySelector('.form-modal');

    openModalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            lockPadding();
            modalForm.classList.add('openModal');
            document.body.classList.add('scrollLock');
        });
    });

    closeModalBtn.addEventListener('click', () => {
        modalForm.classList.remove('openModal');
        document.body.classList.remove('scrollLock');
        document.body.style.paddingRight = '0px';
        modalForm.style.paddingRight = '0px';
        document.querySelector('.header').style.paddingRight = '0px';
        document.querySelector('main').style.paddingRight = '0px';
        if (document.querySelector('.burger__open-btn').classList.contains('active')) {
            document.querySelector('.burger__open-btn').classList.remove('active');
            document.querySelector('.header__nav').classList.remove('active');
        }
    });
};

function translateFormBtn() {
    const formBtn = document.querySelector('.questions__btn');
    const formBody = document.querySelector('.questions__form');
    const qustionContent = document.querySelector('.questions__body');

    checkAndTranslate ();

    window.addEventListener('resize', () => {
        checkAndTranslate ();
    });

    function checkAndTranslate () {
        if (window.innerWidth <= 769) {
            formBody.appendChild(formBtn);
        } else {
            qustionContent.appendChild(formBtn);
        };
    };
};

function moveBurger() {
    const burgerMenu = document.querySelector('.header__nav');
    const burgerBtn = document.querySelector('.burger__open-btn');
    const header = document.querySelector('.header');

    burgerBtn.addEventListener('click', () => {
        document.body.classList.toggle('scrollLock');
        burgerBtn.classList.toggle('active');
        
        if (burgerMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            setTimeout(() => {
                header.classList.remove('filterOff');
            },50)
        } else {
            setTimeout(() => {
                burgerMenu.classList.add('active');
            }, 50);
            header.classList.add('filterOff');
        };
    });
};

function transformHeader() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        let currentPosY = window.scrollY;
        if (currentPosY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        };
    });
};



