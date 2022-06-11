<!-- note: this file would be used to document important changes -->

1. commit message: change previous process
changes:
- move the default items from js/defaultItems.js to [json/default.json](json/default.json)
- delete js/defaultItems.js
- added comments to [js/floatingCart.js](js/floatingCart.js)
- moved code from js/cards.js to [js/default.js](js/default.js) and use fetch, async & await to generate the default items from json/default.json
- display the links header in [index.html](index.html) + css tweaks
- delete script.js (would re-write it's functionality)
- create [changelog.md](changelog.md)

-------------

2. commmit message: remove .json
changes:
- remove json/default.json file i cannot send post requests since it's just a file in my local repo
(i should have thought about this before trying to use fetch, but i didn't 🤦🏽‍♂️)
- move the default items data to an array in [js/default.js](js/default.js), and run a for each loop to visualize items
- started work on "add to cart" functionality (still incomplete)
