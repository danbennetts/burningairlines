var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search': 'searchShow',
    'airplanes/:id': 'searchSeats'
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
  },

  searchSeats: function(id){
    var airplane = app.airplanes.get( id );
    //
    var airplaneView = new app.AirplaneView({
      model: airplane
    });
    airplaneView.render();
  }

});
