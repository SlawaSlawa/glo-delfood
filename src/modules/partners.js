const partners = () => {
    const renderItems = (data) => {
        data.forEach(item => {
            console.log(item);
        });
    };

    fetch('https://glo-delfood-default-rtdb.firebaseio.com/db/partners.json')
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

export default partners;
