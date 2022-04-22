let allItems = document.querySelector('#allItems')
let seeAllButton = document.querySelector('#see-all')

// @media min-width: 400px
const mediaWidth = window.matchMedia('( min-width: 400px )')

let overlay = document.createElement('div')
overlay.setAttribute('class', 'popup-overlay')

defaultItems.forEach(function(item, index){
   let newItem = document.createElement('div')
   newItem.setAttribute('class', 'item-card')

   newItem.innerHTML = `
      <div class="imageDiv">
      </div>
      <div class="textDiv">
         <div>
            <p>${item.name}</p>
            <h3><span>N</span>${item.price}</h3>
         </div>
         <button>Add to Cart</button>
      </div>
      <aside>
         <img class="expand" src="img/expand.svg" alt="expand the item card">
      </aside>
   `

   newItem.firstElementChild.style.background = `url('${item.image}')`;
   newItem.firstElementChild.style.backgroundRepeat = "no-repeat";
   newItem.firstElementChild.style.backgroundSize = 'cover';

   allItems.appendChild(newItem)

   
   if (index > 9) {
      newItem.style.display = "none"
   }

   // event to display all items
   seeAllButton.addEventListener('click', function(){
      newItem.style.display = "initial"
   });
   
   // expand item card
   newItem.addEventListener('click', function(e){
      
      if (e.target.classList.contains('expand')) {
         let popup = document.createElement('div')
         popup.setAttribute('class', 'popup-card')

         popup.innerHTML = `
            <div class="imageDiv"></div>
            <div class="textDiv">
               <h2>${item.name}</h2>
               <p><span>₦</span>${item.price}</p>

               <div class="desc">
                  <h3>Description</h3>
                  <p class="desc-text">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas.
                  </p>
               </div>

               <button>Add to Cart</button>
               
               <aside>
                  <img class="remove-popup" src="img/cancel.svg" alt="exit the item tag">
               </aside>
            </div>
         `
         
         popup.firstElementChild.style.background = `url('${item.image}')`;
         popup.firstElementChild.style.backgroundRepeat = "no-repeat";
         popup.firstElementChild.style.backgroundSize = 'cover';
         popup.firstElementChild.style.backgroundPosition = '100%';

         // if (mediaWidth.matches) {
         //    popup.firstElementChild.style.background = '';
         // }

         overlay.appendChild(popup)
         overlay.style.display = 'block'
         
         document.body.style.overflowY = 'hidden'
         // overlay.style.overflowY = 'scroll'

         document.body.appendChild(overlay)

      }
   });

   // remove popup
   document.body.addEventListener('click', function(e){
      if (e.target.classList.contains('remove-popup')){
         document.body.style.overflowY = 'scroll';
         overlay.style.display = 'none'
         overlay.innerHTML = "";
      }
   })
})

