/* navbar */

// Récupère l'élément avec l'id "navbar"
let navbar = document.getElementById("navbar");

// Vérifie si l'élément existe
if (navbar) {
  // Ajoute un écouteur d'évènement "scroll" à la fenêtre
  window.addEventListener("scroll", () => {
    // Si la fenêtre dépasse 80px, ajoute la classe "navbar reduce" à l'élément navbar, sinon ajoute la classe "navbar" 
    navbar.className = window.pageYOffset >= 80 ? "navbar reduce" : "navbar";
  });
}

/* Menu toogle */

// Récupère l'élément avec l'id "menu-toggle"
let menuToggle = document.getElementById("menu-toggle");
// Récupère l'élément avec l'id "menu"
let menu = document.getElementById("menu");
// Récupère l'élément <main>
let main = document.querySelector("main");

// Fonction pour fermer le menu
function closeMenu() {
  // Ajoute la classe "close" à l'élément menu
  menu.className = "menu close";
  // Ajoute la classe "icon-menu" à l'élément menuToggle
  menuToggle.className = "icon-menu";
  // Supprime le style de l'élément main
  main.style = null;
}

// Vérifie si l'élément menuToggle existe
if (menuToggle) {
  // Ajoute un écouteur d'évènement "click" à l'élément menuToggle
  menuToggle.addEventListener("click", (e) => {
    // Si la classe de l'élément menu est "close"
    if (menu.className === "menu close") {
      // Change la classe de l'élément menu en "menu"
      menu.className = "menu";
      // Change la classe de l'élément menuToggle en "icon-menu close"
      menuToggle.className = "icon-menu close";
      // Change l'opacité et le filtre grayscale de l'élément main
      main.style.opacity = ".5"; 
      main.style.filter = "grayscale(100%)";
    } else {
      // Sinon, ferme le menu
      closeMenu();
    }
    // Empêche la propagation de l'évènement
    e.stopPropagation();
  });
}

// Ajoute un écouteur d'évènement "click" à l'élément <body> pour fermer le menu si on clique en dehors
document.querySelector("body").addEventListener("click", closeMenu);
// Ajoute un écouteur d'évènement "resize" à la fenêtre pour fermer le menu si on redimensionne la fenêtre
window.addEventListener("resize", closeMenu);

/*TESTOMINAL SLIDESHOW & PRODUCT SLIDESHOW */

// Récupère les éléments avec un id qui se termine par "-prev"
let prevButton = document.querySelectorAll('[id$="-prev"]');
// Récupère les éléments avec un id qui se termine par "-next"
let nextButton = document.querySelectorAll('[id$="-next"]');
// Récupère les éléments avec la classe "testimonial-display" ou "product-display"
let activeElement = document.querySelectorAll('.testimonial-display, .product-display');

// Fonction pour gérer le slideshow
function handleSlideshow(prevButton, nextButton, activeElement) {
  // Ajoute un écouteur d'évènement "click" au bouton précédent
  prevButton.addEventListener("click", () => {
    // Vérifie l'id de l'élément actif et change la classe de l'élément correspondant
    switch (activeElement.id) {
      case "testimonial-1":
        document.getElementById("testimonial-3").className = "testimonial-display";
        break;
      case "testimonial-2":
        document.getElementById("testimonial-1").className = "testimonial-display";
        break;
      case "testimonial-3":
        document.getElementById("testimonial-2").className = "testimonial-display";
        break;
      case "product-1":
        document.getElementById("product-4").className = "product-display";
        break;
      case "product-2":
        document.getElementById("product-1").className = "product-display";
        break;
      case "product-3":
        document.getElementById("product-2").className = "product-display";
        break;
      case "product-4":
        document.getElementById("product-3").className = "product-display";
        break;
    }
    // Supprime la classe de l'élément actif
    activeElement.removeAttribute("class");
  });
  // Ajoute un écouteur d'évènement "click" au bouton suivant
  nextButton.addEventListener("click", () => {
    // Vérifie l'id de l'élément actif et change la classe de l'élément correspondant
    switch (activeElement.id) {
      case "testimonial-1":
        document.getElementById("testimonial-2").className = "testimonial-display";
        break;
      case "testimonial-2":
        document.getElementById("testimonial-3").className = "testimonial-display";
        break;
      case "testimonial-3":
        document.getElementById("testimonial-1").className = "testimonial-display";
        break;
      case "product-1":
        document.getElementById("product-2").className = "product-display";
        break;
      case "product-2":
        document.getElementById("product-3").className = "product-display";
        break;
      case "product-3":
        document.getElementById("product-4").className = "product-display";
        break;
      case "product-4":
        document.getElementById("product-1").className = "product-display";
        break;
    }
    // Supprime la classe de l'élément actif
    activeElement.removeAttribute("class");
  });
}

// Vérifie si les éléments prevButton et nextButton existent
if (prevButton && nextButton) {
  // Pour chaque élément prevButton, appelle la fonction handleSlideshow avec les arguments correspondants
  prevButton.forEach((button) => handleSlideshow(button, nextButton, activeElement));
  // Pour chaque élément nextButton, appelle la fonction handleSlideshow avec les arguments correspondants
  nextButton.forEach((button) => handleSlideshow(prevButton, button, activeElement));
}
