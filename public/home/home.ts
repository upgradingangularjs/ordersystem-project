const template = require('./home.html');

const homeComponent = {
    template: template,
    bindings: {},
    controller: homeComponentController
};

function homeComponentController(){
    var vm = this;
    vm.title = 'Awesome, Inc. Internal Ordering System';
}

export default homeComponent;