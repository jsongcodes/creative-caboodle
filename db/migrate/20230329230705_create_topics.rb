class CreateTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :topics do |t|
      t.string :title
      t.string :image_url
      t.string :description

      t.timestamps
    end
  end
end
