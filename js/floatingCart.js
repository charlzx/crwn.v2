// cart icon

let cartIcon = document.querySelector('#cart-icon')
let cartSvg = document.querySelector('.svg')

// create a div for cart items
let cartDiv = document.createElement('div')
cartDiv.id = "cart-div"
// cart div content
cartDiv.innerHTML = `
   <section id="cart-list"></section>
   <button>Go To Checkout</button>
`
cartDiv.style.display = 'none';

// append cart div
cartIcon.appendChild(cartDiv)

// toggle cart div when cart icon is clicked
cartSvg.addEventListener('click', () => {

   if (cartDiv.style.display == 'none') {
      cartDiv.style.display = 'block';
   } 
   else if (cartDiv.style.display == 'block') {
      cartDiv.style.display = 'none';
   }

})