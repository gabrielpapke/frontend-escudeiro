

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