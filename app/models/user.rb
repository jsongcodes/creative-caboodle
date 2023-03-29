class User < ApplicationRecord
    has_secure_password

    has_many :resources
    has_many :topics, through: :resources
    has_many :notes

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum: 3}
end