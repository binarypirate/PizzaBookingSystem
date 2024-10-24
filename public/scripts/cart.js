const orderItemClone = document.querySelector('.order-item').cloneNode(true);
orderItemClone.classList.remove('hidden');

document.querySelector('.order-item').remove();

const ordersData = window.localStorage.getItem('pizza_booking_system');

if (ordersData !== null) {
    for (const orderItemData of JSON.parse(ordersData)) {
        const tmpNode = orderItemClone.cloneNode(true);

        if (orderItemData.item_type === 'cheese_pizza') {
            tmpNode.querySelector('.size-container').innerText = orderItemData['size'];
            tmpNode.querySelector('.quantity-container').innerText = orderItemData.quantity;
            tmpNode.querySelector('.price-container').innerText = `${orderItemData.price}$`;
        } else if (orderItemData.item_type === 'vegetable_pizza') {
            tmpNode.querySelector('.item-title').innerText = 'Vegetable Pizza';
            tmpNode.querySelector('img').src = '/images/vegetable_pizza.jpg';
            tmpNode.querySelector('.size-container').innerText = orderItemData['size'];
            tmpNode.querySelector('.quantity-container').innerText = orderItemData.quantity;
            tmpNode.querySelector('.price-container').innerText = `${orderItemData.price}$`;
        } else if (orderItemData.item_type === 'fries') {
            tmpNode.querySelector('.item-title').innerText = 'Fries';
            tmpNode.querySelector('img').src = '/images/fries.jpg';
            tmpNode.querySelector('.form-group').remove();
            tmpNode.querySelector('.quantity-container').innerText = orderItemData.quantity;
            tmpNode.querySelector('.price-container').innerText = `${orderItemData.price}$`;
        }

        document.querySelector('.order-items').appendChild(tmpNode);
        console.log(orderItemData);
    }
}

document.querySelector('.checkout-button').addEventListener('click', e => {
    alert('Checkout Successfully!');
    window.localStorage.setItem('pizza_booking_system', '[]');
    window.location = '/';
});


console.log(orderItemClone);