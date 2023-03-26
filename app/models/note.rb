class Note < ApplicationRecord
    belongs_to :user
    belongs_to :resource
    
    # # old
    # has_one :resource

    validates :title, presence: true
    validates :content, presence: true
end
