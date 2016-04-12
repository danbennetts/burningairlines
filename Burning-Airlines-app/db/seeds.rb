# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all()
daniel = User.create(email: 'daniel@ga.co', password: 'chicken', password_confirmation: 'chicken')
chris = User.create(email: 'chris@ga.co', password: 'chicken', password_confirmation: 'chicken')
harrison = User.create(email: 'harrison@ga.co', password: 'chicken', password_confirmation: 'chicken')

Airplane.destroy_all()
first_plane = Airplane.create(name: 'Boeing 737', columns: 4, rows: 30)
second_plane = Airplane.create(name: 'Boeing 747', columns: 6, rows: 40)
third_plane = Airplane.create(name: 'Boeing 787', columns: 5, rows: 35)
fourth_plane = Airplane.create(name: 'Airbus A380', columns: 7, rows: 40)

Flight.destroy_all()
flight_111 = Flight.create(flight_number: 111, origin: 'SYD', destination: 'LAX', date: DateTime.new(2016,4,19), airplane_id: first_plane.id)
flight_222 = Flight.create(flight_number: 222, origin: 'LAX', destination: 'SYD', date: DateTime.new(2016,4,20), airplane_id: first_plane.id)
flight_333 = Flight.create(flight_number: 333, origin: 'LAX', destination: 'LHR', date: DateTime.new(2016,4,20), airplane_id: second_plane.id)
flight_444 = Flight.create(flight_number: 444, origin: 'LHR', destination: 'LAX', date: DateTime.new(2016,4,21), airplane_id: second_plane.id)
flight_555 = Flight.create(flight_number: 555, origin: 'JFK', destination: 'CDG', date: DateTime.new(2016,4,23), airplane_id: third_plane.id)
flight_666 = Flight.create(flight_number: 666, origin: 'CDG', destination: 'JFK', date: DateTime.new(2016,4,24), airplane_id: third_plane.id)
flight_777 = Flight.create(flight_number: 777, origin: 'HKG', destination: 'SYD', date: DateTime.new(2016,4,27), airplane_id: fourth_plane.id)
flight_888 = Flight.create(flight_number: 888, origin: 'SYD', destination: 'HKG', date: DateTime.new(2016,4,28), airplane_id: fourth_plane.id)

Reservation.destroy_all()
daniel111 = Reservation.create(user_id: daniel.id, flight_id: flight_111.id, seat_row: 3, seat_column: "A")
daniel222 = Reservation.create(user_id: daniel.id, flight_id: flight_222.id, seat_row: 8, seat_column: "C")
chris333 =  Reservation.create(user_id: chris.id, flight_id: flight_333.id, seat_row: 9, seat_column: "B")
chris444 =  Reservation.create(user_id: chris.id, flight_id: flight_444.id, seat_row: 10, seat_column: "A")
harrison555 =  Reservation.create(user_id: harrison.id, flight_id: flight_555.id, seat_row: 15, seat_column: "B")
harrison666 =  Reservation.create(user_id: harrison.id, flight_id: flight_666.id, seat_row: 10, seat_column: "C")
