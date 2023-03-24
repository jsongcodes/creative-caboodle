class Resource < ApplicationRecord
    has_one :note
    belongs_to :topic

    validates :website_url, presence: true
end
