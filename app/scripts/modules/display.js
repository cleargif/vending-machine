define(['backbone'], function(Backbone) {

  var Display = {};

  Display.Model = Backbone.Model.extend({
    defaults: {
      amount: parseFloat('0').toFixed(2)
    },
    validate: function(attrs, options){
      console.log(attrs, options);
    },
    subtractAmount: function(amount){
      var _temp = this.get('amount'),
          newAmount = parseFloat(_temp - amount).toFixed(2) > 0 ? parseFloat(_temp - amount).toFixed(2) : 0;
      this.set('amount', newAmount, {validate: true});
    }
  });

  Display.View = Backbone.View.extend({
    el: '#display',
    initialize: function() {
      this.model = new Display.Model();
      this.model.on('change', this.render, this);
      App.vent.on('selectProduct', this.test, this);
      this.render();
    },
    render: function() {
      this.$el.html(this.model.get('amount'));
      return this;
    },
    test:  function(productId){
      //productId
      // Check there is money
        // no :: display alert
        // yes:: process sale
      console.log(this.checkAmount());

    },
    checkAmount: function(){
      return parseFloat(this.model.get('amount')).toFixed(2) > 0 ? true : false;
    }
  });


  return Display;
});