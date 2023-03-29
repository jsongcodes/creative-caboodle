class Resource < ApplicationRecord
    has_many :notes
    belongs_to :topic
    belongs_to :user

end
