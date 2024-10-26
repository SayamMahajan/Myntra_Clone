let itemContainerElement = document.querySelector('.items-container');

itemContainerElement.innerHTML = `
<div class="item-container">
                <img class="item-img" src="assets/images/item1.webp" alt="item_image">
                <div class="rating">4.5 ⭐ | 10.4k</div>
                <div class="company-name">Apple</div>
                <div class="item-name">iPhone</div>
                <div class="price">
                    <span class="current-price">Rs 50000</span>
                    <span class="original-price">Rs 70000</span>
                    <span class="discount">(33% OFF)</span>
                </div>
                <button class="btn-add-bag">Add to Bag</button>

            </div>`