class TopicSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description
end
