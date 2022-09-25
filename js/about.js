//****************************************************************************************************************/
// This Function is to control the scroll to top button *//

let section_two = document.querySelector(".section_two");
let fixed_arrowOne = document.querySelector(".fixed-arrow");
console.log(section_two);
console.log(fixed_arrowOne);
window.onscroll = function () {
  if (window.scrollY >= section_two.offsetTop - 500) {
    fixed_arrowOne.style.display = "flex";
    fixed_arrowOne.addEventListener("click", (eventSeven) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    fixed_arrowOne.style.display = "none";
  }
};

//*************************************************************************************************************/

let position_relativeOne = document.querySelector(".position-relative");
let fixed_arrowTwo = document.querySelector(".fixed-arrow");
window.onscroll = function () {
  if (window.scrollY >= position_relativeOne.offsetTop - 1400) {
    fixed_arrowTwo.style.display = "flex";
    fixed_arrowTwo.addEventListener("click", (eventSeven) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    fixed_arrowTwo.style.display = "none";
  }
};
