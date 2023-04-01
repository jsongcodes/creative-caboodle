class RemoveTopicIdFromResources < ActiveRecord::Migration[6.1]
  def change
    remove_column :resources, :topic_id, :integer
  end
end
