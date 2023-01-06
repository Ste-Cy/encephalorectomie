/*****  CONST ******/

const catalog = [
  ["Expircuzépram 200mg", 20.99], //ref1
  ["Expircuzépram 400mg", 27.99], //ref2
  ["Expircuzépram Flash", 24.49], //ref3
  ["Expircuzépram Kids", 20.99], // ref4
];

const quantRef = catalog.length; // nombre de références

const shipping = 7.2;

/******  FU8NCTIONS ******/

/* stocke la ref et la quantité ajouté au panier */
function setRef(ref, quant) {
  let value = localStorage.getItem(ref); // on récupère la valeur en cours
  if (value != null) {
    value = Number(value);
  } else {
    value = 0;
  }
  value += Number(quant); // on ajoute la quantité
  localStorage.setItem(ref, value); // on stocke la nouvelle valeur
}

/* stocke le nombre de produits ajouté au panier */
function setTotalItems() {
  let total = 0;
  for (let i = 1; i <= quantRef; i++) {
    let value = localStorage.getItem(`ref${i}`);
    if (value != null) {
      value = Number(value);
      total += value;
    }
  }
  localStorage.setItem("TOTAL_ITEMS", total);
}
/* stocke le motant total du panier */
function setTotalPrice() {
  let total = 0;
  for (let i = 1; i <= quantRef; i++) {
    let value = localStorage.getItem(`ref${i}`);
    if (value != null) {
      value = Number(value);
    } else {
      value = 0;
    }
    let price = catalog[i - 1][1];
    total += price * value;
  }
  localStorage.setItem("TOTAL_PRICE", total.toFixed(2));
}

/* recupère les quantités pour chaque ref*/
function getData() {
  let data = [];
  for (let i = 1; i <= quantRef; i++) {
    let ref = localStorage.getItem(`ref${i}`);
    if (ref != null) {
      data.push(Number(ref));
    } else {
      data.push(0);
    }
  }
  return data;
  // data = [0, 1, 3, 0];
}

/* COnstruit les données du panier à afficher */
function getBasket() {
  let basket = []; /*Nom du produit - Quantité - prix - prix total */
  let data = getData();
  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      basket.push([
        catalog[i][0],
        catalog[i][1].toFixed(2) + " €",
        data[i],
        Number(catalog[i][1] * data[i]).toFixed(2) + " €",
      ]);
    }
  }
  return basket;
}

/* Affiche le panier */
function displayBasket() {
  // construction du tableau
  let tab = document.getElementById("tab-data");
  let basket = getBasket();
  for (let i = 0; i < basket.length; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < basket[i].length; j++) {
      let td = document.createElement("td");
      let content = document.createTextNode(basket[i][j]);
      td.appendChild(content);
      tr.appendChild(td);
    }
    tab.appendChild(tr);
  }

  // Affichage total
  let total = Number(localStorage.getItem("TOTAL_PRICE"));
  let orderSub = document.getElementById("order-subtotal").firstElementChild;
  orderSub.textContent = total.toFixed(2) + " €";
  let orderShipping =
    document.getElementById("order-shipping").firstElementChild;
  orderShipping.textContent = shipping.toFixed(2) + " €";
  let order = document.getElementById("order-total").firstElementChild;
  order.textContent = (total + shipping).toFixed(2) + " €";
}

/* pour afficher les infos dans la barre de menu */
function displayInfosBasket() {
  let infosPrice = document.getElementById("basket-price");
  let infosTotal = document.getElementById("basket-items");
  if (infosPrice && infosTotal) {
    infosPrice.textContent = (localStorage.getItem("TOTAL_PRICE") || 0) + " €";
    infosTotal.textContent =
      (localStorage.getItem("TOTAL_ITEMS") || 0) + " article(s)";
  }
}

/* Test si le panier contient des produits */
function hasItems() {
  let total = localStorage.getItem("TOTAL_ITEMS");
  if (total != null) {
    total = Number(total);
  } else {
    total = 0;
  }
  return total;
}

/* ajout au panier */
function addBasket(e) {
  setTotalItems();
  setTotalPrice();
  displayInfosBasket();
  let popup = document.getElementById("basket-popup");
  popup.showModal();
  e.stopPropagation();
}

/* supprimer le panier */
function deleteBasket() {
  localStorage.clear();
}

/****** Exc ******/



/* affichage info panier */
displayInfosBasket();

/* affichage panier */
let basket = document.getElementById("basket");
let basketEmpty = document.getElementById("basket-empty");

if (basket && basketEmpty) {
  if (hasItems()) {
    basket.removeAttribute("hidden");
    basketEmpty.setAttribute("hidden", "");
    displayBasket();
  } else {
    basketEmpty.removeAttribute("hidden");
    basket.setAttribute("hidden", "");
  }
}

/******  EVENTS ******/

/* Ajout panier */

for (let i = 1; i <= quantRef; i++) {
  let ref = document.getElementById(`ref${i}`);
  if (ref) {
    ref.addEventListener("click", function (e) {
      let quant = document.getElementById(`ref${i}-quant`).value;
      setRef(`ref${i}`, quant);
      addBasket(e);
    });
  }
}

/* CODE HONTEUX EN SONVENIR ;-) 
let ref1 = document.getElementById('ref1');
let ref2 = document.getElementById('ref2');
let ref3 = document.getElementById('ref3');
let ref4 = document.getElementById('ref4');

if (ref1) {
    ref1.addEventListener('click', function (e) {
        let quant = document.getElementById('ref1-quant').value;
        setRef('ref1', quant);
        addBasket(e);
    });
}

if (ref2) {
    ref2.addEventListener('click', function (e) {
        let quant = document.getElementById('ref2-quant').value;
        setRef('ref2', quant);
        addBasket(e);
    });
}

if (ref3) {
    ref3.addEventListener('click', function (e) {
        let quant = document.getElementById('ref3-quant').value;
        setRef('ref3', quant);
        addBasket(e);
    });
}

if (ref4) {
    ref4.addEventListener('click', function (e) {
        let quant = document.getElementById('ref4-quant').value;
        setRef('ref4', quant);
        addBasket(e);
    });
}

*/

/* fermeture modale */

let closeButton = document.getElementById("backet-popup-close");
if (closeButton) {
  let popup = document.getElementById("basket-popup");
  closeButton.addEventListener("click", function () {
    popup.close();
  });
  let body = document.getElementsByTagName("body");
  body[0].addEventListener("click", function () {
    popup.close();
  });
}

/* suppression du panier */
let deleteBasketId = document.getElementById("delete-basket");
if (deleteBasketId) {
    deleteBasketId.addEventListener("click", function () {
    let result = confirm(
      'voulez-vous vraiment supprimer votre panier ? Cliquez sur "OK" pour supprimer. Sinon cliquez sur "annuler"'
    );
    if (result) {
      deleteBasket();
      let basket = document.getElementById("basket");
      let basketEmpty = document.getElementById("basket-empty");
      basketEmpty.removeAttribute("hidden");
      basket.setAttribute("hidden", "");
      location.reload();
    }
  });
}