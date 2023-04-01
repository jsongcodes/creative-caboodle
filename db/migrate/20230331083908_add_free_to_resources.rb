class AddFreeToResources < ActiveRecord::Migration[6.1]
  def change
    add_column :resources, :free, :boolean
  end
end
