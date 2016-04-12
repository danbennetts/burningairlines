var app = app || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: '/airplanes',
  defaults: {
    name: '',
    rows: 0,
    columns: 0
  }
});
