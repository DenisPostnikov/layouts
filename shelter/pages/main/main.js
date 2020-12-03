window.onload = () => {
    const body = document.querySelector('body'),
        menuLinks = document.querySelectorAll('.header__menu-link'),
        logo = document.querySelector('.header__logo'),
        menu = document.querySelector('.header__navigation'),
        burgerButton = document.querySelector('.header__touch-button'),
        overlay = document.querySelector('.overlay');

    for (let i = 0; i < menuLinks.length; i++) {
        if (i > 1) {
            menuLinks[i].addEventListener('click', (e) => {
                e.preventDefault();
            })
        }
    }

    // Burger menu
    document.addEventListener('click', (e) => {
        const ITEM = e.target;

        if (ITEM.classList.contains('header__touch-button')) {
            body.classList.toggle('noscroll');
            overlay.classList.toggle('hide');
            logo.classList.toggle('hide');
            ITEM.classList.toggle('header__touch-button_active');
            menu.classList.toggle('header__navigation_active');
        } else if (ITEM.classList.contains('overlay')) {
            body.classList.remove('noscroll');
            overlay.classList.add('hide');
            logo.classList.remove('hide');
            burgerButton.classList.remove('header__touch-button_active');
            menu.classList.remove('header__navigation_active');
        }
    })

    // JSON parser
    const requestURL = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/markups/level-2/shelter/pets.json';

    fetch(requestURL)
        .then(response => response.json())
        .then(data => {
            createSlide(data);
            createModalItem(data);
        });

    function createSlide(arr) {
        let sliderList = document.querySelector('.slider__list');

        for (let i = 0; i < arr.length; i++) {
            sliderList.insertAdjacentHTML('afterbegin', `
                <article data-modal-target="#modal-${arr[i].name}" class="slider__item slider__item_${arr[i].name.toLowerCase()}">
                    <h4 class="slider__title">${arr[i].name}</h4>
                    <button class="slider__link">Learn more</button>
                </article>
            `);
        }
    }

    function createModalItem(arr) {
        for (let i = 0; i < arr.length; i++) {
            body.insertAdjacentHTML('beforeend', `
                <div id="modal-${arr[i].name}" class="modal">
                    <button data-close-button class="modal__close-btn">&times;</button>
                    <div class="modal__content">
                        <div class="modal__picture" style='background-image: url(../../assets/images/pets-${arr[i].name.toLowerCase()}.svg);'></div>
                        <div class="modal__body">
                            <h2 class="modal__title">${arr[i].name}</h2>
                            <span class="modal__subtitle">${arr[i].type} - ${arr[i].breed}</span>
                            <p class="modal__desc">${arr[i].description}</p>
                            <ul class="modal__list">
                                <li class="modal__item"><b>Age:</b> ${arr[i].age}</li>
                                <li class="modal__item"><b>Inoculations:</b> ${arr[i].inoculations}</li>
                                <li class="modal__item"><b>Diseases:</b> ${arr[i].diseases}</li>
                                <li class="modal__item"><b>Parasites:</b> ${arr[i].parasites}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `);
        }
    }

    setTimeout(() => {
        //Slider
        $('.slider__list').slick({
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="slider__navlink slider__navlink_prev">Prev</button>',
            nextArrow: '<button class="slider__navlink slider__navlink_next">Next</button>',
            responsive: [
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Popup pets
        const openModalButtons = document.querySelectorAll('[data-modal-target]');
        const closeModalButtons = document.querySelectorAll('[data-close-button]');

        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);
            })
        })

        overlay.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal__active')
            modals.forEach(modal => {
                closeModal(modal)
            })
        })

        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                closeModal(modal);
            })
        })

        function openModal(modal) {
            if (modal == null) return;

            modal.classList.add('modal__active');
            overlay.classList.remove('hide');
            body.classList.add('noscroll');
        }

        function closeModal(modal) {
            if (modal == null) return;

            modal.classList.remove('modal__active');
            overlay.classList.add('hide');
            body.classList.remove('noscroll');
        }
    }, 500);

}
