import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
});
 const prices = document.querySelectorAll(".price");

prices.forEach((price) => {
  if (price.classList.contains("hot")) {
    const fireEmoji = document.createTextNode("🔥");
    price.appendChild(fireEmoji);
  }
});

