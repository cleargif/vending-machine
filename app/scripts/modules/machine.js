define(['backbone'], function(Backbone) {

  var Machine = {};

  Machine.ProductsView = Backbone.View.extend({
    el: '#machine',
    initialize: function() {
      var _products = [];
      this.collection.each(function(data) {
        _products.push(new Machine.ProductView({
          model: data
        }).el);
      });
      this.render(_products);
    },
    render: function(elem) {
      this.$el.append(elem);
      return this;
    }
  });

  Machine.ProductView = Backbone.View.extend({
    tagName: 'li',
    events: {
      'click button': 'selectProduct'
    },
    template: _.template('<%= name %> // quantity: <%= quantity %> capacity: <%= capacity %> <button id="<%= id %>">Buy</button>'),
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.append(this.template(this.model.toJSON()));
      return this;
    },
    selectProduct: function(e) {
      e.preventDefault();
      $(e.currentTarget).html('Clicked');
      App.vent.trigger('selectProduct', $(e.currentTarget).attr('id'));
    }
  });
  return Machine;
});