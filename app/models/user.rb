class User < ApplicationRecord
    has_secure_password

    has_many :notes
    has_many :resources, through: :notes

    # has_many :poly_users, as: :creator
    has_many :resources

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum: 3}
end