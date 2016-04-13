var app = app || {};

app.ReservationView = Backbone.View.extend({

  tagName: 'ul',

  render: function() {

    var reservationViewTemplate = $('#reservationViewTemplate').html();
    var reservationViewHTML = _.template( reservationViewTemplate );
    this.$el.html( reservationViewHTML( this.model.toJSON() ) );
    this.$el.prependTo('#reservations');

  }

});
