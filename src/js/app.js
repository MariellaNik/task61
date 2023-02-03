import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  // Select the price element with the .hot class
let hotPrice = document.querySelectorAll('.price');
hotPrice.textContent = hotPrice.textContent + '🔥';

});
