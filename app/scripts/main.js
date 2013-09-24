var App = {};
require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
  }
});

require(['modules/product', 'modules/machine', 'modules/display'], function(Product, Machine, Display) {


  App.vent = _.extend({}, Backbone.Events);

  App.display = new Display.View();


  App.productsCol = new Product.Collection([{
    id: 1,
    quantity: 10,
    capacity: 10,
    price: 0.50,
    name: 'Mars'
  },{
    id: 2,
    quantity: 10,
    capacity: 10,
    price: 2.50,
    name: 'Snickers'
  },{
    id: 3,
    quantity: 10,
    capacity: 10,
    price: 1.50,
    name: 'Ready Salted'
  }]);

  App.machineView = new Machine.ProductsView({
    collection: App.productsCol
  });

});