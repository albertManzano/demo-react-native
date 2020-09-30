const filterByPrice = (items, price) => {
    return items.filter(item => item.price === price)
};

export default filterByPrice;