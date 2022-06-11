// defaultItems()
// .then( data => {
      let carts = document.querySelectorAll(".cart-button");

      console.log(carts)

      for (let i = 0; i < carts.length; i++){
         carts[i].addEventListener("click", (e) => {
            console.log(i, e.target, data[i])

            addItemToCart(defaultItems[i])
         });


      }

function addItemToCart (item){
   const cartItem = document.createElement('div')
      cartItem.className = 'cart-item'
      cartItem.innerHTML = `
         <img src="${item.image}">
         <div>
            <p>${item.name}</p>
            <p><span class="item-count">${item.inCart}</span> x ₦${item.price}</p>
         </div>
      `

      const cartList = document.querySelector('#cart-list')
      cartList.appendChild(cartItem)
}
