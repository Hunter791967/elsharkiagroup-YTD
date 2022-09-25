//***********************************************************************************************************************/

let position_relative = document.querySelector(".position-relative");
let fixed_arrowFive = document.querySelector(".fixed-arrow");
console.log(position_relative);
console.log(fixed_arrowFive);
window.onscroll = function () {
  if (window.scrollY >= position_relative.offsetTop - 1300) {
    fixed_arrowFive.style.display = "flex";
    fixed_arrowFive.addEventListener("click", (eventSeven) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    fixed_arrowFive.style.display = "none";
  }
};
