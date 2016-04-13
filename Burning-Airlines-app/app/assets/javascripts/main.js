var app = app || {};


$(document).ready(function() {
  app.appView = new app.AppView();
  app.reservations = new app.Reservations();

  app.reservations.fetch();
  app.router = new app.AppRouter();
  Backbone.history.start();
});
