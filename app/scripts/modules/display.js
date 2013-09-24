define(['backbone'], function(Backbone) {

  var Display = {};

  Display.Model = Backbone.Model.extend({
    defaults: {
      amount: parseFloat('0').toFixed(2)
    }
  });

  Display.View = Backbone.View.extend({
    el: '#display',
    initialize: function(){
      this.model = new Display.Model();

      this.model.on('change', this.render, this);



      this.render();
    },
    render: function(){
      console.log('Render Display.View');
      this.$el.html(this.model.get('amount'));
      return this;
    }
  });


  return Display;
});