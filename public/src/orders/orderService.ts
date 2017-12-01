class OrderService {
    $http: any;
    constructor($http) {
        this.$http = $http;
    }

    getOrders(){
        return this.$http.get('/api/orders')
            .then((response) => response.data);
    }

    getOrder(id){
        return this.$http.get(`/api/orders/${id}`)
            .then((response) => response.data);
    }

    getOrdersByCustomer(customerId){
        return this.$http.get(`/api/customers/${customerId}/orders`)
            .then((response) => response.data);
    }

    postOrder(order){
        return this.$http.post('/api/orders', order)
            .then(function(data){
                return data;
            });
    }
};

OrderService.$inject = ['$http'];

export default OrderService;