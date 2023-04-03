class Resource < ApplicationRecord
    # has_many :notes
    # belongs_to :topic
    # belongs_to :user


    # after meeting with demetrio
    has_and_belongs_to_many :topics

    has_many :notes
    has_many :users, through: :notes

    has_many :poly_users, as: :creator

    # def favorites_handler
    #     favorites + 1
    # end


end