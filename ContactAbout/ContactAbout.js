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
xIconBtn.addEventListener('click', function (event) {
    // 2a. Prevent the default behavior of the anchor link
    event.preventDefault();
    //2b. Toggle the 'active' class on the sidebar
    sideBar.classList.toggle('active')
})

// Close sidebar when clicking outside
window.addEventListener('click', function (event) {
    // Check if the clicked element is not inside the sidebar or menu icon
    if (!event.target.closest('.sidebar') && !event.target.closest('#menu-icon') && sideBar.classList.contains('active')) {
        sideBar.classList.remove('active');
    }
});