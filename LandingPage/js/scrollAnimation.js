(function () {

    // animation elements on scroll

    window.onscroll = function (e) {

        (window.pageYOffset > 0) ? headerMenu.classList.add('__bg'): headerMenu.classList.remove('__bg');

        const Y = window.pageYOffset;

        // about section animation
        let aboutClass = ['moveLeft', 'moveRight'];
        let about      = document.querySelector('.about');
        let aboutItems = document.querySelectorAll('.about__offer__container');

        aboutItems.forEach((elem, i) => {
            i++;
            // if (Y >= about.offsetTop * 0.5 + elem.offsetTop*0.8) { // almost when all in the center
            if (Y >= about.offsetTop * 0.5 + (elem.offsetHeight * 0.5) + elem.offsetTop) {
                elem.classList.remove(`${aboutClass[i % 2]}`);
            }
            if (Y <= about.offsetTop * 0.7) {
                elem.classList.add(`${aboutClass[i % 2]}`);
            }
        });


        //  work section

        let work   = document.querySelector('.work');
        let slider = document.querySelector('.slider');

        if (Y >= work.offsetTop) {
            slider.classList.remove('moveUp');
        }
        if (Y <= work.offsetTop * 0.7) {
            slider.classList.add('moveUp');
        }


        //  tariffs section

        let tariffClass = ['moveRight', 'scope', 'moveLeft'];
        let tariffs     = document.querySelector('.tariffs');
        let tariffsCont = document.querySelectorAll('.pricing__container__tariffs');

        tariffsCont.forEach((elem, i) => {
            if (Y >= tariffs.offsetTop - (elem.offsetHeight * 0.5) + elem.offsetTop) {
                elem.classList.remove(`${tariffClass[i]}`)
            }
            if (Y <= tariffs.offsetTop * 0.7) {
                elem.classList.add(`${tariffClass[i]}`)
            }
        });

    }


    // hide/show menu on scroll 

    let headerMenu = document.querySelector('.header__menu');

    function onWheel(e) {
        if (window.pageYOffset >= headerMenu.offsetHeight * 2) {
            (e.deltaY >= 0) ? headerMenu.style.top = `${-headerMenu.offsetHeight}px`: headerMenu.style.top = '0';
        }
    }
    window.addEventListener("wheel", onWheel);

})();