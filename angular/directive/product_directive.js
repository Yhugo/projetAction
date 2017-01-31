angular.module('shop').directive('product', 
  [function() {
    return {
      restrict: 'E',
      templateUrl: 'template/product.html',
      link: function(scope, element, attrs) {
        scope.buy = function() { scope.product.buy(); }
      }
    }
  }]);
