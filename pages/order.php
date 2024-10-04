<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pizza Booking System</title>
    <link rel="stylesheet" href="/styles/style.css">
</head>
<body>

<div class="root w-screen h-screen flex flex-col">

    <div class="weight-0.5 bg-red-500 flex justify-between px-5 items-center">
        <p class="text-3xl font-bold uppercase text-white">Order Item</p>
        <p class="view-cart-button text-3xl font-bold uppercase text-white bg-blue-500 p-2 rounded hover:bg-blue-600 cursor-pointer">View Cart</p>
    </div>

    <div class="weight-2 bg-blue-500 flex">
        <div class="flex-1 bg-blue-600 flex flex-col justify-center items-center gap-2">
            <div class="w-1/2 h-1/2">
                <img class="w-full h-full object-cover" src="/images/cheese_pizza.jpg" alt="cheese pizza">
            </div>
            <p class="text-3xl text-white uppercase font-bold item-title">Cheese Pizza</p>
        </div>
        <div class="flex-1 bg-blue-700 flex flex-col justify-center">

            <div class="size-form-group form-group flex gap-3 p-3">
                <p class="text-3xl text-white bg-blue-500 p-3">Size:</p>
                <div class="flex gap-2 items-center">
                    <div class="radio-group flex justify-center items-center gap-2">
                        <input type="radio" name="size" checked/>
                        <p class="text-2xl text-white font-bold">Small</p>
                    </div>

                    <div class="radio-group flex justify-center items-center gap-2">
                        <input type="radio" name="size"/>
                        <p class="text-2xl text-white font-bold">Medium</p>
                    </div>

                    <div class="radio-group flex justify-center items-center gap-2">
                        <input type="radio" name="size"/>
                        <p class="text-2xl text-white font-bold">Large</p>
                    </div>
                </div>
            </div>

            <div class="form-group flex gap-3 p-3 items-center">
                <p class="text-3xl text-white bg-blue-500 p-3">Quantity:</p>
                <div class="flex-1 flex items-center justify-between">
                    <p class="text-3xl text-white quantity-container-view">1</p>
                    <div class="flex items-center">
                        <div class="inc-button bg-green-500 w-10 h-10 flex justify-center items-center text-white text-3xl hover:bg-green-600 cursor-pointer">
                            +
                        </div>
                        <div style="width: 1px;" class="h-10 bg-black"></div>
                        <div class="dec-button bg-red-500 h-10 w-10 flex justify-center items-center text-white text-3xl hover:bg-red-600 cursor-pointer">
                            -
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group flex gap-3 p-3 items-center">
                <p class="text-3xl text-white bg-blue-500 p-3">Price:</p>
                <p class="text-3xl text-white price-value-container">10$</p>
            </div>

            <div class="form-group flex gap-3 p-3 items-center">
                <p class="add-to-cart-button flex-1 text-center text-3xl font-bold uppercase text-white bg-green-500 p-2 rounded hover:bg-green-600 cursor-pointer">
                    Add to Cart</p>
            </div>

        </div>
    </div>

</div>

<script type="application/javascript" src="/scripts/order_script.js"></script>

</body>
</html>
