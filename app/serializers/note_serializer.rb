class NoteSerializer < ActiveModel::Serializer
  attributes :id, :resource_id, :title, :content, :user_id

  belongs_to :user
  # belongs_to :resource
end
