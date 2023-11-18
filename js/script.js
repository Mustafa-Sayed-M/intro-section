// ## Get Elements:
// # Overlay
const overlay = document.querySelector('.overlay');
// # Menu
const menu = document.querySelector('header nav .links');
// ## Functions:
// # Function to toggle menu
function toggleMenu() {
    overlay.classList.toggle('active');
    menu.classList.toggle('active');
}