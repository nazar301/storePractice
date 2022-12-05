const productsArray = [
    {
        id:'1',
        title:'Coffee',
        price: 4.99
    },
    {
        id:'2',
        title:'Sunglasses',
        price: 9.99
    },
    {
        id:'3',
        title:'Camera',
        price: 39.99
    },
    {
        id:'4',
        title:'Tea',
        price: 2.99
    },
    {
        id:'5',
        title:'Bottle of Water',
        price: 1.99
    },
    {
        id:'6',
        title:'Soda',
        price: 2.99
    },
    {
        id:'7',
        title:'Notebook',
        price: 14.99
    },
    
]
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);
    if (productData === undefined) {
        console.log('Product data does not exist for ID:' + id)
        return undefined;
    }
    return productData;
}

export { productsArray, getProductData };