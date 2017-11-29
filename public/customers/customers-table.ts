const customersTableComponent = {
    templateUrl: './customers/customers-table.html',
    bindings: {
        customers: '<'
    },
    controller: customersTableComponentController
};

function customersTableComponentController(){
    var vm = this;
}

export default customersTableComponent;