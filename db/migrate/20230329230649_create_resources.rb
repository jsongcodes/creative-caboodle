class CreateResources < ActiveRecord::Migration[6.1]
  def change
    create_table :resources do |t|
      t.string :website_url
      t.string :type
      t.integer :topic_id
      t.integer :creator_id

      t.timestamps
    end
  end
end
