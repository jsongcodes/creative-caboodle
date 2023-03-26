class User < ApplicationRecord
    has_secure_password

    # new
    has_many :resources
    has_many :topics, through: :resources
    has_many :notes
    
    # # not sure
    # has_many :notes

    # # original
    # has_many :topics
    # has_many :resources
    # has_many :topic_resources, through: :topics, source: :resource

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum: 3}
end