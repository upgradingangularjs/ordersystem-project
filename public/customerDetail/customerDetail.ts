import * as moment from 'moment';

const customerDetailComponent = {
    templateUrl: './customerDetail/customerDetail.html',
    bindings: {
        customer: '<'
    },
    controller: customerDetailComponentController
};

customerDetailComponentController.$inject = ['addressService', 'orderService'];
function customerDetailComponentController (addressService, orderService) {
    var vm = this;
    vm.title = 'Customer Detail';
    vm.customer = this.customer;
    
    vm.$onInit = () => {
        vm.address = addressService.getFullAddress(vm.customer);
        vm.orders = orderService.getOrdersByCustomer(vm.customer.id);
        vm.orders.forEach((order) => {
            order.orderDate = moment(order.orderDate).format("MM/DD/YYYY");
        });
    }

    vm.updateDiscount = function(discount){
        vm.customer.discount = discount;
    };
}

export default customerDetailComponent;