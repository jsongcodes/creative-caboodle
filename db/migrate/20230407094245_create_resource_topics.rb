class CreateResourceTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :resource_topics do |t|
      t.references :resource, null: false, foreign_key: true
      t.references :topic, null: false, foreign_key: true

      t.timestamps
    end
    
    add_index :resource_topics, [:resource_id, :topic_id], unique: true
  end
end
