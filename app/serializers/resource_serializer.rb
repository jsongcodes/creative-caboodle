class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :topic_id, :video_url, :website_url, :user_id, :notes

  belongs_to :user
  has_many :notes
end
