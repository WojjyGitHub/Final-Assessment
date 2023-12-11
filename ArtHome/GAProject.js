//Menu Icon
//1. Find the menu icon
const menuIconBtn = document.querySelector('#menu-icon')

//2. Find the sidebar
const sideBar = document.querySelector('.sidebar')

//3. Listen for users clicking the icon
menuIconBtn.addEventListener('click', function () {
    //3a. Toggle the 'active' class on the sidebar
    sideBar.classList.toggle('active')
})

//X (close) Icon
//1. Find the X icon
const xIconBtn = document.querySelector('#x-icon')

//2. Listen for users clicking the icon
xIconBtn.addEventListener('click', function () {
    //2a. Toggle the 'active' class on the sidebar
    sideBar.classList.toggle('active')
})

//To trigger the transform when the 'Explore' text is hovered over.
const exploreTopLink = document.querySelector('.explore-top-link');
const exploreMidLink = document.querySelector('.explore-mid-link');
const exploreBotLink = document.querySelector('.explore-bot-link');
const contactLink = document.querySelector('.contact-h-link');

const exploreTopImg = document.querySelector('.explore-top-img');
const exploreMidImg = document.querySelector('.explore-mid-img');
const exploreBotImg = document.querySelector('.explore-bot-img');
const contactImg = document.querySelector('.contact-h-img');

exploreTopLink.addEventListener('mouseover', function() {
    exploreTopImg.classList.add('hover-over')
})
exploreTopLink.addEventListener('mouseout', function() {
    exploreTopImg.classList.remove('hover-over')
})

exploreMidLink.addEventListener('mouseover', function() {
    exploreMidImg.classList.add('hover-over')
})
exploreMidLink.addEventListener('mouseout', function() {
    exploreMidImg.classList.remove('hover-over')
})

exploreBotLink.addEventListener('mouseover', function() {
    exploreBotImg.classList.add('hover-over')
})
exploreBotLink.addEventListener('mouseout', function() {
    exploreBotImg.classList.remove('hover-over')
})

contactLink.addEventListener('mouseover', function() {
    contactImg.classList.add('hover-over-contact')
})
contactLink.addEventListener('mouseout', function() {
    contactImg.classList.remove('hover-over-contact')
})



