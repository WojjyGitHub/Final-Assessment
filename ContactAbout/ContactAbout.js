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

// Find the wrapper element
const wrapper = document.querySelector('.wrapper');

// Listen for clicks on the wrapper
wrapper.addEventListener('click', function(event) {
    // Check if the clicked element is not inside the sidebar
    if (!event.target.closest('.sidebar') && sideBar.classList.contains('active')) {
        // Close the sidebar by removing the 'active' class
        sideBar.classList.remove('active');
    }
})