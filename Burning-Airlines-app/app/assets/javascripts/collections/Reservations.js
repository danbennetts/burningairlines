var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: '/reservations',

  events: {
    'click #8': 'bookingShow'
  },

  model: app.Reservation,

  initialize: function() {

  this.on("add", function(reservation){
    var reservationView = new app.ReservationView({
      model: reservation
    });
    reservationView.render();
  });

}
});
