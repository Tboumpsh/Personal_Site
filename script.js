
// When the user scrolls down 

window.addEventListener('scroll', function() {
    var menu = document.querySelector('#navbar');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
        menu.classList.add('box-shadow');
    } else {
        menu.classList.remove('box-shadow');
    }
});