const urlSearchParams = new URLSearchParams(window.location.search);

const itemType = urlSearchParams.get('item_type');

console.log(itemType);

const priceView = document.querySelector('.price-value-container');
const quantityView = document.querySelector('.quantity-container-view');

const incButton = document.querySelector('.inc-button');
const decButton = document.querySelector('.dec-button');

if (itemType === 'cheese_pizza' || itemType === 'vegetable_pizza') {

    let initialValue = 10;

    if (itemType === 'vegetable_pizza') {
        initialValue = 15;

        document.querySelector('img').src = '/images/vegetable_pizza.jpg';
        document.querySelector('.item-title').innerText = 'Vegetable Pizza';

        priceView.innerText = '15$';
    }

    const [sr, mr, lr] = document.querySelectorAll('input');

    sr.addEventListener('click', e => {
        const quantity = parseInt(quantityView.innerText);
        const newPrice = quantity * initialValue;
        priceView.innerText = `${newPrice}$`
    });

    mr.addEventListener('click', e => {
        const quantity = parseInt(quantityView.innerText);
        const newPrice = quantity * (initialValue + 5);
        priceView.innerText = `${newPrice}$`
    });

    lr.addEventListener('click', e => {
        const quantity = parseInt(quantityView.innerText);
        const newPrice = quantity * (initialValue + 7);
        priceView.innerText = `${newPrice}$`
    });

    incButton.addEventListener('click', e => {
        let extraCharges = 0;

        const [sr, mr, lr] = document.querySelectorAll('input');

        if (sr.checked) {
            extraCharges = 0;
        } else if (mr.checked) {
            extraCharges = 5;
        } else if (lr.checked) {
            extraCharges = 7;
        }

        const quantity = parseInt(quantityView.innerText) + 1;
        quantityView.innerText = `${quantity}`;

        const newPrice = quantity * (initialValue + extraCharges);
        priceView.innerText = `${newPrice}$`
    });

    decButton.addEventListener('click', e => {
        let extraCharges = 0;

        const [sr, mr, lr] = document.querySelectorAll('input');

        if (sr.checked) {
            extraCharges = 0;
        } else if (mr.checked) {
            extraCharges = 5;
        } else if (lr.checked) {
            extraCharges = 7;
        }

        let quantity = parseInt(quantityView.innerText);

        if (quantity === 1) {
            return;
        }

        quantity--;

        quantityView.innerText = `${quantity}`;

        const newPrice = quantity * (initialValue + extraCharges);
        priceView.innerText = `${newPrice}$`
    })

} else if (itemType === 'fries') {

    document.querySelector('img').src = '/images/fries.jpg';
    document.querySelector('.item-title').innerText = 'Fries';

    document.querySelector('.size-form-group').remove();

    let initialValue = 10;

    incButton.addEventListener('click', e => {
        const quantity = parseInt(quantityView.innerText) + 1;
        quantityView.innerText = `${quantity}`;
        const newPrice = quantity * initialValue;
        priceView.innerText = `${newPrice}$`
    });

    decButton.addEventListener('click', e => {
        let quantity = parseInt(quantityView.innerText);

        if (quantity === 1) {
            return;
        }

        quantity--;

        quantityView.innerText = `${quantity}`;
        const newPrice = quantity * initialValue;
        priceView.innerText = `${newPrice}$`
    })
}

document.querySelector('.view-cart-button').addEventListener('click', e => {
    window.location = '/pages/cart.php';
});

document.querySelector('.add-to-cart-button').addEventListener('click', e => {
    let myData = {
        item_type: itemType,
        price: parseInt(priceView.innerText.replace('$', '')),
        quantity: parseInt(quantityView.innerText)
    };

    if (itemType.includes('pizza')) {
        const [sr, mr, lr] = document.querySelectorAll('input');

        if (sr.checked) {
            myData['size'] = 'Small';
        } else if (mr.checked) {
            myData['size'] = 'Medium';
        } else if (lr.checked) {
            myData['size'] = 'Large';
        }
    }

    let pizzaBookingSystemData = window.localStorage.getItem('pizza_booking_system');

    if (pizzaBookingSystemData === null) {
        window.localStorage.setItem('pizza_booking_system', JSON.stringify([
            myData
        ]))
    } else {
        const newData = JSON.parse(pizzaBookingSystemData);
        newData.push(myData);
        window.localStorage.setItem('pizza_booking_system', JSON.stringify(newData));
    }

    window.location = '/pages/cart.php';
});