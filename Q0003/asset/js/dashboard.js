function showContent(content) {
    // Hide all content sections
    var contents = document.querySelectorAll('.content-section');
    contents.forEach(function (el) {
        el.classList.remove('active');
    });

    // Show the selected content section
    document.getElementById(content).classList.add('active');

    // Update active menu item
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function (el) {
        el.classList.remove('active');
    });
    document.querySelector('.menu-item[data-content="' + content + '"]').classList.add('active');
}

// Modal functionality
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("showQRCodeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}