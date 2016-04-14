json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_number, :origin, :destination, :date, :airplane_id
  json.reservations flight.reservations
  json.url flight_url(flight, format: :json)
end
