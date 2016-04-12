var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    // Possibly more defaults required...maybe
    flight_number: nil,
    origin: 'unknown',
    destination: 'unknown',
  }
});
