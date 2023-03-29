class UserResourcesSerializer < ActiveModel::Serializer
  attributes :id, :video_url, :website_url, :notes
end
