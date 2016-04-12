var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    flight_number: 0,
    origin: 'unknown',
    destination: 'unknown'
  }
});
