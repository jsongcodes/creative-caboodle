class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :website_url,  :title, :free, :description, :favorites

  has_many :notes
  has_many :users, through: :notes

  has_many :resources_topics
  has_many :topics, through: :resources_topics
end
