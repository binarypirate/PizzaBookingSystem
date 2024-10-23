import React from 'react';
import cheesePizzaImg from '../images/cheese_pizza.jpg';
import vegetablePizzaImg from '../images/vegetable_pizza.jpg';
import friesImg from '../images/fries.jpg';

const ItemHolder = ({title, imgSrc, onClick}) => {
    return <div className={'w-1/5 h-3/4 bg-red-500 item-holder'} onClick={onClick}>
        <div className={'h-3/4 bg-red-700'}>
            <img className={'w-full h-full object-cover'} src={imgSrc} alt="menu item"/>
            <div className={'h-1/4 flex justify-center items-center'}>
                <p className={'text-3xl font-bold uppercase'}>{title}</p>
            </div>
        </div>
    </div>
}

const Dashboard = () => {
    return (
        <div className={'w-screen h-screen bg-red-500 flex flex-col'}>
            <div className={'top-area bg-purple-500 flex justify-center items-center'}>
                <h1 className={'text-5xl'}>PIZZA BOOKING SYSTEM</h1>
            </div>
            <div className={'middle-area bg-purple-300 flex justify-around items-center'}>
                <ItemHolder
                    title={'Cheese Pizza'}
                    imgSrc={cheesePizzaImg}
                    onClick={e => {
                        window.location = '/?page=order&item_type=cheese_pizza'
                    }}
                />
                <ItemHolder
                    title={'Vegetable Pizza'}
                    imgSrc={vegetablePizzaImg}
                    onClick={e => {
                        window.location = '/?page=order&item_type=vegetable_pizza'
                    }}
                />
                <ItemHolder
                    title={'Fries'}
                    imgSrc={friesImg}
                    onClick={e => {
                        window.location = '/?page=order&item_type=fries'
                    }}
                />
            </div>
            <div className={'bottom-area bg-purple-400 flex justify-center items-center'}>
                <h1 className={'my-button text-3xl bg-blue-500 px-6 py-4 rounded-full text-white font-bold cursor-pointer hover:bg-blue-600'} onClick={e => {
                    window.location = '/?page=cart'
                }}>VIEW CART</h1>
            </div>
        </div>
    );
};

export default Dashboard;