class CustomerService{
    $http: any;
    constructor($http) {
        this.$http = $http;
    }

    getCustomers(){
        return this.$http.get('/api/customers')
            .then((response) => response.data);
    }

    getCustomer(id){
        return this.$http.get(`/api/customers/${id}`)
            .then((response) => response.data);
    }

    postCustomer(customer){
        return this.$http.post('/api/customers', customer)
            .then((data) => data);
    }
}

CustomerService.$inject = ['$http'];

export default CustomerService;