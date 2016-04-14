var app = app || {};

_.templateSettings = {
 interpolate: /\{\{\=(.+?)\}\}/g,
 evaluate: /\{\{(.+?)\}\}/g
};


$(document).ready(function() {

  // Code to fix weird json admin rendering bug, don't delete plz
  if ($("#main").length === 0) {
    return false;
  }


 app.router = new app.AppRouter();
 app.reservations = new app.Reservations();
 app.flights = new app.Flights();
 app.airplanes = new app.Airplanes();
 app.appView = new app.AppView();
 Backbone.history.start();




});
