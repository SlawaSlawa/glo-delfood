const menu = () => {
    const restaurant = 'food-band';

    const renderItems = (data) => {
        data.forEach(item => {
            console.log(item);
        });
    };

    fetch(`./db/${restaurant}.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            renderItems(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export default menu;