var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search': 'searchShow',
    'airplanes/:plane_id/:flight_id': 'searchSeats',
    'reservations/:id': 'bookingShow'
  },

  index: function() {
    var appView = new app.AppView();
    app.reservations.fetch().done(function(){
      appView.render();
    });
  },

  searchShow: function() {
    var searchView = new app.SearchView();
    searchView.render();
  },

  bookingShow: function(id) {
    app.reservations.fetch().done(function () {
      var reservation = app.reservations.get(id);
      var bookingView = new app.BookingView({
        model: reservation
      });
      bookingView.render();
    });
  },

  searchSeats: function(plane_id, flight_id){
    app.airplanes.fetch().done(function(){
      var airplane = app.airplanes.get(plane_id);
      var flight = app.flights.get(flight_id);
      var airplaneView = new app.AirplaneView({
        model: airplane,
        flight: flight_id
      });
      airplaneView.render(plane_id, flight_id);

    });

  }


});
