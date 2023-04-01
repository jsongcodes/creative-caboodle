class RemoveCreatorIdFromResources < ActiveRecord::Migration[6.1]
  def change
    remove_column :resources, :creator_id, :integer
  end
end
