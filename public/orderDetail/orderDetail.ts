//Don't forget to import lodash
import * as _ from 'lodash';

const orderDetailComponent = {
    templateUrl: './orderDetail/orderDetail.html',
    bindings: {
        order: '<'
    },
    controller: orderDetailComponentController
};

orderDetailComponentController.$inject = ['productService', 'customerService'];
function orderDetailComponentController(productService, customerService) {
    var vm = this;
    vm.title = 'Order Detail';
    vm.order = this.order;

    vm.$onInit = () => {
        var products = productService.getProducts();
        vm.customer = customerService.getCustomer(vm.order.customerId);
        vm.order.items.forEach(function (item) {
            var product = _.find(products, function (product) {
                return product.id === item.productId;
            });
            item.productName = product.name;
            item.itemPrice = item.quantity * product.price;
        });
    };
}

export default orderDetailComponent;