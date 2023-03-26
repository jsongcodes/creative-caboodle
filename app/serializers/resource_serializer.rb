class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :topic_id, :video_url, :website_url, :user_id

  belongs_to :user
end
