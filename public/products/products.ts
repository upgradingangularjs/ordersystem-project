const template = require('./products.html');

const productsComponent = {
    template: template,
    bindings: {},
    controller: productsComponentController
};

productsComponentController.$inject = ['productService'];
function productsComponentController(productService){
    var vm = this;
    vm.title = 'Products';

    vm.$onInit = function(){
        return productService.getProducts()
            .then((data) => vm.products = data);
    };
}

export default productsComponent;