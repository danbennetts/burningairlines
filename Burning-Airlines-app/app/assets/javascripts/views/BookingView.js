var app = app || {};


app.BookingView = Backbone.View.extend({
  el: '#main',

  render: function() {

    var bookingViewTemplate = $('#bookingViewTemplate').html();
    var bookingViewHTML = _.template( bookingViewTemplate );
    this.$el.html( bookingViewHTML( this.model.toJSON() ) );



  },
});
