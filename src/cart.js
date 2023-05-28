'use strict';
let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem('dataStorage')) || [];

let calculation = () => {
  let cartIcon = document.getElementById('cartAmount');
  cartIcon.innerHTML = basket.map(m => m.item).reduce((e, s) => e + s, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map(m => {
        let { id, item } = m;
        let search = shopItemsData.find(y => y.id === id) || [];
        return `
      <div class="cart-item">

      <img width="100" src=${search.img} alt="" />
      <div class="details">

      <div class="title-price-x">
      <h4 class="title-price">
      <p>${search.name}</p>
      <p class="cart-item-price">$ ${search.price}</p>
      </h4>
      <i class="bi bi-x-lg"></i>
      </div>
      
      <div class="cart-buttons"></div>
      <h3></h3>
      </div>
      </div>`;
      })
      .join(''));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();
