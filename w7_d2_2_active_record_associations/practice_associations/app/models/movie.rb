class Movie < ActiveRecord::Base
  has_many :roles
  has_many :actors, through: :roles

  validates :title, :description, :year, presence: true
  validates :year, numericality: {less_than_or_equal_to: Date.today.year}
end