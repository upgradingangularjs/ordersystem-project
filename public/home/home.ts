var homeComponent = {
    templateUrl: './home/home.html',
    bindings: {},
    controller: homeComponentController
};

function homeComponentController(){
    var vm = this;
    vm.title = 'Awesome, Inc. Internal Ordering System';
}

export default homeComponent;