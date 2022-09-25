//********************************************************************************************************************/
//*********************************************************************************************************************/
let darkMode = sessionStorage.getItem("darkMode");
let divC = document.querySelectorAll(".dark_color");
let flCard = document.querySelectorAll(".flcard");

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeToggleMobile = document.querySelector("#dark-mode-toggle-mobile");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  divC.forEach((singlee) => {
    singlee.classList.add("other_darkmode");
  });
  flCard.forEach((o) => {
    o.classList.add("flcard_dark");
  });
  sessionStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  divC.forEach((singlee) => {
    singlee.classList.remove("other_darkmode");
  });
  flCard.forEach((o) => {
    o.classList.remove("flcard_dark");
  });
  sessionStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkModeToggle.classList.toggle("fa-sun");
  darkMode = sessionStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
darkModeToggleMobile .addEventListener("click", () => {
  darkModeToggleMobile .classList.toggle("fa-sun");
  darkMode = sessionStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


//****************************************************************************************************************/
// This Function is to control the scroll to top button *//

let ads_one = document.querySelector(".ads_one");
let fixed_arrow = document.querySelector(".fixed-arrow");
console.log(ads_one);
console.log(fixed_arrow);
window.onscroll = function () {
  if (window.scrollY >= ads_one.offsetTop - 500) {
    fixed_arrow.style.display = "flex";
    fixed_arrow.addEventListener("click", (eventSeven) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    fixed_arrow.style.display = "none";
  }
};

// //*************************************************************************************************************/
// //**This Function  */
const products = document.querySelectorAll(".product");

window.addEventListener("scroll", check_animation);

check_animation();

function check_animation() {
  const trigger = (window.innerHeight / 6) * 4;

  products.forEach((product) => {
    const top = product.getBoundingClientRect().top;

    if (trigger > top) {
      product.classList.add("show_content");
    } else {
      product.classList.remove("show_content");
    }
  });
}

//********************************************************************************************************************/
//*********************************************************************************************************************/
const services = document.querySelectorAll(".service");
console.log(services);
window.addEventListener("scroll", check_serAnimation);

check_serAnimation();

function check_serAnimation() {
  const triggerOne = (window.innerHeight / 6) * 4;

  services.forEach((service) => {
    const top = service.getBoundingClientRect().top;

    if (triggerOne > top) {
      service.classList.add("service_contents");
    } else {
      service.classList.remove("service_contents");
    }
  });
}
//*********************************************************************************************************************/
// This fucntion is for automatic slider using setinterval
let increment = 1;
setInterval(function () {
  document.getElementById("radio" + increment).checked = true;
  increment++;
  // console.log(increment);
  if (increment > 19) {
    increment = 1;
  }
}, 10000);

//*******************************************************************************************************************/
