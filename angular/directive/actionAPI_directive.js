angular.module('ProjetActions').directive('actionrecherche',
    [function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'angular/template/ActionAPI.html',
            link: function(scope, element, attrs) {
                scope.buy = function() { scope.actionsRecherche.buy(); }
            }
        }
    }]
);
