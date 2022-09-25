//*******************************************************************************************************************/

let container = document.querySelector(".container");
let fixed_arrowThree = document.querySelector(".fixed-arrow");
console.log(container);
console.log(fixed_arrowThree);
window.onscroll = function () {
  if (window.scrollY >= container.offsetTop - 1200) {
    fixed_arrowThree.style.display = "flex";
    fixed_arrowThree.addEventListener("click", (eventSeven) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    fixed_arrowThree.style.display = "none";
  }
};
//**********************************************************************************************************************/
