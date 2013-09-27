define(['backbone', 'modules/app'], function(Backbone, App) {

  var Product = {};

  Product.Model = Backbone.Model.extend({
    initialize: function() {}
  });
  Product.Collection = Backbone.Collection.extend({
    model: Product.Model,
    initialize: function() {
      console.log(arguments);
      App.vent.on('product:select', this.updateQuatity, this);

    },
    updateQuatity: function(productModel) {
      var pm = productModel;
      this.get(pm).set('quantity', pm.get('quantity') - 1);
    }
  });

  return Product;
});