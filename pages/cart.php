<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pizza Booking System</title>
    <link rel="stylesheet" href="/styles/style.css">
</head>
<body>

<div class="root w-screen">

    <div class="h-32 bg-red-500 flex justify-between px-5 items-center">
        <p class="text-3xl font-bold uppercase text-white">CART</p>
        <p class="checkout-button text-3xl font-bold uppercase text-white bg-blue-500 p-2 rounded hover:bg-blue-600 cursor-pointer">Checkout</p>
    </div>

    <div class="order-items w-screen flex flex-col gap-3 p-3 bg-blue-500">
        <div class="order-item flex w-full h-72 bg-sky-700 hidden">
            <div class="weight-0.5 flex flex-col justify-center items-center gap-3">
                <div class="w-3/4 h-3/4">
                    <img class="w-full h-full object-cover" src="/images/cheese_pizza.jpg" alt="cheese pizza">
                </div>
                <p class="text-3xl text-white uppercase font-bold item-title">Cheese Pizza</p>
            </div>
            <div class="weight-2 flex flex-col justify-center">
                <div class="form-group flex gap-3 p-3 items-center">
                    <p class="text-3xl text-white bg-blue-500 p-3">Size:</p>
                    <p class="text-3xl text-white size-container">10$</p>
                </div>

                <div class="form-group flex gap-3 p-3 items-center">
                    <p class="text-3xl text-white bg-blue-500 p-3">Quantity:</p>
                    <p class="text-3xl text-white quantity-container">10$</p>
                </div>

                <div class="form-group flex gap-3 p-3 items-center">
                    <p class="text-3xl text-white bg-blue-500 p-3">Price:</p>
                    <p class="text-3xl text-white price-container">10$</p>
                </div>
            </div>
        </div>
    </div>

</div>

<script type="application/javascript" src="/scripts/cart.js"></script>

</body>
</html>
