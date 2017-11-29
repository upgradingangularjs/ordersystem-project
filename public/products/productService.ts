class ProductService {
    $http: any;
    constructor($http){
        this.$http = $http;
    }

    getProducts() {
        return products();
    }

    getProduct(id) {
        return products().filter((p) => p.id === id)[0];
    }

    postProduct(product) {
        return this.$http.post('/api/products', product)
            .then((data) => data);
    }
}

ProductService.$inject = ['$http'];

export default ProductService;

//Sample data
function products() {
    return [
        {
            id: 1,
            name: 'Amazing Widget',
            color: 'Red',
            price: 2.5
        },
        {
            id: 2,
            name: 'Incredible Widget',
            color: 'Blue',
            price: 2.5
        },
        {
            id: 3,
            name: 'Fantastic Widget',
            color: 'Yellow',
            price: 2.5
        },
        {
            id: 4,
            name: 'Collectible Widget Tote Bag',
            color: 'Sand',
            price: 10
        }
    ];
}