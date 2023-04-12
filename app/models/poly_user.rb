class PolyUser < ApplicationRecord
  belongs_to :creator, polymorphic: true


end
