var app = app || {};

app.SearchView = Backbone.View.extend({

  el: '#main',

  events: {
    'change #originSelect': 'updateDestSelect',
    'click #searchButton': 'loadResults'
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
    $('#destinationSelect').html("<option disabled selected>Select Destination</option>");
    var flightOrigin = $('#originSelect').val();
    var possibleFlights = _.filter(app.flights.models, function(flight){
      return flight.attributes.origin === flightOrigin;
    });

    var possibleFlightsUnique = _.uniq(possibleFlights, function(flight) {
      return flight.attributes.destination;
    });

    _.each(possibleFlightsUnique, function(flight){
      var $destination_option = $('<option>');
      $destination_option.val(flight.get('destination'));
      $destination_option.text(flight.get('destination'));
      $('#destinationSelect').append($destination_option);
    });
    $('#destinationSelect').prop('disabled', false).css({
      border: '2px solid #000',
      color: '#000'
    });
  },

  loadResults: function() {
    var $searchResults = $('#searchResults');
    $searchResults.html('');
    var origin = $('#originSelect').val();
    var destination = $('#destinationSelect').val();
    var matchingFlights = _.filter(app.flights.models, function(flight){
      return (flight.get('origin') === origin && flight.get('destination') === destination);
    });
    _.each(matchingFlights, function(flight){
      $flight_ul = $('<ul>');
      $flight_ul.addClass('searchResult');
      $flight_ul.attr({
        'data-flight-id': flight.get('id'),
        'data-plane-id': flight.get('airplane_id')
      });
      resultTemplate = $('#searchResultTemplate').html();
      resultHTML = _.template( resultTemplate );
      $flight_ul.html(  resultHTML( flight.toJSON() ) );
      $("#searchResults").append($flight_ul);
      // ASSIGN CLICK EVENT LISTENER
      $flight_ul.find('.toReservations').on("click", function () {
        app.router.navigate('airplanes/' + flight.get('airplane_id') +'/' + flight.get('id'), true);
      });

    });
  },

});
