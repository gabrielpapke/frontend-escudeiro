
const carousels = document.querySelectorAll('.carousel')
const thumb_width = 360;

function setWidth (element) {
    const list = element.querySelector('.carousel__list');
    const number_items = list.children.length;
    list.style.width = `${thumb_width * number_items}px`
}

carousels.forEach(item => {
    setWidth(item)
})

function getTranslateX(element) {
    var style = window.getComputedStyle(element);
    var matrix = new WebKitCSSMatrix(style.transform);

    return matrix.m41;
}

function next(event) {
    const carousel = event.parentNode;
    const list = carousel.querySelector('.carousel__list');
    const currentTranslateX = getTranslateX(list)
    const maxTranslate = Math.abs((list.children.length * thumb_width) - window.outerWidth);

    if (currentTranslateX === -maxTranslate) return
    
    let newTranslateX = currentTranslateX - (thumb_width * 2);

    if (newTranslateX < -maxTranslate) newTranslateX = -maxTranslate;

    list.style.transform = "translateX(" + (newTranslateX) + "px)"
}

function prev(event) {
    const carousel = event.parentNode;
    const list = carousel.querySelector('.carousel__list');
    const currentTranslateX = getTranslateX(list)
    
    if (currentTranslateX === 0) return

    let newTranslateX = currentTranslateX + (thumb_width * 2);

    if (newTranslateX > 0) newTranslateX = 0;

    list.style.transform = "translateX(" + (newTranslateX) + "px)"
}

const scrolledClass = 'scrolled';
window.onscroll = function () {
    const doc = document.documentElement;
    const scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    const body = document.body;

    if(scrollTop > 100) {
        if(!body.classList.contains(scrolledClass)) {
            return body.classList.add(scrolledClass);
        }
    } else {
        if(body.classList.contains(scrolledClass)) {
            return body.classList.remove(scrolledClass);
        }
    }
} 