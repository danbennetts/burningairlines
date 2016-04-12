class User < ActiveRecord::Base
  has_secure_password
  validates :email, :presence => true, :uniqueness => true
  has_many :reservations
  has_many :flights, through: :reservations
end
