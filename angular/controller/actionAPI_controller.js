angular.module('ProjetActions').controller('actionAPI_controller',
    ['$scope', '$http', 'ActionAPI', function($scope, $http, ActionAPI) {
        $scope.valmin=0;
        $scope.valmax=999999;
        $http.get('actions.json')
            .then(function(response) {
                $scope.actionsRecherche = [];
                response.data.forEach(function(data) {
                    var newAction = new ActionAPI(data);
                    $scope.actionsRecherche.push(newAction);
                });
            }, function(error) {
                console.log(error);
            });

        $scope.buy=function(action){
            //Provisoire.
            angular.element(document.getElementById('pannelGestion')).scope().addAction(action);
        }

        $scope.myFilter = function (ActionAPI) {
            var price = parseFloat(ActionAPI.price);
            var min = parseFloat($scope.valmin);
            var max = parseFloat($scope.valmax);
            if (!price) {
                return false;
            }
            if(min && price < min) {
                return false;
            }
            if(max && price > max) {
                return false;
            }
            return true;
        };
    }]);