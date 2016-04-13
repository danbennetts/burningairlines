var app = app || {};

_.templateSettings = {
 interpolate: /\{\{\=(.+?)\}\}/g,
 evaluate: /\{\{(.+?)\}\}/g
};



$(document).ready(function() {
 app.router = new app.AppRouter();
 app.reservations = new app.Reservations();
 app.flights = new app.Flights();
 app.appView = new app.AppView();
 Backbone.history.start();
 // app.reservations.fetch();

});
