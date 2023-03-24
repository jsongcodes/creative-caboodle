class User < ApplicationRecord
    has_secure_password
    
    has_many :topics
    has_many :resources, through: :topics

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum: 3}
end
