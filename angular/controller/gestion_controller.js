angular.module('ProjetActions').controller('gestion_controller',
    ['$scope', '$http', 'ActionAPI', function($scope, $http, ActionAPI) {
        $scope.actionsgestion = [];

        $scope.addAction = function(action){

            // simulation du online
            var actionfind = $scope.actionsgestion.find(function(valeur) {
                return valeur.name === action.name;
            });

            console.log(actionfind);

            if(!actionfind){
                $scope.actionsgestion.push(action);
            }else{

            }
        }
    }]);