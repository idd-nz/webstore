const product1 = {
  img: `img/bathbomb.jpg`,
  name: `Charcool`,
  item: `bathbomb`,
  descrip: `blend of charcoal and lemon oil`,
  price: `$12/20g`,
  quantity: `stock running low`

};

const product2 = {
  img: `img/bodylotion.jpg`,
  name: `Banana Body`,
  item: `body lotion`,
  descrip: `ultra fantastic, all natural skincare`,
  price: `$15/20g`,
  quantity: `in stock`

};

const product3 = {
  img: `img/bodywash1.jpg`,
  name: `Avowash`,
  item: `body wash`,
  descrip: `avocado & strawberry`,
  price: `$18/20g`,
  quantity: `in stock`

};

const product4 = {
  img: `img/bodywash2.jpg`,
  name: `Grapy Soapy`,
  item: `body wash`,
  descrip: `rich,fruity hydration`,
  price: `$20/20g`,
  quantity: `out of stock`

};

const product5 = {
  img: `img/bodywax.jpg`,
  name: `Tuty Fruity`,
  item: `body wax`,
  descrip: `smooth and silky finish`,
  price: `$20/20g`,
  quantity: `stock running low`

};

const product6 = {
  img: `img/handsoap.jpg`,
  name: `Handy Melon`,
  item: `hand soap`,
  descrip: `buttery softness`,
  price: `$10/20g`,
  quantity: `re-stocked`

};



function getProductAsHtmlString(product){

  return `<article class="product">
            <div><img src="${product.img}" alt="Product Pic"></div>
        
            <h3>${product.name}</h3>
            <h4>${product.item}</h4>
            <button type="button"><i class="material-icons">thumb_up</i></button>
            
            <p>${product.descrip}</p>
            <p style="text-align: center">${product.price}</p>
            <section>
              <div class="select">
              <button class="selectbtn">Select Size</button>
              <div class="selectopt">
                <a href="#">20g</a>
                <a href="#">40g</a>
                <a href="#">60g</a>
              <div>
              <div>
            </section>
            <div class="quantity-button">
              <input type="button" value="-" class="minus">
              <input type="quantity" value="1" class="input-text qty text" min="1" max="" name="quantity-button" step="1" inputmode="numeric">
              <input type="button" value="+" class="plus">
            </div>
            <p style="opacity: 40%"> ${product.quantity} </p>
            <div class="add">
              <button id="add to cart">Add to cart</button>
            </div>
            <div class="rate">
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star</i>
                <i class="material-icons">star_half</i>
                <i class="material-icons">star_border</i>
            </div>

           
          </article>`;
}

document.getElementById('products').innerHTML = getProductAsHtmlString(product1)
document.getElementById('products').innerHTML += getProductAsHtmlString(product2)
document.getElementById('products').innerHTML += getProductAsHtmlString(product3)
document.getElementById('products').innerHTML += getProductAsHtmlString(product4)
document.getElementById('products').innerHTML += getProductAsHtmlString(product5)
document.getElementById('products').innerHTML += getProductAsHtmlString(product6)