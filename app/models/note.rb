class Note < ApplicationRecord
    has_one :resource

    validates :title, presence: true
    validates :content, presence: true
end
