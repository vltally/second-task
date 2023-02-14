const header = document.querySelector('.header');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock');
        let children = header.children;
        console.log(children);
        for(let i=0; i<children.length; i++){
            children[i].classList.toggle('_active');
        }
        iconMenu.classList.toggle('_active');
    });
}