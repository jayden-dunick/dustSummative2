console.log("Hello World!");

function toggleMenu() {
    var element = document.getElementById('myMenu');
    element.classList.toggle('menuToggled');
}

function toggleDrop() {
    document.getElementById('eventDropDown').classList.toggle('show');
}

window.onclick = function (event) {
    if (!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName('dropDownContent');
        var i;
        for (i = 0; i < dropDowns.length; i++) {
            var openDropdown = dropDowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const carouselSlide = document.querySelector('.carouselSlide');
const carouselImages = document.querySelectorAll('.carouselSlide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
