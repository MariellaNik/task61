import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  // Select the price element with the .hot class
const hotPrice = document.querySelectorAll('.hot .price');

// Create a new text node with the fire emoji
const fireEmoji = document.createTextNode('🔥');

// Append the fire emoji to the hot price element
hotPrice.appendChild(fireEmoji);

});
