var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',
  defaults: {
    // Defaults go here
  }
});
