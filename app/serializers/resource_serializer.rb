class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :website_url,  :title, :free, :description

  has_many :notes
  has_many :users, through: :notes


end
