let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
};

//Modal
const ModalController = ({modal, btnOpen, btnClose}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;

        if (
            target === modalElem || 
            target.closest(btnClose) ||
            event.code === 'Escape'
            ) {

            modalElem.style.opacity = 0;

            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, 300);

            window.removeEventListener('keydown', closeModal)
        }
    }

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal)
    };

    buttonElems.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    modalElem.addEventListener('click', closeModal);
};

ModalController({
    modal: '.modal1',
    btnOpen: '.selection__button1',
    btnClose: '.modal__close'
});

ModalController({
    modal: '.modal2',
    btnOpen: '.selection__button2',
    btnClose: '.modal__close'
});

ModalController({
    modal: '.modal3',
    btnOpen: '.selection__button3',
    btnClose: '.modal__close'
});

ModalController({
    modal: '.modal4',
    btnOpen: '.selection__button4',
    btnClose: '.modal__close'
});

ModalController({
    modal: '.modal5',
    btnOpen: '.selection__button5',
    btnClose: '.modal__close'
});


//Scroll to Home
var NewHomeElement = document.getElementById("home");
var btntohome = document.querySelector(".btntohome");

function ScrollToHome(){
    NewHomeElement.scrollIntoView({display: "center", behavior: "smooth"});
};

btntohome.addEventListener('click', ScrollToHome);

//Scroll to Products
var NewProductElement = document.getElementById("new-product");
var btntoprod = document.querySelector(".btntoprod");
var btntoprod2 = document.querySelector('.btntoprod2')

function ScrollToProducts(){
    NewProductElement.scrollIntoView({display: "center", behavior: "smooth"});
};

btntoprod.addEventListener('click', ScrollToProducts);
btntoprod2.addEventListener('click', ScrollToProducts);

//Scroll to Blogs
var NewBlogElement = document.getElementById("blog");
var btntoblog = document.querySelector(".btntoblog");

function ScrollToBlog(){
    NewBlogElement.scrollIntoView({display: "center", behavior: "smooth"});
};

btntoblog.addEventListener('click', ScrollToBlog);
