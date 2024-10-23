import React from 'react';
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Cart from "./pages/Cart";

const PizzaBookingSystem = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    const page = urlSearchParams.get('page');

    if (page === null) {
        window.location.href = '/?page=dashboard'
    }

    if (page === 'dashboard') {
        return <Dashboard />
    } else if (page === 'order') {
        return <Order />
    } else if (page === 'cart') {
        return <Cart />
    }

    return <></>;
};

export default PizzaBookingSystem;