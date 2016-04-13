var app = app || {};

app.ReservationView = Backbone.View.extend({

  tagName: 'ul',

  render: function() {
    var reservationID = this.model.get("id");
    reservation_id_li = $('<li>');
    reservation_id_li.text(reservationID);
    this.$el.append(reservation_id_li);

    var userID = this.model.get("user_id");
    var flightID = this.model.get("flight_id");
    var seatRow = this.model.get("seat_row");
    var seatColumn = this.model.get("seat_column");
    var flightNum = this.model.get("flight_number");
    var origin = this.model.get("origin");
    var destination = this.model.get("destination");
    var date = this.model.get("date");
    var airplaneID = this.model.get("airplane_id");
    var planeName = this.model.get("name");

    this.$el.prependTo('#reservations');
  }

});
