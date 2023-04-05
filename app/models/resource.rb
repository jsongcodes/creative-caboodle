class Resource < ApplicationRecord
    # has_many :notes
    # belongs_to :topic
    # belongs_to :user


    # after meeting with demetrio
    # has_and_belongs_to_many :topics
    # has_many :topics, though :resource_topics

    has_many :resources_topics
    has_many :topics, through: :resources_topics

    has_many :notes
    has_many :users, through: :notes

    has_many :poly_users, as: :creator


end