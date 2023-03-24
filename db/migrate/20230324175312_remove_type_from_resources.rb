class RemoveTypeFromResources < ActiveRecord::Migration[6.1]
  def change
    remove_column :resources, :type, :string
  end
end
