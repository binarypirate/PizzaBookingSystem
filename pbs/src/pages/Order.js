import React, {useState} from 'react';
import cheesePizzaImg from '../images/cheese_pizza.jpg';
import vegetablePizzaImg from '../images/vegetable_pizza.jpg';
import friesImg from '../images/fries.jpg';

const calculatePrice = (itemType, size, qty) => {
    if (itemType !== 'fries' ) {
        if (size === 's') {
            return (itemType === 'cheese_pizza' ? 10 : 15) * qty
        } else if (size === 'm') {
            return (itemType === 'cheese_pizza' ? 10 + 5 : 15 + 5) * qty
        } else if (size === 'l') {
            return (itemType === 'cheese_pizza' ? 10 + 10 : 15 + 10) * qty
        }
    } else {
        return 10 * qty
    }
}

const Order = () => {
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('s');

    const urlSearchParams = new URLSearchParams(window.location.search);
    const itemType = urlSearchParams.get('item_type');

    return (
        <div className={'w-screen h-screen flex flex-col'}>
            <div className="weight-0.5 bg-red-500 flex justify-between px-5 items-center">
                <p className="text-3xl font-bold uppercase text-white">Order Item</p>
                <p className="view-cart-button text-3xl font-bold uppercase text-white bg-blue-500 p-2 rounded hover:bg-blue-600 cursor-pointer" onClick={e => {
                    window.location = '/?page=cart';
                }}>View Cart</p>
            </div>

            <div className="weight-2 bg-blue-500 flex">
                <div className="flex-1 bg-blue-600 flex flex-col justify-center items-center gap-2">
                    <div className="w-1/2 h-1/2">
                        {itemType === 'cheese_pizza' && <img className="w-full h-full object-cover" src={cheesePizzaImg} alt="cheese pizza"/>}
                        {itemType === 'vegetable_pizza' && <img className="w-full h-full object-cover" src={vegetablePizzaImg} alt="cheese pizza"/>}
                        {itemType === 'fries' && <img className="w-full h-full object-cover" src={friesImg} alt="cheese pizza"/>}
                    </div>
                    <p className="text-3xl text-white uppercase font-bold item-title">{itemType === 'cheese_pizza' ? 'Cheese Pizza' : itemType === 'vegetable_pizza' ? 'Vegetable Pizza' : 'Fries'}</p>
                </div>
                <div className="flex-1 bg-blue-700 flex flex-col justify-center">

                    { itemType !== 'fries' && <div className="size-form-group form-group flex gap-3 p-3">
                        <p className="text-3xl text-white bg-blue-500 p-3">Size:</p>
                        <div className="flex gap-2 items-center">
                            <div className="radio-group flex justify-center items-center gap-2">
                                <input type="radio" checked={size === 's'} onClick={e => {
                                    setSize('s');
                                }}/>
                                <p className="text-2xl text-white font-bold">Small</p>
                            </div>

                            <div className="radio-group flex justify-center items-center gap-2">
                                <input type="radio" checked={size === 'm'} onClick={e => {
                                    setSize('m');
                                }}/>
                                <p className="text-2xl text-white font-bold">Medium</p>
                            </div>

                            <div className="radio-group flex justify-center items-center gap-2">
                                <input type="radio" checked={size === 'l'} onClick={e => {
                                    setSize('l');
                                }}/>
                                <p className="text-2xl text-white font-bold">Large</p>
                            </div>
                        </div>
                    </div>}

                    <div className="form-group flex gap-3 p-3 items-center">
                        <p className="text-3xl text-white bg-blue-500 p-3">Quantity:</p>
                        <div className="flex-1 flex items-center justify-between">
                            <p className="text-3xl text-white quantity-container-view">{qty}</p>
                            <div className="flex items-center">
                                <div className="inc-button bg-green-500 w-10 h-10 flex justify-center items-center text-white text-3xl hover:bg-green-600 cursor-pointer" onClick={e => {
                                    setQty(qty + 1);
                                }}>
                                    +
                                </div>
                                <div style={{ width: '1px' }} className="h-10 bg-black"></div>
                                <div className="dec-button bg-red-500 h-10 w-10 flex justify-center items-center text-white text-3xl hover:bg-red-600 cursor-pointer" onClick={e => {
                                    if (qty === 1) {
                                        return;
                                    }

                                    setQty(qty - 1);
                                }}>
                                    -
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group flex gap-3 p-3 items-center">
                        <p className="text-3xl text-white bg-blue-500 p-3">Price:</p>
                        <p className="text-3xl text-white price-value-container">{calculatePrice(itemType, size, qty)}$</p>
                    </div>

                    <div className="form-group flex gap-3 p-3 items-center">
                        <p className="add-to-cart-button flex-1 text-center text-3xl font-bold uppercase text-white bg-green-500 p-2 rounded hover:bg-green-600 cursor-pointer" onClick={e => {
                            let myData = {
                                item_type: itemType,
                                price: calculatePrice(itemType, size, qty),
                                quantity: qty
                            };

                            if (itemType !== 'fries') {
                                myData['size'] = size === 's' ? 'Small' : size === 'm' ? 'Medium' : 'Large'
                            }

                            const pizzaBookingSystemData = window.localStorage.getItem('pizza_booking_system');

                            if (pizzaBookingSystemData === null) {
                                window.localStorage.setItem('pizza_booking_system', JSON.stringify([
                                    myData
                                ]))
                            } else {
                                const newData = JSON.parse(pizzaBookingSystemData);
                                newData.push(myData);
                                window.localStorage.setItem('pizza_booking_system', JSON.stringify(newData));
                            }

                            window.location = '/?page=cart';
                        }}>Add to Cart</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Order;