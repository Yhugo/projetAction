angular.module('ProjetActions').factory('ActionAPI',
    [function() {
        var ActionAPI = function(data) {
            this.name = data.t;
            this.provenance = data.e;
            this.price = data.l;
        }

        ActionAPI.prototype.buy = function() {
            console.log('You buy it !');
        }

        return ActionAPI;
    }]);