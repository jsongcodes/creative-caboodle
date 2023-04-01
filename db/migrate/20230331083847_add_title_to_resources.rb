class AddTitleToResources < ActiveRecord::Migration[6.1]
  def change
    add_column :resources, :title, :string
  end
end
