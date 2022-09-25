// This fucntion is for toggle nav menu for mobile
const burgerToggle = document.querySelector('.burger-toggle');
const mobileMenu = document.querySelector('.mobile-menue');
burgerToggle.addEventListener('click' , () =>{
  mobileMenu.classList.toggle('menu-open');
  burgerToggle.classList.toggle('burger-toggle-clicked')
})


// This fucntion is for open and close sub menu
let selects = document.querySelectorAll(".select");

selects.forEach((select) => {
  select.addEventListener("click", function (e) {
    let sibling = select.nextElementSibling;

    // Nested loop for removing caret-rotate class from all and set sub Menu display none
    selects.forEach((item) => {
      item.nextElementSibling.style.display = "none";
      //   remove class "caret-rotate" except for the currently clicked item
      item != select && item.querySelector('.caret').classList.remove("caret-rotate")
    });
    //then toggle the "caret-rotate" class of clicked item
    select.querySelector('.caret').classList.toggle("caret-rotate");
    if (select.querySelector('.caret').classList.contains("caret-rotate")) {
      sibling.style.display = "block"
    } else {
      select.querySelector('.caret').classList.remove('caret-rotate');
    }
  });
});