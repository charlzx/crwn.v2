class Catergory {
   ItemCatergory (newItem, tag, id){
      if (newItem.catergory === tag){
              
         let item = document.createElement('div')
         item.setAttribute('class', 'item-card')
         item.setAttribute('id', `item-${newItem.id}`)
         
         item.innerHTML = `
            <div class="imageDiv">
            </div>
            <div class="textDiv">
               <div>
                  <p>${newItem.name}</p>
                  <h3>₦<span>${newItem.price}</span></h3>
                  <div class="description"></div>
               </div>
               <button class="cart-button">Add to Cart</button>
            </div>
            <aside>
               <img class="expand" src="img/expand.svg" alt="expand the item card">
            </aside>
         `

         item.firstElementChild.style.background = `url('${newItem.image}')`;
         item.firstElementChild.style.backgroundRepeat = "no-repeat";
         item.firstElementChild.style.backgroundSize = 'cover';

         id.appendChild(item)

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
      
                     <aside>
                        <img class="remove-popup" src="img/cancel.svg" alt="exit the item tag">
                     </aside>
                  </div>
               `
               
               popup.firstElementChild.style.background = `url('${newItem.image}')`;
               popup.firstElementChild.style.backgroundRepeat = "no-repeat";
               popup.firstElementChild.style.backgroundSize = 'cover';
               popup.firstElementChild.style.backgroundPosition = '100%';
      
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
      }
   }
}

// women catergory
let women_catergory = new Catergory;

// women section tag in html
let women = document.querySelector('#women-tag')

defaultItems.forEach((newItem) => {
   women_catergory.ItemCatergory(newItem, 'women', women)
})


// men catergory
let men_catergory = new Catergory;

// men section tag in html
let men = document.querySelector('#men-tag')

defaultItems.forEach((newItem) => {
   men_catergory.ItemCatergory(newItem, 'men', men)
})


// jackets catergory
let jackets_catergory = new Catergory;

// jackets section tag in html
let jackets = document.querySelector('#jackets-tag')

defaultItems.forEach((newItem) => {
   jackets_catergory.ItemCatergory(newItem, 'jacket', jackets)
})


// sneakers catergory
let sneakers_catergory = new Catergory;

// sneakers section tag in html
let sneakers = document.querySelector('#sneakers-tag')

defaultItems.forEach((newItem) => {
   sneakers_catergory.ItemCatergory(newItem, 'sneakers', sneakers)
})


// hats catergory
let hats_catergory = new Catergory;

// hats section tag in html
let hats = document.querySelector('#hats-tag')

defaultItems.forEach((newItem) => {
   hats_catergory.ItemCatergory(newItem, 'hat', hats)
})

