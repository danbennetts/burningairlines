var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
  },
  index: function() {
    $('#main').html("test");
  }
});
