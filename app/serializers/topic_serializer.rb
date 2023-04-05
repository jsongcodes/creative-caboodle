class TopicSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description
  
  has_many :resources_topics
  has_many :resources, through: :resources_topics
end
