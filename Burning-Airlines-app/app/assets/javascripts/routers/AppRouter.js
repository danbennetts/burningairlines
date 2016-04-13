var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search': 'searchShow'
  },
  index: function() {
    var appView = new app.AppView();
    appView.render();
  },
  searchShow: function() {
    $('#main').html('');
    var searchView = new app.SearchView({collection: flights});
    searchView.render();
  }
});
