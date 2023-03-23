class CreateResources < ActiveRecord::Migration[6.1]
  def change
    create_table :resources do |t|
      t.integer :topic_id
      t.string :video_url
      t.string :website_url
      t.string :type

      t.timestamps
    end
  end
end
