class NoteSerializer < ActiveModel::Serializer
  attributes :id

  has_one :user
  has_one :resource
end
