class Actor < ActiveRecord::Base
  has_many :roles
  has_many :movies, through: :roles

  validates :first_name, :last_name, presence: true
end