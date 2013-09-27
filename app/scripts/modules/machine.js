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
      this.$el.html(elem);
      return this;
    }
  });

  Machine.ProductView = Backbone.View.extend({
    tagName: 'li',
    events: {
      'click button': 'selectProduct'
    },
    template: _.template([
      '<%= name %>',
      '<span class="quantity">Q::<%= quantity %></span>',
      '<span class="price">£ <%= price %></span>',
      '<button class="buy" data-price="<%= price %>">Buy</button>'
    ].join('\n')),
    initialize: function() {

      this.model.on('change', this.render, this);
      this.render();
    },
    render: function() {

      console.log(this.model.toJSON())
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    selectProduct: function(e) {
      e.preventDefault();
      App.vent.trigger('product:select', this.model);
    }
  });
  return Machine;
});