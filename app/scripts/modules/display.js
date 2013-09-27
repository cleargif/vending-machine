define(['backbone'], function(Backbone) {

  var Display = {};

  Display.Model = Backbone.Model.extend({
    defaults: {
      amount: parseFloat('0').toFixed(2)
    },
    validate: function(attrs, options) {
      //
      // TO DO:
      // Validate the amount
    },
    subtractAmount: function(amount) {
      var _temp = this.get('amount'),
        newAmount = parseFloat(_temp - amount).toFixed(2) > 0 ? parseFloat(_temp - amount).toFixed(2) : 0;
      this.set('amount', newAmount, {
        validate: true
      });
    },
    addAmount: function(amount) {
      var _temp = parseFloat(this.get('amount'));
      this.set('amount', parseFloat(_temp + amount, 10).toFixed(2));
    }
  });

  Display.View = Backbone.View.extend({
    el: '#display',
    initialize: function() {
      this.model = new Display.Model();
      this.model.on('change', this.render, this);
      App.vent.on('money:add', this.model.addAmount, this.model);
      App.vent.on('product:select', this.processPurchase, this);
      this.render();
    },
    render: function() {
      this.$el.html(this.model.get('amount'));
      return this;
    },
    checkAmount: function() {
      return parseFloat(this.model.get('amount')).toFixed(2) > 0 ? true : false;
    },
    processPurchase: function(productModel) {
      var pm = productModel;
      this.model.subtractAmount(pm.get('price'));
    }
  });


  return Display;
});