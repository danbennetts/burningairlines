json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :user_id, :flight_id, :seat_row, :seat_column
  json.extract! reservation.flight, :flight_number, :origin, :destination, :date, :airplane_id
  json.extract! reservation.flight.airplane, :name
  json.url reservation_url(reservation, format: :json)
end
