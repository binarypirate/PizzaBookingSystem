<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Order</title>
</head>
<body>
    <div class= "bg-amber-200 p-4">
        <div class= "flex flex-row bg-amber-200 p-4">
            <div class= "text-3xl text-amber-700 mr-auto mt-2">
                <h1>Pizza Booking System</h1>
            </div>
            <div class="my-button text-1xl bg-blue-500 px-6 py-4 rounded-full text-white font-bold cursor-pointer
            hover:bg-blue-600 ml-7 ">
                <Button>View Cart</Button>
            </div>
        </div>
            <div class="flex flex-row">
                <div class= "bg-red-600 ml-20">
                    <img src="/images/cheese_pizza.jpg" alt="Cheese">
                </div>

                <div class= "bg-yellow-500 ml-20 flex flex-col">
                    <h2 class="font-bold p-2">Size</h2>
                     <!-- Radio Button - 1 -->
                        <div class="flex flex-row ml-5">
                            <div className="form-check flex flex-row-reverse items-center">
                                <input
                                    className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label
                                    className="form-check-label text-3xl text-right font-bold text-gray-800"
                                    htmlFor="flexRadioDefault1"
                                >
                                    Small
                                </label>
                                </div>
                                <!-- Radio Button - 2 -->
                             <div class="ml-5">
                                <div className="form-check flex flex-row-reverse items-center">
                                    <input
                                        className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label
                                        className="form-check-label text-3xl text-right font-bold text-gray-800"
                                        htmlFor="flexRadioDefault1"
                                    >
                                        Medium
                                    </label>
                                </div>
                             </div>
                                <!-- Radio Button - 3 -->
                                    <div class="ml-5">
                                        <div className="form-check flex flex-row-reverse items-center">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label text-3xl text-right font-bold text-gray-800"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                
                             </div>
                                        <!-- Quantity -->
                                        <div class="flex flex-col mt-5">
                                                <h2 class="font-bold p-2">Quantity</h2>
                                                <div class="ml-5 flex flex-row">
                                                        <!-- Increment Radio Button  -->
                                                        <p>1</p>

                                                            <div class="ml-5">
                                                                <div className="form-check flex flex-row-reverse items-center">
                                                                    <input
                                                                            className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer"
                                                                            type="radio"
                                                                            name="flexRadioDefault"
                                                                            id="flexRadioDefault1"
                                                                        />
                                                                        <label
                                                                            className="form-check-label text-3xl text-right font-bold text-gray-800"
                                                                            htmlFor="flexRadioDefault1"
                                                                        >
                                                                            Increment
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <!-- Increment Radio Button  -->
                                                            <div class="ml-5 mr-5">
                                                                <div className="form-check flex flex-row-reverse items-center">
                                                                    <input
                                                                            className="form-check-input appearance-none rounded-full h-7 w-7 border-4 border-[#5F6368] bg-[#C4C4C4] hover:shadow-lg hover:shadow-[#5F6368] hover:border-[#3B52B5] checked:bg-[#7EABFF] checked:border-[#3B52B5] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer"
                                                                            type="radio"
                                                                            name="flexRadioDefault"
                                                                            id="flexRadioDefault1"
                                                                        />
                                                                        <label
                                                                            className="form-check-label text-3xl text-right font-bold text-gray-800"
                                                                            htmlFor="flexRadioDefault1"
                                                                        >
                                                                            Decrement
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        
                                </div>
                                    <div class="mt-5 ml-2 font-bold ">
                                        <h2>Price 10$</h2>
                                    </div>

                                    <div class="ml-2 mt-10 mr-2 bg-blue-500 px-6 py-4 rounded-full text-white font-bold cursor-pointer hover:bg-blue-600 text-center">
                                        <button>Add to Cart</button>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
   
</body>
</html>