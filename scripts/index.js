let bagItem;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItem');
  bagItem = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItem();
  displayBagIcon();
}
function addToBag(itemId){
    bagItem.push(itemId);
    localStorage.setItem('bagItem', JSON.stringify(bagItem));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-items');
    if (bagItem.length > 0) {
      console.log('I am here');
      bagItemCountElement.style.visibility = 'visible';
      bagItemCountElement.innerText = bagItem.length;
    } else {
      bagItemCountElement.style.visibility = 'hidden';
    }
}
function displayItem(){
    let itemContainerElement = document.querySelector('.items-container');
    let innerHTML = '';
    if(!itemContainerElement){
        return;
    }
    items.forEach(item => {
        innerHTML += `
    <div class="item-container">
        <img class="item-img" src="assets/images/${item.item_img}.webp" alt="item_image">
        <div class="rating">${item.rating.item_rating} ⭐ | ${item.rating.item_review}</div>
        <div class="">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
    })
    itemContainerElement.innerHTML = innerHTML;
}