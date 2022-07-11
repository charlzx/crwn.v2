
let carts = document.querySelectorAll(".cart-button");

let cartCount = document.querySelector('#cart-count')
// console.log(cartCount)

for (let i = 0; i < carts.length; i++){
   carts[i].addEventListener("click", (e) => {
      // console.log(i, e.target, defaultItems[i])
      // console.log(defaultItems[i])

      // split the ID and target the ID number
      let splitId = carts[i].parentElement.parentElement.id.split("-")[1] - 1

      addItemToCart(defaultItems[splitId])
   });


}

// counter for cart icon
let count = 0

function addItemToCart (item){
   const cartItem = document.createElement('div')
   
   cartItem.setAttribute('class', 'cart-item')

   console.log(cartItem)

   // increment the cart counter and increase the number on the cart icon
   count++
   // display the increment on the cart icon
   cartCount.innerHTML = `${count}`

   // reduce the font size if the increment is above 9, so the number fits into the cart icon
   if (count > 9){
      cartCount.style.fontSize = "10px"
   }

   // specific ID for each item
   let checkId = document.getElementById(`cart-item-${item.id}`)

   // if item ID does not exist (i.e the item hasn't been added to the cart), add the item to the cart
   if (!checkId){
      cartItem.innerHTML = `
         <img src="${item.image}">
         <div>
            <p>${item.name}</p>
            <p><span class="item-count" id="item-${item.id}-count">${item.inCart++ + 1}</span> x ₦${item.price}</p>
         </div>
      `
      
      cartItem.setAttribute('id', `cart-item-${item.id}`)

      const cartList = document.querySelector('#cart-list')
      cartList.appendChild(cartItem)

   } else {
      // if item ID already exist, increment the item counter instead
      let itemCount = document.querySelector(`#item-${item.id}-count`)

      itemCount.innerHTML = `${item.inCart++ + 1}`
   }
}
