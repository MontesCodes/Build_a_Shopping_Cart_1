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

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map(x => {
      return `
  <div class="item">
        <img width="220" src="${x.img}" alt="" />
        <div class="details">
          <h3>${x.name}</h3>
          <p>${x.desc}</p>
          <div class="price-quantity">
            <h2>$ ${x.price}</h2>
            <div class="buttons">
              <i class="bi bi-dash-lg"></i>
              <div class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(''));
};

generateShop();
