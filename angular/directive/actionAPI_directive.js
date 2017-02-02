angular.module('ProjetActions').directive('actionrecherche',
    [function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'angular/template/ActionAPI.html'/*,
            Plus besoin
            link: function(scope, element, attrs) {
                scope.buy = function() {
                    scope.action.buy();
                }
            }*/
        }
    }]
);
