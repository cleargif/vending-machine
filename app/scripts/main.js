var App = {};
require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
  }
});

require(['modules/product', 'modules/machine', 'modules/display', 'modules/coins'], function(Product, Machine, Display, Coins) {


  App.vent = _.extend({}, Backbone.Events);

  App.display = new Display.View();
  App.coins = new Coins.CoinsView({
    collection: new Coins.Collection([{
      value: 0.10,
      display: '10p'
    }, {
      value: 0.20,
      display: '20p'
    }, {
      value: 0.50,
      display: '50p'
    }, {
      value: 1.00,
      display: '£1'
    }])
  });

  App.productsCol = new Product.Collection([{
    quantity: 10,
    capacity: 10,
    price: '0.50',
    name: 'Mars'
  }, {
    quantity: 10,
    capacity: 10,
    price: '0.65',
    name: 'Snickers'
  }, {
    quantity: 10,
    capacity: 10,
    price: '0.75',
    name: 'Ready Salted'
  }]);

  App.machineView = new Machine.ProductsView({
    collection: App.productsCol
  });

});