var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',

  render: function() {
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html( appViewTemplate );

    app.reservations.each(function(reservation){
      var reservationView = new app.ReservationView({
        model: reservation
      });
      reservationView.render();
    });

    $("#searchButton").on("click", function () {
      app.router.navigate('search', true);
    });

  }
});
