let defaultItems = [
   {
      id: 1,
      name: "Brown Brim",
      image: "https://i.ibb.co/ZYW3VTp/brown-brim.png",		
      price: 2700,
      inCart:0
   },
   {
      id: 2,
      name: "Blue Beanie",
      image: "https://i.ibb.co/ypkgK0X/blue-beanie.png",			
      price: 2800,
      inCart:0
   },
   {
      id: 3,
      name: "Brown Cowboy",
      image: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",				
      price: 3500,
      inCart:0
   },
   {
      id: 4,
      name: "Grey Brim",
      image:"https://i.ibb.co/RjBLWxB/grey-brim.png",	
      price: 3000,
      inCart:0
   },
   {
      id: 5,
      name: "Adidas NMD",
      image: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",		
      price: 15000,
      inCart:0
   },
   {
      id: 6,
      name: "Adidas Yeezy",
      image:"https://i.ibb.co/dJbG1cT/yeezy.png",
      price: 18000,
      inCart:0
   },
   {
      id: 7,
      name: "Black Converse",
      image:"https://i.ibb.co/bPmVXyP/black-converse.png",
      price: 13500,
      inCart:0
   },
   {
      id: 8,
      name: "Nike White AirForce",
      image:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
      price: 16000,
      inCart:0
   },
   {
      id: 9,
      name: "Black Jean Shearling",
      image:"https://i.ibb.co/XzcwL5s/black-shearling.png",
      price: 12500,
      inCart:0
   },
   {
      id: 10,
      name: "Blue Jean Jacket",
      image:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
      price: 9000,
      inCart:0
   },
   {
      id: 11,
      name: "Grey Jean Jacket",
      image:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
      price: 9000,
      inCart:0
   },
   {
      id: 12,
      name: "Brown Shearling",
      image:"https://i.ibb.co/s96FpdP/brown-shearling.png",
      price: 9500,
      inCart:0
   },
   {
      id: 13,
      name: "Blue Tanktop",
      image:"https://i.ibb.co/7CQVJNm/blue-tank.png",	
      price: 3800,
      inCart:0
   },
   {
      id: 14,
      name: "Floral Blouse",
      image:"https://i.ibb.co/4W2DGKm/floral-blouse.png",
      price: 4500,
      inCart:0
   },
   {
      id: 15,
      name: "Floral Dress",
      image:"https://i.ibb.co/KV18Ysr/floral-skirt.png",				
      price: 4500,
      inCart:0
   },
   {
      id: 16,
      name: "Red Dots Dress",
      image:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
      price: 4000,
      inCart:0
   },
   {
      id: 17,
      name: "Camo Down Vest",
      image:"https://i.ibb.co/xJS0T3Y/camo-vest.png",	
      price: 7250,
      inCart:0
   },
   {
      id: 18,
      name: "Floral T-shirt",
      image:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",				
      price: 3750,
      inCart:0
   },
   {
      id: 19,
      name: "Black & White Longsleeve",
      image:"https://i.ibb.co/55z32tw/long-sleeve.png",			
      price: 5500,
      inCart:0
   },
   {
      id: 20,
      name: "Pink T-shirt",
      image:"https://i.ibb.co/RvwnBL8/pink-shirt.png",		
      price: 4500,
      inCart:0
   }
]

let allItems = document.querySelector('#allItems')

let seeAllButton = document.querySelector('#see-all')

defaultItems.forEach(function(item, index){
   let newItem = document.createElement('div')
   newItem.setAttribute('class', 'item-card')

   newItem.innerHTML = `
      <div class="imageDiv">
      </div>
      <div class="textDiv">
         <p>${item.name}</p>
         <h3><span>N</span>${item.price}</h3>
         <button>Add to Cart</button>
      </div>
      <aside class="expand">
         <img src="img/expand.svg">
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
})

