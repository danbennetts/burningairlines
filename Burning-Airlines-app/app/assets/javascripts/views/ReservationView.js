var app = app || {};

app.ReservationView = Backbone.View.extend({

  tagName: 'ul',

  render: function() {

    var flightNum = this.model.get("flight_number");
    var $flightNumLi = $('<li>');
    $flightNumLi.text(flightNum);

    var origin = this.model.get("origin");
    var $originLi = $('<li>');
    $originLi.text(origin);

    var destination = this.model.get("destination");
    var $destinationLi = $('<li>');
    $destinationLi.text(destination);

    var date = this.model.get("date");
    var $dateLi = $('<li>');
    $dateLi.text(date);

    var seatRow = this.model.get("seat_row");
    var seatColumn = this.model.get("seat_column");
    var $seatInfoLi = $('<li>');
    $seatInfoLi.text(seatRow + seatColumn);



    var userID = this.model.get("user_id");
    var flightID = this.model.get("flight_id"); // Need that
    var airplaneID = this.model.get("airplane_id");
    var planeName = this.model.get("name");
    var reservationID = this.model.get("id");

    this.$el.append($flightNumLi, $originLi, $destinationLi, $dateLi, $seatInfoLi);
    this.$el.prependTo('#reservations');
  }

});
