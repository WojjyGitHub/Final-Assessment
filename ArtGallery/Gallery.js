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
    // 2a. Prevent the default behavior of the anchor link
    event.preventDefault();
    //2b. Toggle the 'active' class on the sidebar
    sideBar.classList.toggle('active')
})


//From W3Schools with some modification from me

const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
const captionText = document.querySelector('.caption');
const galleryImg = document.querySelectorAll('.gallery img')

// initiate a for loop starting with 0 and loop through galleryImg one at a time
for (let i = 0; i < galleryImg.length; i++) {
// listen for a click on an image while its looping through the Img array
    galleryImg[i].addEventListener('click', function () {
        // if a click is heard, change to display block
        modal.style.display = 'block';
        //put the clicked image into the modal = 'this' refers to the element that triggers the event. (The Img) - src is refering to the URL of Img
        modalImg.src = this.src;
    })
}

// Get the <span> element that closes the modal
const span = document.querySelector('.close')

// When the user clicks on <span> (x), close the modal and change the color of footer text back to original
span.onclick = function() { 
  modal.style.display = 'none';
  footerText.style.color = '#e1e0e0';
}

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