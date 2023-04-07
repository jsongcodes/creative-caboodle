class RemoveFreeFromResources < ActiveRecord::Migration[6.1]
  def change
    remove_column :resources, :free, :boolean
  end
end
