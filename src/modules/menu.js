const menu = () => {
    const cardsMenu = document.querySelector('.cards-menu');

    const changeTitle = (restaurant) => {
        const restaurantTitle = document.querySelector('.restaurant-title');
        const ratingEl = document.querySelector('.rating');
        const priceEl = document.querySelector('.price');
        const categoryEl = document.querySelector('.category');

        const { name, stars, price, kitchen } = restaurant;
        restaurantTitle.textContent = name;
        ratingEl.textContent = stars;
        priceEl.textContent = price;
        categoryEl.textContent = kitchen;
    };

    const renderItems = (data) => {
        data.forEach(item => {
            const { description, id, image, name, price } = item;

            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                <div class="card">
                    <img src="${image}" alt="${name}" class="card-image" />
                    <div class="card-text">
                        <div class="card-heading">
                            <h3 class="card-title card-title-reg">${name}</h3>
                        </div>
                        <!-- /.card-heading -->
                        <div class="card-info">
                            <div class="ingredients">${description}
                            </div>
                        </div>
                        <!-- /.card-info -->
                        <div class="card-buttons">
                            <button class="button button-primary button-add-cart">
                                <span class="button-card-text">В корзину</span>
                                <span class="button-cart-svg"></span>
                            </button>
                            <strong class="card-price-bold">${price} ₽</strong>
                        </div>
                    </div>
                    <!-- /.card-text -->
                </div>
                <!-- /.card -->
            `;

            cardsMenu.append(div);
        });
    };

    if (localStorage.getItem('restaurant')) {
        const restaurant = JSON.parse(localStorage.getItem('restaurant'));
        changeTitle(restaurant);

        fetch(`./db/${restaurant.products}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                renderItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        window.location.href = '/';
    }
};

export default menu;