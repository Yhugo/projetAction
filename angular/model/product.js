angular.module('shop').factory('Product', 
  [function() {
    var Product = function(data) {
      this.name = data.name;
      this.description = data.description;
      this.price = data.price;
    }
    
    Product.prototype.buy = function() {
      console.log('lapin');
    }
    
    return Product;
  }]);