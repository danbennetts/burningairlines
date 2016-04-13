var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search': 'searchShow',
    'airplanes/:id': 'searchSeats'
  },

  index: function() {
<<<<<<< HEAD
=======
    console.log("aljanljkn");
>>>>>>> 056befcc4ff3d7584a9a2c782a94780c9ebba150
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
