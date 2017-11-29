class ProductService {
    $http: any;
    constructor($http) {
        this.$http = $http;
    }

    getProducts(){
        return this.$http.get('/api/products')
            .then((response) => response.data);
    }

    getProduct(id){
        return this.$http.get(`/api/products/${id}`)
            .then((response) => response.data);
    }

    postProduct(product){
        return this.$http.post('/api/products', product)
            .then(function(data){
                return data;
            });
    }
};

ProductService.$inject = ['$http'];

export default ProductService;