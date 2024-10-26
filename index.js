let itemContainerElement = document.querySelector('.items-container');

let innerHTML = '';
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
    <button class="btn-add-bag">Add to Bag</button>
</div>`
})

itemContainerElement.innerHTML = innerHTML;