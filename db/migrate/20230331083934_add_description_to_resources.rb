class AddDescriptionToResources < ActiveRecord::Migration[6.1]
  def change
    add_column :resources, :description, :string
  end
end
