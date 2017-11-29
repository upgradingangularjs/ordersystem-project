const navigationComponent = {
    templateUrl: '../navigation/navigation.html',
    bindings: {},
    controller: navigationComponentController
};

function navigationComponentController(){
    var vm = this;
    vm.companyName = 'Awesome, Inc.';
}

export default navigationComponent;