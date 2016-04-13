var app = app || {};


app.BookingView = Backbone.View.extend({
  tagName: 'ul',

  render: function() {

    var bookingViewTemplate = $('#bookingViewTemplate').html();
    var bookingViewHTML = _.template( bookingViewTemplate );
    this.$el.html( bookingViewHTML( this.model.toJSON() ) );


  },
});
