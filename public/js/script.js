/* navbar */

let navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 80) {
      navbar.className = "navbar reduce";
    } else {
      navbar.className = "navbar";
    }
  });
}

/* Menu toogle */

let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("menu");
let main = document.getElementsByTagName("main")[0];

function closeMenu() {
  menu.className = "menu close";
  menuToggle.className = "icon-menu";
  main.style = null;
}

if (menuToggle) {
  menuToggle.addEventListener("click", function (e) {
    if (menu.className === "menu close") {
      menu.className = "menu";
      menuToggle.className = "icon-menu close";
      main.style.opacity = ".5";
      main.style.filter = "grayscale(100%)";
    } else {
      closeMenu();
    }
    e.stopPropagation();
  });
}

/* Message pour Kevin : oui je sais j'aurais du utiliser classList ;-) Je corrigerais ça */

let body = document.getElementsByTagName("body");
body[0].addEventListener("click", function () {
  closeMenu();
});

window.addEventListener("resize", function () {
  closeMenu();
});

/*TESTOMINAL SLIDESHOW */

let testimonialPrev = document.getElementById("testimonial-prev");
let testimonialNext = document.getElementById("testimonial-next");

if (testimonialPrev && testimonialNext) {
  testimonialPrev.addEventListener("click", function () {
    let testimonialActive = document.getElementsByClassName(
      "testimonial-display"
    )[0];
    testimonialActive.removeAttribute("class");
    switch (testimonialActive.id) {
      case "testimonial-1":
        document
          .getElementById("testimonial-3")
          .setAttribute("class", "testimonial-display");
        break;
      case "testimonial-2":
        document
          .getElementById("testimonial-1")
          .setAttribute("class", "testimonial-display");
        break;
      case "testimonial-3":
        document
          .getElementById("testimonial-2")
          .setAttribute("class", "testimonial-display");
        break;
    }
  });
  testimonialNext.addEventListener("click", function () {
    let testimonialActive = document.getElementsByClassName(
      "testimonial-display"
    )[0];
    testimonialActive.removeAttribute("class");
    switch (testimonialActive.id) {
      case "testimonial-1":
        document
          .getElementById("testimonial-2")
          .setAttribute("class", "testimonial-display");
        break;
      case "testimonial-2":
        document
          .getElementById("testimonial-3")
          .setAttribute("class", "testimonial-display");
        break;
      case "testimonial-3":
        document
          .getElementById("testimonial-1")
          .setAttribute("class", "testimonial-display");
        break;
    }
  });
}

/* PRODUCT SLIDESHOW */

let productPrev = document.getElementById("product-prev");
let productNext = document.getElementById("product-next");

if (productPrev && productNext) {
  productPrev.addEventListener("click", function () {
    let productActive = document.getElementsByClassName("product-display")[0];
    productActive.removeAttribute("class");
    switch (productActive.id) {
      case "product-1":
        document
          .getElementById("product-4")
          .setAttribute("class", "product-display");
        break;
      case "product-2":
        document
          .getElementById("product-1")
          .setAttribute("class", "product-display");
        break;
      case "product-3":
        document
          .getElementById("product-2")
          .setAttribute("class", "product-display");
        break;
      case "product-4":
        document
          .getElementById("product-3")
          .setAttribute("class", "product-display");
        break;
    }
  });
  productNext.addEventListener("click", function () {
    let productActive = document.getElementsByClassName("product-display")[0];
    productActive.removeAttribute("class");
    switch (productActive.id) {
      case "product-1":
        document
          .getElementById("product-2")
          .setAttribute("class", "product-display");
        break;
      case "product-2":
        document
          .getElementById("product-3")
          .setAttribute("class", "product-display");
        break;
      case "product-3":
        document
          .getElementById("product-4")
          .setAttribute("class", "product-display");
        break;
      case "product-4":
        document
          .getElementById("product-1")
          .setAttribute("class", "product-display");
        break;
    }
  });
}

/* message pour Kevin : Oui je sais, ça aussi ça sera corrigé ;-) */
