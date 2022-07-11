// recently added section
let allItems = document.querySelector('#allItems')
let seeAllButton = document.querySelector('#see-all')

 // item card overlay
 let overlay = document.createElement('div')

 overlay.setAttribute('class', 'popup-overlay')


const defaultItems = [
   {
      "id": 1,
      "name": "Brown Brim",
      "image": "https://i.ibb.co/ZYW3VTp/brown-brim.png",		
      "price": 2700,
      "inCart": 0,
      "catergory": "hat",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 2,
      "name": "Blue Beanie",
      "image": "https://i.ibb.co/ypkgK0X/blue-beanie.png",			
      "price": 2800,
      "inCart": 0,
      "catergory": "hat",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 3,
      "name": "Brown Cowboy",
      "image": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",				
      "price": 3500,
      "inCart": 0,
      "catergory": "hat",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 4,
      "name": "Grey Brim",
      "image":"https://i.ibb.co/RjBLWxB/grey-brim.png",	
      "price": 3000,
      "inCart": 0,
      "catergory": "hat",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 5,
      "name": "Adidas NMD",
      "image": "https://i.ibb.co/0s3pdnc/adidas-nmd.png",		
      "price": 15000,
      "inCart": 0,
      "catergory": "sneakers",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 6,
      "name": "Adidas Yeezy",
      "image":"https://i.ibb.co/dJbG1cT/yeezy.png",
      "price": 18000,
      "inCart": 0,
      "catergory": "sneakers",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 7,
      "name": "Black Converse",
      "image":"https://i.ibb.co/bPmVXyP/black-converse.png",
      "price": 13500,
      "inCart": 0,
      "catergory": "sneakers",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 8,
      "name": "Nike White AirForce",
      "image":"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
      "price": 16000,
      "inCart": 0,
      "catergory": "sneakers",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 9,
      "name": "Black Jean Shearling",
      "image":"https://i.ibb.co/XzcwL5s/black-shearling.png",
      "price": 12500,
      "inCart": 0,
      "catergory": "jacket",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 10,
      "name": "Blue Jean Jacket",
      "image":"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
      "price": 9000,
      "inCart": 0,
      "catergory": "jacket",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 11,
      "name": "Grey Jean Jacket",
      "image":"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
      "price": 9000,
      "inCart": 0,
      "catergory": "jacket",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 12,
      "name": "Brown Shearling",
      "image":"https://i.ibb.co/s96FpdP/brown-shearling.png",
      "price": 9500,
      "inCart": 0,
      "catergory": "jacket",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 13,
      "name": "Blue Tanktop",
      "image":"https://i.ibb.co/7CQVJNm/blue-tank.png",	
      "price": 3800,
      "inCart": 0,
      "catergory": "women",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 14,
      "name": "Floral Blouse",
      "image":"https://i.ibb.co/4W2DGKm/floral-blouse.png",
      "price": 4500,
      "inCart": 0,
      "catergory": "women",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 15,
      "name": "Floral Dress",
      "image":"https://i.ibb.co/KV18Ysr/floral-skirt.png",				
      "price": 4500,
      "inCart": 0,
      "catergory": "women",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 16,
      "name": "Red Dots Dress",
      "image":"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
      "price": 4000,
      "inCart": 0,
      "catergory": "women",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 17,
      "name": "Camo Down Vest",
      "image":"https://i.ibb.co/xJS0T3Y/camo-vest.png",	
      "price": 7250,
      "inCart": 0,
      "catergory": "men",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 18,
      "name": "Floral T-shirt",
      "image":"https://i.ibb.co/qMQ75QZ/floral-shirt.png",				
      "price": 3750,
      "inCart": 0,
      "catergory": "men",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 19,
      "name": "Black & White Longsleeve",
      "image":"https://i.ibb.co/55z32tw/long-sleeve.png",			
      "price": 5500,
      "inCart": 0,
      "catergory": "men",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   },
   {
      "id": 20,
      "name": "Pink T-shirt",
      "image":"https://i.ibb.co/RvwnBL8/pink-shirt.png",		
      "price": 4500,
      "inCart": 0,
      "catergory": "men",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, consectetur? Maxime minima iste reprehenderit saepe nisi doloremque omnis porro officia totam ducimus delectus aspernatur quas."
   }
]


// default catergory
defaultItems.forEach((newItem, index) => {
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

   allItems.appendChild(item)

   // display only the 4 first items by default
   if (index > 4) {
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
         popup.setAttribute('id', `item-${newItem.id}`)

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