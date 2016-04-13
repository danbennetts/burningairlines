var app = app || {};

app.AirplaneView = Backbone.View.extend({

  el: '#main',

  render: function() {

    var airplaneViewTemplate = $('#airplaneViewTemplate').html();
    var airplaneViewHTML = _.template( airplaneViewTemplate );
    this.$el.html( airplaneViewHTML( this.model.toJSON() ) );
    this.$el.prependTo('#reservations');
    this.createRow();
    this.createSeats();
    this.setSets();
  },

  createRow: function(){
    for (var i = 1; i <= this.model.get('rows'); i++){
      $("#main").append('<div class="row" id=' + i + '></div>');
    };
  },

  createSeats: function(){
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    for (var i = 0; i < this.model.get('columns'); i++){
      $('.row').append('<div class="seat"  data-seat=' + alpha[i] + '></div>');
    }
  },

  setSets: function(){
    $.each($('.seat'), function (i, seat) {
      var setSeats = $(seat).text($(this).data('seat'));
    });
  }

});
