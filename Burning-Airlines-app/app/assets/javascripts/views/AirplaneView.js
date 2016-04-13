var app = app || {};

app.AirplaneView = Backbone.View.extend({

  el: '#main',

  render: function() {

    var airplaneViewTemplate = $('#airplaneViewTemplate').html();
    var airplaneViewHTML = _.template( airplaneViewTemplate );
    this.$el.html( airplaneViewHTML( this.model.toJSON() ) );
    this.$el.prependTo('#reservations');

  }
});
