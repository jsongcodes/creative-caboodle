class UserResourcesSerializer < ActiveModel::Serializer
  attributes :id, :website_url, :title, :description, :free
end
