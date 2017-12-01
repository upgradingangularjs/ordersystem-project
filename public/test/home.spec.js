describe('home component', function(){
    var $componentController, ctrl;
 
    beforeEach(function(){
        module('app');
 
        inject(function(_$componentController_) {
            $componentController = _$componentController_;
            ctrl = $componentController('home', null, {});
        });
    });
 
    it('should have the correct title', function(){
        expect(ctrl.title).toEqual('Awesome, Inc. Internal Ordering System');
    });
 }); 