//*************************************************************************************************************/

let position_relativeOne = document.querySelector(".position-relative");
let fixed_arrowFour = document.querySelector(".fixed-arrow");
console.log(fixed_arrowFour);
window.onscroll = function () {
  if (window.scrollY >= position_relativeOne.offsetTop - 600) {
    fixed_arrowFour.style.display = "flex";
    fixed_arrowFour.addEventListener("click", (eventSeven) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    fixed_arrowFour.style.display = "none";
  }
};
