var app = app || {};

_.templateSettings = {
  interpolate: /\{\{\=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g
};

app.router = new app.AppRouter();
app.reservations = new app.Reservations();

$(document).ready(function() {
  app.appView = new app.AppView();
  Backbone.history.start();
  app.reservations.fetch();
});
