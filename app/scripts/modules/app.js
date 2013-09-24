define(['backbone'], function(Backbone) {
  App.Wahoo = Backbone.View.extend({
    initialize: function() {
      console.log( 'Wahoo!' );
    }
  });

  return App;
});