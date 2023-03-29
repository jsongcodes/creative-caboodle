class Note < ApplicationRecord
    belongs_to :user
    belongs_to :resource
    
    validates :title, presence: true
    validates :content, presence: true
end
