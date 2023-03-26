class NoteSerializer < ActiveModel::Serializer
  attributes :id, :resource_id, :title, :content, :user_id

  has_one :user
  has_one :resource
end
