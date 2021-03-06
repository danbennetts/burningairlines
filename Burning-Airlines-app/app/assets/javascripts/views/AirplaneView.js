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
    this.confirmReservation(flight_id);
      // this.checkReserved(response.reservations);

  },

  createRow: function(){
    $('#main').append('<div class="airplane-view"></div>')
    for (var i = 1; i <= this.model.get('rows'); i++){
      $(".airplane-view").append('<div class="row" id=' + i + '>' + '<span class="row-number">' + i + '</span>' +'</div>');
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
        var reservationUser = reservation.user_id;
        var currentUser = $('#thisIsInsecure').data('user-id');
        console.log(reservationUser, currentUser);
        if (currentUser === reservationUser) {
          $('#' + rowNumber).find('[data-seat="' + seatNumber + '"]').css({
            backgroundColor: "#44D15B",
            color: 'white',
            pointerEvents: "none"
          });
        } else {
          $('#' + rowNumber).find('[data-seat="' + seatNumber + '"]').css({
            backgroundColor: "#8F8585",
            color: 'white',
            pointerEvents: "none"
          });
        }
      });
    });

  },

  confirmReservation: function(flight_id){
      $('#confirm').on('click', function(){
        $('#confirm-header-selection').text('We are just processing your Order')
        $('#confirm').html('Thank You' + '<img src="assets/spinner.gif">');
      });

      $('#confirm').on('click', function(){
        setTimeout(function(){
          var confirmed = $('[selected=selected]');
            if (confirmed.length > 0){
              var seatRow = parseInt(confirmed.parent("div").attr("id"));
              var seatColumn = confirmed.data('seat');
              var flightId = parseInt(flight_id);


              var reservation = new app.Reservation({
                seat_row: seatRow,
                seat_column: seatColumn,
                flight_id: flightId
              });
              reservation.save().done(function(){
                app.router.navigate('', true);
              });
              console.log(seatRow,seatColumn, flightId);
            } else {
              // alert("pick a fucking seat you dickhead");
            }
        }, 5000);
        })
    }
});
