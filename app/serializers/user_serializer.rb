class UserSerializer < ActiveModel::Serializer
  attributes :id, :notes, :resources
end
