// recently added section
let allItems = document.querySelector('#allItems')
let seeAllButton = document.querySelector('#see-all')

 // item card overlay
 let overlay = document.createElement('div')

 overlay.setAttribute('class', 'popup-overlay')


const defaultItems = async () => {
   const request = await fetch('json/default.json')

   const response = await request.json()

   return response;
}

defaultItems()
   // visualize items from json file
   .then(data => {
      data.forEach((newItem, index) => {
         let item = document.createElement('div')
         item.setAttribute('class', 'item-card')

         item.innerHTML = `
            <div class="imageDiv">
            </div>
            <div class="textDiv">
               <div>
                  <p>${newItem.name}</p>
                  <h3>₦<span>${newItem.price}</span></h3>
                  <div class="description"></div>
               </div>
               <button>Add to Cart</button>
            </div>
            <aside>
               <img class="expand" src="img/expand.svg" alt="expand the item card">
            </aside>
         `

         
         item.firstElementChild.style.background = `url('${newItem.image}')`;
         item.firstElementChild.style.backgroundRepeat = "no-repeat";
         item.firstElementChild.style.backgroundSize = 'cover';

         allItems.appendChild(item)

         // display only the 4 first items by default
         if (index > 3) {
            item.style.display = "none"
         }

         
         // display all items
         seeAllButton.addEventListener('click', function(){
            item.style.display = "initial"
            seeAllButton.style.display = "none"
         });

        

         // expand item card
         item.addEventListener('click', function(e){
            
            if (e.target.classList.contains('expand')) {
               let popup = document.createElement('div')
               popup.setAttribute('class', 'popup-card')

               popup.innerHTML = `
                  <div class="imageDiv"></div>
                  <div class="textDiv">
                  <h2>${newItem.name}</h2>
                  <p><span>₦</span>${newItem.price}</p>

                     <div class="desc">
                        <h3>Description</h3>
                        <p class="desc-text">${newItem.description}</p>
                     </div>

                     <button>Add to Cart</button>
                     
                     <aside>
                        <img class="remove-popup" src="img/cancel.svg" alt="exit the item tag">
                     </aside>
                  </div>
               `
               
               popup.firstElementChild.style.background = `url('${newItem.image}')`;
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

                // remove popup
               document.body.addEventListener('click', function(e){
                  if (e.target.classList.contains('remove-popup')){
                     document.body.style.overflowY = 'scroll';
                     overlay.style.display = 'none'
                     overlay.innerHTML = "";
                  }
               })

            }
         });
               
      })
   })
   .catch(error => console.log(error))