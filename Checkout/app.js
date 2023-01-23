class item {
  constructor(title, image, ilkdeger, sondeger, adet) {
    this.title = title;
    this.image = image;
    this.ilkdeğer = ilkdeger;
    this.sondeger = sondeger;
    this.adet = adet;
  }
  reduce() {
    this.adet--;
  }
  increse() {
    this.adet++;
  }
}

const itemList = [
  new item("vintage Backbag", "photo1.png", 26.98, 34.99, 1),
  new item("Levi Shoes", "photo2.png", 45.99, 54.99, 1),
  new item("Antiqeu Clock", "photo3.jpg", 74.99, 94.99, 1),
];
function generate() {
  const prdPanel = document.querySelector("#box");
  prdPanel.innerHTML = "";

  for (let i = 0; i < itemList.length; i++) {
    const item = itemList[i];
    prdPanel.innerHTML += `<div class="product">
  <img src="./images/${item.image}" alt="" />
  <div class="elements">
    <p>${item.title}</p>
    <p><strong>${item.ilkdeğer}</strong> <del>${item.sondeger}</del></p>
    <div class="quantity">
      <button onClick="reduce(${i})">
        <i class="fas fa-minus">-</i>
      </button>
      <p id="product-removal">${item.adet}</p>
      <button onClick="increase(${i})">
        <i class="fas fa-plus">+</i>
      </button>
    </div>
    <div>
      <button onClick="remove(${i})" class="btn-remove">remove</button>
    </div>

    <div>
      <span>Product Total :</span>
      <span id="bag-product" class="product-total">${
        Math.round(item.adet * item.ilkdeğer * 100) / 100
      }</span>
    </div>
  </div>
</div>`;
  }

  prdPanel.innerHTML += ` <div> 
  <div class="al"><p  >subtotal</p>
  <p>146.96</p></div>
  

<div class="al">
  <p>tax(%18)</p>
  <p>146.96</p>
</div>
<div class="al">
  <p>Shipping</p>
  <p>15.00</p>
</div>
<div class="al">
  <p>total</p>
  <p>188.91</p>
</div></div>  
  `;
}

generate();

function reduce(index) {
  itemList[index].reduce();
  generate();
}
function increase(index) {
  itemList[index].increase();
  generate();
}
function remove(index) {
  itemList[index].splice(index, 1);
  generate();
}
