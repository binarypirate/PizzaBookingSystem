const root = document.querySelector('.root');

const mainFragment = document.createElement('div');
mainFragment.classList.add(...('w-screen h-screen bg-red-500 flex flex-col'.split(' ')));

mainFragment.innerHTML = `<div class="top-area bg-purple-500 flex justify-center items-center">
        <h1 class="text-5xl">PIZZA BOOKING SYSTEM</h1>
    </div>`;

const createItemHolder = (imgSrc, name, onClick) => {
    const itemHolder = (() => {
        const div = document.createElement('div');
        div.classList.add(...('w-1/5 h-3/4 bg-red-500 item-holder'.split(' ')));

        div.append((() => {
            const div = document.createElement('div');
            div.classList.add(...('h-3/4 bg-red-700'.split(' ')));

            div.appendChild((() => {
                const img = document.createElement('img');
                img.classList.add(...('w-full h-full object-cover'.split(' ')));
                img.src = imgSrc;
                img.alt = 'menu item';
                return img;
            })());
            return div;
        })(), (() => {
            const div = document.createElement('div');
            div.classList.add(...('h-1/4 flex justify-center items-center'.split(' ')));

            div.appendChild((() => {
                const p = document.createElement('p');
                p.classList.add(...('text-3xl font-bold uppercase'.split(' ')));
                p.innerText = name;
                return p;
            })());
            return div;

        })())

        return div;
    })();

    itemHolder.addEventListener('click', onClick);

    return itemHolder;
}

mainFragment.append(
    (() => {
        const div = document.createElement('div');
        div.classList.add(...('middle-area bg-purple-300 flex justify-around items-center'.split(' ')));

        div.append(
            createItemHolder('/images/cheese_pizza.jpg', 'Cheese Pizza', e => {
                window.location = '/order.php?item_type=cheese_pizza'
            }),
            createItemHolder('/images/vegetable_pizza.jpg', 'Vegetable Pizza', e => {
                window.location = '/order.php?item_type=vegetable_pizza'
            }),
            createItemHolder('/images/fries.jpg', 'Fries', e => {
                window.location = '/order.php?item_type=fries'
            })
        )

        return div;
    })(),
    (() => {
        const div = document.createElement('div');
        div.classList.add(...('bottom-area bg-purple-400 flex justify-center items-center'.split(' ')))

        div.append((() => {
            const h1 = document.createElement('h1');
            h1.classList.add(...('my-button text-3xl bg-blue-500 px-6 py-4 rounded-full text-white font-bold cursor-pointer hover:bg-blue-600'.split(' ')))
            h1.innerText = 'VIEW CART';
            return h1;
        })());

        return div;
    })()
)

root.appendChild(mainFragment);
