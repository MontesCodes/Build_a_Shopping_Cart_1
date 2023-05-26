'use strict';
let shop = document.getElementById('shop');

let shopItemsData = [
  {
    id: 'idName1',
    name: 'Casual Shirt',
    price: 45,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    img: '/images/img-1.jpg',
  },
  {
    id: 'idName2',
    name: 'Office Shirt',
    price: 100,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero aliquid doloremque minus..',
    img: '/images/img-2.jpg',
  },
  {
    id: 'idName3',
    name: 'T Shirt',
    price: 25,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!',
    img: '/images/img-3.jpg',
  },
  {
    id: 'idName4',
    name: 'Mens Suit',
    price: 400,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, pariatur.',
    img: '/images/img-4.jpg',
  },
];

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map(x => {
      let { id, name, price, desc, img } = x;
      return `
  <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement(id)" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">0</div>
              <i onclick="increment(id)" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(''));
};

generateShop();

let increment = id => {
  let selectedItem = id;
  let search = basket.find(x => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
};
let decrement = id => {
  let selectedItem = id;
  let search = basket.find(x => x.id === selectedItem.id);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
};
let update = () => {};
