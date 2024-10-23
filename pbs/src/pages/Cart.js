import React, {useRef, useState} from 'react';
import cheesePizzaImg from '../images/cheese_pizza.jpg';
import vegetablePizzaImg from '../images/vegetable_pizza.jpg';
import friesImg from '../images/fries.jpg';

const OrderItem = ({imgSrc, title, size, qty, price}) => {
    return <div className="order-item flex w-full h-72 bg-sky-700">
        <div className="weight-0.5 flex flex-col justify-center items-center gap-3">
            <div className="w-3/4 h-3/4">
                <img className="w-full h-full object-cover" src={imgSrc} alt="menu item"/>
            </div>
            <p className="text-3xl text-white uppercase font-bold item-title">{title}</p>
        </div>
        <div className="weight-2 flex flex-col justify-center">
            {size && <div className="form-group flex gap-3 p-3 items-center">
                <p className="text-3xl text-white bg-blue-500 p-3">Size:</p>
                <p className="text-3xl text-white size-container">{size}</p>
            </div>}

            <div className="form-group flex gap-3 p-3 items-center">
                <p className="text-3xl text-white bg-blue-500 p-3">Quantity:</p>
                <p className="text-3xl text-white quantity-container">{qty}</p>
            </div>

            <div className="form-group flex gap-3 p-3 items-center">
                <p className="text-3xl text-white bg-blue-500 p-3">Price:</p>
                <p className="text-3xl text-white price-container">{price}$</p>
            </div>
        </div>
    </div>
}

const OrderItemList = ({children}) => {
    return <div className="order-items w-screen flex flex-col gap-3 p-3 bg-blue-500">
        {children}
    </div>
}

const Cart = () => {
    let ordersData = window.localStorage.getItem('pizza_booking_system') ?? '[]';

    if (ordersData !== null) {
        ordersData = JSON.parse(ordersData)
    }

    console.log(ordersData);

    return (
        <div>
            <div className="h-32 bg-red-500 flex justify-between px-5 items-center">
                <p className="text-3xl font-bold uppercase text-white">CART</p>
                <p className="checkout-button text-3xl font-bold uppercase text-white bg-blue-500 p-2 rounded hover:bg-blue-600 cursor-pointer" onClick={e => {
                        alert('Checkout Successfully!');
                        window.localStorage.setItem('pizza_booking_system', '[]');
                        window.location = '/?page=dashboard';
                }}>Checkout</p>
            </div>

            <OrderItemList>
                {
                    ordersData.map((v, i) => {
                        const {item_type, price, quantity, size} = v;

                        return <OrderItem key={i}
                            title={item_type === 'cheese_pizza' ? 'Cheese Pizza' : item_type === 'vegetable_pizza' ? 'Vegetable Pizza' : 'Fries'}
                            size={size}
                            qty={quantity}
                            price={price}
                            imgSrc={item_type === 'cheese_pizza' ? cheesePizzaImg : item_type === 'vegetable_pizza' ? vegetablePizzaImg : friesImg }
                        />
                    })
                }

            </OrderItemList>
        </div>
    );
};

export default Cart;