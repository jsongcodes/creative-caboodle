class NoteSerializer < ActiveModel::Serializer
  attributes :id, :resource_id, :content, :user_id, :user

  belongs_to :user
  # belongs_to :resource
end
