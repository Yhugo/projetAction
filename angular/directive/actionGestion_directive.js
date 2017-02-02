angular.module('ProjetActions').directive('actiongestion',
    [function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'angular/template/ActionGestion.html',
            link: function(scope, element, attrs) {
                scope.buy = function() { scope.actionsRecherche.buy(); }
            }
        }
    }]
);