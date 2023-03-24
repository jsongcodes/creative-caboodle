class Topic < ApplicationRecord
    has_many :resources
    belongs_to :user

    validates :title, presence: true
    validates :image_url, presence: true
    validates :description, presence: true, length: {minimum: 3}
end
