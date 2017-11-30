const template = require('./customers-table.html');

const customersTableComponent = {
    template: template,
    bindings: {
        customers: '<'
    },
    controller: customersTableComponentController
};

function customersTableComponentController(){
    var vm = this;
}

export default customersTableComponent;