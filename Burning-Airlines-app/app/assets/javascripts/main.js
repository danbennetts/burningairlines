var app = app || {};

_.templateSettings = {
  interpolate: /\{\{\=(.+?)\}\}/g,
  evaluate: /\{\{(.+?)\}\}/g
};

app.router = new app.AppRouter();
app.reservations = new app.Reservations();
app.airplanes = new app.Airplanes();

$(document).ready(function() {
  app.appView = new app.AppView();
  Backbone.history.start();
  app.reservations.fetch();
  app.airplanes.fetch();

  $("#searchButton").on("click", function () {
    app.router.navigate('search', true);
  });
});
