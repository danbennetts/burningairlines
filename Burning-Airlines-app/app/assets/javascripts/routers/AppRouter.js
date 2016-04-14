var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search': 'searchShow',
    'airplanes/:plane_id/:flight_id': 'searchSeats',
    'reservations/:id': 'bookingShow'
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

  bookingShow: function(id) {
    console.log('shazam');
    var reservation = app.reservations.get(id);
    var bookingView = new app.BookingView({
      model: reservation
    });
    bookingView.render();
  },

  searchSeats: function(plane_id){
    app.airplanes.fetch().done(function(){
      var airplane = app.airplanes.get(plane_id);
      var airplaneView = new app.AirplaneView({
        model: airplane
      });
      airplaneView.render();

    });

  }


});
