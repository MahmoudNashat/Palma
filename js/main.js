let mainColor = localStorage.getItem('color-option')
if (mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', mainColor)

    document.querySelectorAll('.color-box ul li').forEach(element => {
        element.classList.remove('active')
        if (element.dataset.color == mainColor) {
            element.classList.add('active')
        }
    })
}
// toggle class fa spin to gear icon
document.querySelector('.settings-box .toggle .gear').onclick = function () {
    this.classList.toggle('fa-spin')
// toggle class open to main settings box
document.querySelector('.settings-box').classList.toggle('open')
}
// Switch color
const colorLi = document.querySelectorAll('.color-box ul li');
colorLi.forEach(li => {
    li.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem('color-option', e.target.dataset.color)
        activeFunction(e)
    })
})
// Our skills animation 
let skills = document.querySelector('.skills');
window.onscroll = function() {
    let skillsOffsetTop = skills.offsetTop,
    skillsOuterHeight = skills.offsetHeight,
    windowHeight = this.innerHeight,
    windowScrollTop = this.pageYOffset;
    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.prog
        })
    }  
} 
// Create popup to images gallery
let galleryImgs = document.querySelectorAll('.gallery .imgs-box img');
galleryImgs.forEach(img => {
    img.addEventListener('click' ,(e) => {
        popupOverlay = document.createElement('div'),
        popupBox = document.createElement('div'),
        popupImg = document.createElement('img'),
        popupCloseButton = document.createElement('span'),
        closeButtonText = document.createTextNode('X');;
        popupOverlay.className = 'popup-overlay';
        document.body.appendChild(popupOverlay);
        popupBox.className = 'popup-box';
        popupBox.appendChild(popupImg);
        popupImg.src = img.src;
        document.body.appendChild(popupBox);
        popupCloseButton.className = 'close-button'
        popupCloseButton.appendChild(closeButtonText);
        popupBox.appendChild(popupCloseButton);
    })
})
// Add event click to the close button
document.addEventListener('click', (e) => {
    if (e.target.className === 'close-button') {
        e.target.parentNode.remove();
        document.querySelector('.popup-overlay').remove();

    }
})
// Add event click to overlay
document.addEventListener('click', (e) => {
    if (e.target.className === 'popup-overlay') {
        document.querySelector('.popup-box').remove();
        document.querySelector('.popup-overlay').remove();

    }
})
// Add enent click to navbar links
let navbarLinks = document.querySelectorAll('.nav-link');
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth',
        })
        document.querySelector('.navbar-collapse').classList.toggle('show')
    })
})
// Create function to active classes
function activeFunction(event) {
    event.target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active')
    })
    event.target.classList.add('active')
}
// Scroll to top button 
$(window).scroll(function() {
    var scrollTop = $('.scroll-top');
    $(this).scrollTop() >= 1000 ? scrollTop.fadeIn() :  scrollTop.fadeOut(200)
});
// Click on button function
$('.scroll-top').click(function() {
$('html,body').animate({
    scrollTop: 0
})
})
// Create loading screen
window.onload = function () {
    document.querySelector('.loading-screen').remove()
}