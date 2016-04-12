class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.integer :flight_number
      t.string :origin
      t.string :destination
      t.date :date
      t.integer :airplane_id

      t.timestamps null: false
    end
  end
end
