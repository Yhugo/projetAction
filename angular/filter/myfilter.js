angular.module('ProjetActions.filters', [])
    .filter('myFilter', function () {
        return function(actionsRecherche, val1, val2) {

            var filtered = [];
            angular.forEach(actionsRecherche, function(action) {
                var prix = parseFloat(action.price);

                if(prix){
                    if (val1 && !(prix < val1)) {
                        filtered.push(true);
                    }else{
                        filtered.push(false);
                    }

                    if (val2 && !(prix > val2)) {
                        filtered.push(true);
                    }else{
                        filtered.push(false);
                    }
                }
            });
            console.log(filtered);
            return filtered;
        }
    });
