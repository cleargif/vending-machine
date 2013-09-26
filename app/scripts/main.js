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
      id: 'p10',
      value: 0.10,
      display: '10p'
    }, {
      id: 'p20',
      value: 0.20,
      display: '20p'
    }, {
      id: 'p50',
      value: 0.50,
      display: '50p'
    }, {
      id: 'p100',
      value: 1.00,
      display: '£1'
    }])
  });

  App.productsCol = new Product.Collection([{
    id: 1,
    quantity: 10,
    capacity: 10,
    price: 0.50,
    name: 'Mars'
  }, {
    id: 2,
    quantity: 10,
    capacity: 10,
    price: 2.50,
    name: 'Snickers'
  }, {
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