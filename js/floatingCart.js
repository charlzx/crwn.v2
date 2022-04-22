cartDiv.id = "cart-div"

cartDiv.innerHTML = `
   <section id="cart-list"></section>
   <button>Go To Checkout</button>
   `
   cartDiv.style.display = 'none';
   cartIcon.appendChild(cartDiv)


cartSvg.addEventListener('click', () => {

   if (cartDiv.style.display == 'none') {
      cartDiv.style.display = 'block';
   } 
   else if (cartDiv.style.display == 'block') {
      cartDiv.style.display = 'none';
   }

})