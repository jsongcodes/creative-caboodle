class Resource < ApplicationRecord
    has_many :resources_topics, dependent: :destroy
    has_many :topics, through: :resources_topics

    has_many :notes
    has_many :users, through: :notes

    belongs_to :user
end