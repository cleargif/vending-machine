define(['backbone', 'modules/app'], function(Backbone, App) {

   var Product = {};

    Product.Model = Backbone.Model.extend({

    });
    Product.Collection = Backbone.Collection.extend({
      model: Product.Model,
      initialize: function(){
        console.log(arguments)
      }
    });

  return Product;
});