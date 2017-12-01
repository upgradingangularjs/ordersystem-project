//We don't need or use this validateDate directive,
//it's just here to illustrate attribute directives.
function validateDateDirective() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function link(scope, element, attrs, ngModel) {
            function changeViewValue(value) {
                ngModel.$viewValue = value;
                ngModel.$commitViewValue();
                ngModel.$render();
            }

            function fromUser(text) {
                text = text || '';

                text = text.replace(
                    /(\/00\d{2})$/,
                    function (year) {
                        var twoDigit = year.substr(3, 4);
                        if (twoDigit.match(new RegExp('^[012]{1}', ''))) {
                            return ("/20" + twoDigit);
                        } else {
                            return ("/19" + twoDigit);
                        }
                    }
                );

                changeViewValue(text);

                return text;
            }

            function toUser(text) {
                return text;
            }

            ngModel.$parsers.push(fromUser);
            ngModel.$formatters.push(toUser);

            element.bind('blur', function () {
                ngModel.$commitViewValue();
            });
        }
    };
}

export default validateDateDirective;