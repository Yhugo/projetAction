angular.module('ProjetActions').factory('ActionAPI',
    [function() {
        var ActionAPI = function(data) {
            this.name = data.t;
            this.provenance = data.e;
            this.quantity = 1;
            this.price = data.l;
        }
/*
        décalé dans le controller
        ActionAPI.prototype.buy = function() {
            var action = this;
            angular.element(document.getElementById('pannelGestion')).scope().ajoutGestion(action);
        }
*/
        return ActionAPI;
    }]);