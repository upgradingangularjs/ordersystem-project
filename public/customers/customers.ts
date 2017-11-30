const template = require('./customers.html');

const customersComponent = {
    template: template,
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