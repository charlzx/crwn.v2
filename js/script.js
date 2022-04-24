// // JUNK CODE

class InCartItem {
   constructor (title, price, description, background) {
      this.title = title;
      this.price = price;
      this.desc = description;
      this.background = background;
   }
}

class Cart {
   addNewCartItem(item){
      const cartItem = document.createElement('div')
      cartItem.className = 'cart-item'
      cartItem.innerHTML = `
         <img src="${item.background}">
         <div>
            <p>${item.title}</p>
            <p><span class="item-count">1</span> x ₦${item.price}</p>
         </div>
      `

      const cartList = document.querySelector('#cart-list')
      cartList.appendChild(cartItem)
   }
}


for (let i = 0; i < allItems.children.length; i++){
   allItems.children[i].children[1].children[1].addEventListener('click', (e) => {

      const title = allItems.children[i].children[1].children[0].children[0].textContent;
      const price = Number(allItems.children[i].children[1].children[0].children[1].children[0].textContent);
      const description = allItems.children[i].children[1].children[0].children[2].textContent;
      const background = allItems.children[i].children[0].style.backgroundImage.split('"')[1]

      const newInCart = new InCartItem(title, price, description, background)
      
      const newCartItem = new Cart(newInCart)
      newCartItem.addNewCartItem(newInCart)
      
      document.querySelector('#cart-list').addEventListener('click', (e) => {
         const allCartItem = document.querySelector('#cart-list').children[i].children[0].src
      })
   })

}

