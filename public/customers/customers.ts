const customersComponent = {
    templateUrl: './customers/customers.html',
    bindings: {},
    controller: customersComponentController
};

customersComponentController.$inject = ['customerService', ];
function customersComponentController(customerService){
    var vm = this;
    vm.title = 'Customers';

    vm.$onInit = () => {
        customerService.getCustomers().then((data) => {
            vm.customers = data;
        });
    };
}

export default customersComponent;