class Topic < ApplicationRecord

    # has_many :resources
    # has_many :users, through: :resources

    # has_and_belongs_to_many :resources
    has_many :resources_topics
    has_many :resources, through: :resources_topics


    validates :title, presence: true
    validates :image_url, presence: true
    validates :description, presence: true, length: {minimum: 3}
end