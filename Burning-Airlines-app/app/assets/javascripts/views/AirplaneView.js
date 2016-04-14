var app = app || {};

app.AirplaneView = Backbone.View.extend({

  el: '#main',

  render: function(plane_id, flight_id) {

    var airplaneViewTemplate = $('#airplaneViewTemplate').html();
    var airplaneViewHTML = _.template( airplaneViewTemplate );
    this.$el.html( airplaneViewHTML( this.model.toJSON() ) );
    this.$el.prependTo('#reservations');
    this.createRow();
    this.createSeats();
    this.setSets();
    this.checkSelected();
    this.checkReserved(flight_id);
      // this.checkReserved(response.reservations);

  },

  createRow: function(){
    for (var i = 1; i <= this.model.get('rows'); i++){
      $("#main").append('<div class="row" id=' + i + '></div>');
    }
  },

  createSeats: function(){
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    for (var i = 0; i < this.model.get('columns'); i++){
      $('.row').append('<div class="seat"  data-seat=' + alpha[i] + '></div>');
    }
  },

  setSets: function(){
    $.each($('.seat'), function (i, seat) {
      var setSeats = $(seat).text($(this).data('seat'));
    });
  },

  checkSelected: function(){
    $('.seat').on('click', function(){
      //
      $("[selected=selected]").attr('selected', false);
      $(this).attr('selected', true);
    });
  },

  checkReserved: function(flight_id) {
    app.flights.fetch().done(function() {
      var flight = app.flights.get(flight_id);
      _.each(flight.attributes.reservations, function(reservation){
        var rowNumber = reservation.seat_row;
        var seatNumber = reservation.seat_column;
        $('#' + rowNumber).find('[data-seat="' + seatNumber + '"]').css({
          backgroundColor: "red"
        });
      });
    });

  },



});
