//Don't forget to import lodash
import * as _ from 'lodash';

const template = require('./orders.html');

const ordersComponent = {
    template: template,
    bindings: {},
    controller: ordersComponentController
};

ordersComponentController.$inject = ['orderService', 'customerService', '$q'];
function ordersComponentController(orderService, customerService, $q) {
    var vm = this;
    vm.title = 'Orders';

    vm.$onInit = function() {
        let promises = [orderService.getOrders(), customerService.getCustomers()];
        return $q.all(promises).then((data) => {
            vm.orders = data[0];
            vm.customers = data[1];
            vm.orders.forEach(function (order) {
                var customer = _.find(vm.customers, function (customer) {
                    return order.customerId === customer.id;
                });
                order.customerName = customer.fullName;
            });
        });
    };
}

export default ordersComponent;