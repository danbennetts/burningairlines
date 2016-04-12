class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :users, through: :reservations
end
