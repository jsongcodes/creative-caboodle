class AddFavoritesToResources < ActiveRecord::Migration[6.1]
  def change
    add_column :resources, :favorites, :integer
  end
end
