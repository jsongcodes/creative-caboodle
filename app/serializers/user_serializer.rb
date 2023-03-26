class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :notes, serializer: UserNotesSerializer
  has_many :resources, serializer: UserResourcesSerializer
end
