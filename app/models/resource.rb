class Resource < ApplicationRecord
    has_many :notes
    belongs_to :topic
    belongs_to :user

    # # old
    # has_one :note
    # belongs_to :topic
    # belongs_to :user
end
