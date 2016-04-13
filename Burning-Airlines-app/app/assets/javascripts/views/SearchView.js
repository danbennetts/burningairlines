var app = app || {};

app.SearchView = Backbone.View.extend({

  el: '#main',

  events: {
    'change #originSelect': 'updateDestSelect',
  },

  render: function(){
    var searchViewTemplate = $('#searchViewTemplate').html();
    // Get array of all possible origins
    app.flights.fetch().done(function(response) {
      origin_options = _.chain(response).pluck('origin').uniq().value();
      _.each(origin_options, function(option){
        var $origin_option = $('<option>');
        $origin_option.val(option);
        $origin_option.text(option);
        $('#originSelect').append($origin_option);
      });
    });
    this.$el.html(searchViewTemplate);
  },

  updateDestSelect: function() {
    $('#destinationSelect').empty();
    var flightOrigin = $('#originSelect').val();
    var possibleFlights = _.filter(app.flights.models, function(flight){
      return flight.attributes.origin === flightOrigin;
    });
    _.each(possibleFlights, function(flight){
      var $destination_option = $('<option>');
      $destination_option.val(flight.get('destination'));
      $destination_option.text(flight.get('destination'));
      $('#destinationSelect').append($destination_option);
    });
  }

});
