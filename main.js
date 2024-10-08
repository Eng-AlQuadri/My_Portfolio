// Turn Page When Click Next Or Prev Button

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {

    el.onclick = () => {

        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {

            pageTurn.classList.remove('turn');

            setTimeout(() => {

                pageTurn.style.zIndex = 20 - index;

            }, 500);

        } else {

            pageTurn.classList.add('turn');

            setTimeout(() => {

                pageTurn.style.zIndex = 20 + index;

            }, 500);
        }
    }
})

// Contact Me Button When Clicked

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {

    pages.forEach((page, index) => {

        setTimeout(() => {

            page.classList.add('turn');

            setTimeout(() => {

                page.style.zIndex = 20 + index;

            }, 500);

        }, (index + 1) * 200 + 100);
    })
}

// Create Reverse Index function

let totalPages = pages.length;

let pageNumber = 0;

function reverseIndex() {

    pageNumber--;

    if (pageNumber < 0) {

        pageNumber = totalPages - 1;
    }
}

// Back Profile Button When Click

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {

    pages.forEach((_, index) => {

        setTimeout(() => {

            reverseIndex();

            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {

                reverseIndex();

                pages[pageNumber].style.zIndex = 10 + index;

            }, 500);

        }, (index + 1) * 200 + 100);
    })
}

// Opening Animation

const coverRight = document.querySelector('.cover.cover-right');

const pageLeft = document.querySelector('.book-page.page-left');

// Opening Animation (Cover Right Animation)

setTimeout(() => {

    coverRight.classList.add('turn');

}, 2100);

setTimeout(() => {

    coverRight.style.zIndex = -1;

}, 2800);

// Opening Animation (Page Left Or Profile Page Animation)

setTimeout(() => {

    pageLeft.style.zIndex = 20;

}, 3200);


// Opening Animation (All Page Right Animation)

pages.forEach((_, index) => {

    setTimeout(() => {

        reverseIndex();

        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {

            reverseIndex();

            pages[pageNumber].style.zIndex = 10 + index;

        }, 500);

    }, (index + 1) * 200 + 2100);
})

// Opening Right Menu 

const RightMenu = document.querySelector('.icon');
const Menu = document.querySelector('.h-options')

RightMenu.addEventListener('click', () => {

    if (Menu.classList.contains('hidden'))
        Menu.classList.remove('hidden');
    else
        Menu.classList.add('hidden');
})