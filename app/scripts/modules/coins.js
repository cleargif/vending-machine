define(['backbone'], function(Backbone) {

  var Coins = {};

  Coins.Model = Backbone.Model.extend({

  });
  Coins.Collection = Backbone.Collection.extend({
    model: Coins.Model
  });

  Coins.CoinView = Backbone.View.extend({
    tagName: 'li',
    template: _.template('<button id="<%= id %>"><%= display %></button>'),
    initialize: function() {

      this.render();
    },
    render: function() {
      this.$el.append(this.template(this.model.toJSON()));
      return this;
    }
  });
  Coins.CoinsView = Backbone.View.extend({
    el: '#coins',
    initialize: function() {
      var _buttons = [];

      this.collection.each(function(data) {
        _buttons.push(new Coins.CoinView({
          model: data
        }).el);
      });
      this.render(_buttons);
    },
    render: function(elem) {
      this.$el.html(elem);
      return this;
    }
  });


  return Coins;
});