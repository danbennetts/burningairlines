var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search': 'searchShow',
  },

  index: function() {
    console.log("aljanljkn");
    var appView = new app.AppView();
    app.reservations.fetch();
    appView.render();
  },

  searchShow: function() {
    var searchView = new app.SearchView();
    searchView.render();
  }
});
