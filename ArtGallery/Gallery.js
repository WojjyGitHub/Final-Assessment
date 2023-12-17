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

// Close sidebar when clicking outside navbar and sidebar
document.addEventListener('click', function (event) {
    const isClickInsideNavbar = event.target.closest('nav');
    const isClickInsideSidebar = event.target.closest('.sidebar');

    // If the click is not inside the navbar and sidebar, close the sidebar
    if (!isClickInsideNavbar && !isClickInsideSidebar) {
        sideBar.classList.remove('active');
    }
});

// Prevent closing sidebar when clicking on links inside the sidebar
document.querySelector('.sidebar').addEventListener('click', function (event) {
    const isClickInsideLink = event.target.closest('a');
    
    // Prevent closing the sidebar if the click is inside a link
    if (isClickInsideLink) {
        event.stopPropagation();
    }
});

//From W3Schools with some modification from me

const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
const captionText = document.querySelector('.caption');
const galleryImg = document.querySelectorAll('.gallery img')

// Function to check if the sidebar is active
function isSidebarActive() {
    return sideBar.classList.contains('active');
}

// Initiate a for loop starting with 0 and loop through galleryImg one at a time
for (let i = 0; i < galleryImg.length; i++) {
    // Listen for a click on an image while looping through the Img array
    galleryImg[i].addEventListener('click', function (event) {
        // Check if teh window width is greater than 470px
        if (window.innerWidth > 470) {
        // If the sidebar is active, close it and prevent the modal from opening
            if (isSidebarActive()) {
                sideBar.classList.remove('active');
                event.stopPropagation();
            } else {
                // If the sidebar is not active, open the modal
                modal.style.display = 'block';
                modalImg.src = this.src;
            }
        }
    });
}

// Get the <span> element that closes the modal
const span = document.querySelector('.close')

// When the user clicks on <span> (x), close the modal and change the color of footer text back to original
span.onclick = function() { 
  modal.style.display = 'none';
  footerText.style.color = '#e1e0e0';
}