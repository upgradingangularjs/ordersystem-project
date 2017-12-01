describe('navigation component', function () {
    var $componentController, ctrl;

    beforeEach(function () {
        angular.mock.module('app');

        angular.mock.inject(function (_$componentController_) {
            $componentController = _$componentController_;
            ctrl = $componentController('navigation', null, {});
        });
    });

    it('should have the correct company name', function () {
        expect(ctrl.companyName).toEqual('Awesome, Inc.');
    });
}); 