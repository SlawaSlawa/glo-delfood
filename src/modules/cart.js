const cart = () => {
    const buttonCart = document.querySelector('.button-cart');
    const modalCart = document.querySelector('.modal-cart');
    const close = modalCart.querySelector('.close');
    const modalBody = modalCart.querySelector('.modal-body');
    const buttonSend = modalCart.querySelector('.button-primary');
    const buttonCancel = modalCart.querySelector('.clear-cart');
    const modalPricetag = modalCart.querySelector('.modal-pricetag');

    const resetCart = () => {
        modalCart.classList.remove('is-open');
        modalBody.innerHTML = '';
        modalPricetag.textContent = 0 + ' ' + '₽';
        localStorage.removeItem('cart');
    };

    const incrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'));

        cartArray.map(item => {
            if (item.id === id) {
                item.count++;
            }
            return item
        });

        localStorage.setItem('cart', JSON.stringify(cartArray));
        renderItems(cartArray);
    };

    const dicrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'));

        cartArray.map(item => {
            if (item.id === id) {
                item.count = item.count > 0 ? item.count - 1 : 0;
            }
            return item;
        });

        localStorage.setItem('cart', JSON.stringify(cartArray));
        renderItems(cartArray);
    };

    const calculateAllSumm = () => {
        const cartArray = JSON.parse(localStorage.getItem('cart'));

        const summ = cartArray.reduce((pre, cur) => {

            return pre + cur.price * cur.count;
        }, 0);

        modalPricetag.textContent = summ + ' ' + '₽';
    };

    const renderItems = (data) => {
        modalBody.innerHTML = '';

        data.forEach(cartItem => {
            const { name, price, count, id } = cartItem;
            const cartElem = document.createElement('div');
            cartElem.classList.add('food-row');
            cartElem.innerHTML = `
                    <span class="food-name">${name}</span>
                    <strong class="food-price">${price} ₽</strong>
                    <div class="food-counter">
                        <button class="counter-button btn-dec" data-index="${id}">-</button>
                        <span class="counter">${count}</span>
                        <button class="counter-button btn-inc" data-index="${id}">+</button>
                    </div>
            `;

            calculateAllSumm();
            modalBody.append(cartElem);
        });
    };

    modalBody.addEventListener('click', (evt) => {
        evt.preventDefault();
        const target = evt.target;

        if (target.classList.contains('btn-inc')) {
            incrementCount(target.dataset.index);
        } else if (target.classList.contains('btn-dec')) {
            dicrementCount(target.dataset.index);
        }
    });

    buttonSend.addEventListener('click', () => {
        const cartArray = localStorage.getItem('cart');

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: cartArray
        })
            .then(response => {
                if (response.ok) {
                    resetCart();
                }
            })
            .catch(err => {
                console.error(err);
            })
    });

    buttonCancel.addEventListener('click', resetCart);

    buttonCart.addEventListener('click', () => {
        if (localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')));
        }

        modalCart.classList.add('is-open');
    });

    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open');
    });

    modalPricetag.textContent = 0 + ' ' + '₽';
};

export default cart;

