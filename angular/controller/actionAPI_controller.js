angular.module('ProjetActions').controller('actionAPI_controller',
    ['$scope', '$http', 'ActionAPI', function($scope, $http, ActionAPI) {

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
    }]);